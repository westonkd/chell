class ToolsController < ApplicationController
  include ToolsHelper

  before_action :populate_tool_data

  def create
  end

  def index
    @tool_data.merge!(tools: index_scope.order(updated_at: :desc))
  end
end
