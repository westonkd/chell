Rails.application.routes.draw do
  root to: 'sessions#home', as: :home

  scope(controller: :sessions) do
    get 'auth/:provider/callback', action: :create
    get 'signin', action: :create, as: 'signin'
    get 'signout', action: :destroy, as: 'signout'
  end

  scope(controller: :tools) do
    get 'tools/new', action: :create
    get 'tools', action: :index, as: :tool_index
  end
end
