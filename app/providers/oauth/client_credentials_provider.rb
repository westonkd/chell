# frozen_string_literal: true

module Providers
  module Oauth
    class ClientCredentialsProvider
      GRANT_TYPE = 'client_credentials'
      CLIENT_ASSERTION_TYPE = 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer'
      DEFAULT_SCOPE = 'com.instructure.ClientRegistration'
      ASSERTION_LIFETIME = 5.minutes.freeze

      def initialize(iss, scope = DEFAULT_SCOPE)
        @iss = iss
        @scope = scope
      end

      def access_token
        login_response.parsed_response['access_token']
      end

      private

      def login_response
        HTTParty.post(
          # TODO: make configurable per env
          'http://canvas.docker/login/oauth2/token',
          body: {
            grant_type: GRANT_TYPE,
            client_assertion_type: CLIENT_ASSERTION_TYPE,
            scope: @scope,
            client_assertion: client_assertion.to_s
          }
        )
      end

      def client_assertion
        JSON::JWT.new(
          iss: @iss,
          sub: Rails.application.credentials.canvas[:client_id],
          aud: Rails.application.credentials.canvas[:aud],
          iat: Time.zone.now.to_i,
          exp: (Time.zone.now + ASSERTION_LIFETIME).to_i,
          jti: SecureRandom.uuid
        ).sign(private_key)
      end

      def private_key
        JSON::JWK.new(Rails.application.credentials.canvas[:private_key])
      end
    end
  end
end
