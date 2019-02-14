class ApplicationController < ActionController::Base
  before_action :populate_application_data
  before_action :require_user

  def current_user
    @current_user ||= begin
      User.find_by(id: session[:user_id])
    end
  end

  private

  def require_user
    redirect_to '/auth/github' unless current_user.present?
  end

  def populate_application_data
    @application_data = {
      user: {
        id: current_user&.id,
        name: current_user&.username,
        avatar_url: current_user&.avatar_url,
        siteAdmin: current_user&.site_admin?
      },
      app: {
        signin_path: '/auth/github',
        signout_path: signout_path,
        tool_index_path: tool_index_path,
        tool_create_path: tool_create_path
      }
    }
  end
end
