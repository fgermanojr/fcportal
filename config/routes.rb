require 'resque/server'

Rails.application.routes.draw do
  get 'docs/show'
  post 'submissions/submit'

  # get 'hello_world', to: 'hello_world#index'
  get 'portal', to: 'portal#index'
  get 'broadcast', to: 'broadcast#broadcast'

  # From action_cable example; add code reference
    # root 'messages#index'
  get 'message', to: 'messages#index'
  resources :users
  resources :messages

  get    '/login',   to: 'sessions#new',     :defaults => { :format => 'json' } # brings up login form
  post   '/login',   to: 'sessions#create',  :defaults => { :format => 'json' } # submits login form
  delete '/logout',  to: 'sessions#destroy', :defaults => { :format => 'json' } # logs out

  mount ActionCable.server => '/cable'
  mount Resque::Server.new, at: "/resque"
end
