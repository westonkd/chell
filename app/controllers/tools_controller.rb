class ToolsController < ApplicationController
  before_action :populate_tool_data

  def create
  end

  def index
    @tool_data.merge!(tools: index_scope.order(updated_at: :desc))
  end

  private

  def index_scope
    return Tool.where(user: current_user) unless current_user.site_admin?

    Tool.where.not(workflow_state: 'deleted')
  end

  def populate_tool_data
    @tool_data = {
      api_create_path: api_v1_tool_api_create_path,
      index_path: tool_index_path,
      update_path: api_v1_tool_update_path(id: ':id'),
      publish_path: api_v1_tool_publish_path(id: ':id')
    }
  end
end
