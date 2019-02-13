# frozen_string_literal: true

module Api
  module V1
    class ToolsApiController < ApplicationController
      skip_before_action :verify_authenticity_token
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

      def create
        render json: new_tool
      end

      def update
        head(:unauthorized) && return unless current_user.site_admin?
        tool.update!(update_params)
        render json: tool
      end

      private

      def verify_publishable
        return if tool.user == current_user && @tool.workflow_state == Tool::APPROVED

        head :unauthorized
      end

      def tool
        @tool ||= Tool.find(params[:id])
      end

      def new_tool
        @new_tool ||= Tool.create!(
          create_params.merge(
            user: current_user,
            workflow_state: Tool::REVIEWABLE,
            redirect_uris: create_params[:redirect_uris].split(' '),
            json_config: JSON.parse(create_params[:json_config])
          )
        )
      end

      def create_params
        @create_params ||= params.permit(
          :name,
          :logo_url,
          :email,
          :redirect_uris,
          :json_config,
          :author_name,
          :organization,
          :testing_instructions,
          :accessibility_documentation,
          :security_information,
          :installation_instructions,
          :privacy_policy
        )
      end

      def update_params
        @update_params ||= params.permit(
          :workflow_state
        )
      end
    end
  end
end
