# frozen_string_literal: true

module Api
  module V1
    class ToolsApiController < ApplicationController
      include ToolsApiHelper

      skip_before_action :verify_authenticity_token
      before_action :verify_tool_ownership, only: %i[publish destroy update]
      before_action :verify_publishable, only: :publish

      def publish
        response = Providers::Oauth::DynamicRegistrationProvider.new(
          tool.redirect_uris,
          tool.name,
          tool.logo_url,
          tool.json_config
        ).register_client!

        if response.ok?
          tool.update!(
            workflow_state: Tool::PUBLISHED,
            client_id: response.parsed_response['client_id'],
            client_secret: response.parsed_response['client_secret']
          )
        end

        render json: response.parsed_response, status: response.code
      end

      def destroy
        tool.destroy!
        head :no_content
      end

      def create
        render json: new_tool
      end

      def update
        head(:unauthorized) && return unless current_user.site_admin?
        tool.update!(update_params)
        render json: tool
      end
    end
  end
end
