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
    redirect_to home_url unless current_user.present?
  end

  def populate_application_data
    @application_data = {
      user: {
        id: current_user&.id,
        name: current_user&.username,
        avatar_url: current_user&.avatar_url
      },
      app: {
        signin_path: '/auth/github',
        signout_path: signout_path
      }
    }
  end
end
