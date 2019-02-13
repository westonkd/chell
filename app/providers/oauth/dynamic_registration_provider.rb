# frozen_string_literal: true

module Providers
  module Oauth
    class DynamicRegistrationProvider
      RESPONSE_TYPE = 'token'.freeze

      def initialize(redirect_uris, client_name, logo_uri, tool_configuration)
        @redirect_uris = redirect_uris
        @client_name = client_name
        @logo_uri = logo_uri
        @tool_configuration = tool_configuration
      end

      def register_client!
        HTTParty.post(
          # TODO: make configurable per env
          'http://canvas.docker/api/v1/client_registration',
          body: request_body,
          headers: request_headers
        )
      end

      private

      def request_headers
        cred_provider = ClientCredentialsProvider.new(Rails.application.class.parent_name)
        {
          'Authorization' => "Bearer #{cred_provider.access_token}"
        }
      end

      def request_body
        {
          redirect_uris: @redirect_uris,
          grant_types: [ClientCredentialsProvider::GRANT_TYPE],
          response_type: RESPONSE_TYPE,
          client_name: @client_name,
          logo_uri: @logo_uri,
          scope: ClientCredentialsProvider::DEFAULT_SCOPE,
          tool_configuration: {
            settings: @tool_configuration
          }
        }
      end
    end
  end
end