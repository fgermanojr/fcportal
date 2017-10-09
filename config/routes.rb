Rails.application.routes.draw do
  # get 'hello_world', to: 'hello_world#index'
  get 'portal', to: 'portal#index'
  get 'broadcast', to: 'broadcast#broadcast'

  # From action_cable example; add code reference
    # root 'messages#index'
  get 'message', to: 'messages#index'
  resources :users
  resources :messages
  get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'
  mount ActionCable.server => '/cable'
end
