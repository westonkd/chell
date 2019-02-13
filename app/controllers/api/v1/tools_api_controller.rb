module Api
  module V1
    class ToolsApiController < ApplicationController
      skip_before_action :verify_authenticity_token

      def create
        byebug
      end
    end
  end
end