module ToolsHelper
  def index_scope
    scope = current_user.site_admin? ? Tool.all : Tool.where(user: current_user)
    return scope unless params[:workflow_state].present?

    scope.where(workflow_state: params[:workflow_state])
  end

  def populate_tool_data
    @tool_data = {
      api_create_path: api_v1_tool_api_create_path,
      index_path: tool_index_path,
      update_path: api_v1_tool_update_path(id: ':id'),
      publish_path: api_v1_tool_publish_path(id: ':id'),
      tool_create_path: tool_create_path
    }
  end
end
