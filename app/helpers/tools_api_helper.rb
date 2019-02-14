module ToolsApiHelper
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
      :workflow_state,
      :reason_rejected
    )
  end
end
