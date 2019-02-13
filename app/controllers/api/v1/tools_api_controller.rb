# frozen_string_literal: true

module Api
  module V1
    class ToolsApiController < ApplicationController
      skip_before_action :verify_authenticity_token

      def create
        render json: new_tool
      end

      def update
        head :unauthorized and return unless current_user.site_admin?
        tool.update!(update_params)
        render json: tool
      end

      private

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
