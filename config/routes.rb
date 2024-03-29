Rails.application.routes.draw do
  get 'tools_api/create'
  root to: 'sessions#home', as: :home

  scope(controller: :sessions) do
    get 'auth/:provider/callback', action: :create
    get 'signin', action: :create, as: 'signin'
    get 'signout', action: :destroy, as: 'signout'
  end

  scope(controller: :tools) do
    get 'tools/new', action: :create, as: :tool_create
    get 'tools', action: :index, as: :tool_index
  end

  namespace :api do
    namespace :v1 do
      scope(controller: :tools_api) do
        put 'tools/:id/publish', action: :publish, as: :tool_publish
        put 'tools/:id', action: :update, as: :tool_update
        delete 'tools/:id', action: :destroy, as: :tool_destroy
        post 'tools', action: :create, as: :tool_api_create
      end
    end
  end
end
