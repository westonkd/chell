# frozen_string_literal: true

class SessionsController < ApplicationController
  skip_before_action :require_user
  def home; end

  def create
    session[:user_id] = user.id
    redirect_to request.env['omniauth.origin']
  end

  def destroy
    reset_session
    redirect_to request.referer
  end

  private

  def user
    @user ||= User.omniauth_find_or_create(request.env['omniauth.auth'])
  end
end
