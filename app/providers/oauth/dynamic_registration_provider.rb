# frozen_string_literal: true

module Providers
  module Oauth
    class DynamicRegistrationProvider
      RESPONSE_TYPE = 'token'

      def initialize(redirect_uris = nil, client_name = nil, logo_uri = nil, tool_configuration = nil)
        @redirect_uris = redirect_uris
        @client_name = client_name
        @logo_uri = logo_uri
        @tool_configuration = tool_configuration
      end

      def register_client!
        HTTParty.post(
          # TODO: make configurable per env
          'http://canvas.docker/api/v1/clients',
          body: register_request_body,
          headers: request_headers
        )
      end

      def destroy_client!(client_id)
        HTTParty.delete(
          # TODO: make configurable per env
          "http://canvas.docker/api/v1/clients/#{client_id}",
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

      def register_request_body
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