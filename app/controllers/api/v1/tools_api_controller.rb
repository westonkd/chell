# frozen_string_literal: true

module Api
  module V1
    class ToolsApiController < ApplicationController
      skip_before_action :verify_authenticity_token

      def create
        byebug
        render json: new_tool
      end

      private

      def new_tool
        @new_tool ||= Tool.create!(
          new_tool_params.merge(
            user: current_user,
            workflow_state: Tool::REVIEWABLE,
            redirect_uris: new_tool_params[:redirect_uris].split(' '),
            json_config: JSON.parse(new_tool_params[:json_config])
          )
        )
      end

      def new_tool_params
        @new_tool_params ||= params.permit(
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
    end
  end
end
