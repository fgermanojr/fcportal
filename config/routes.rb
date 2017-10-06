Rails.application.routes.draw do
  # get 'hello_world', to: 'hello_world#index'
  get 'portal', to: 'portal#index'
  get 'broadcast', to: 'broadcast#broadcast'
  # For details on the DSL available within this file,
  # see http://guides.rubyonrails.org/routing.html
  mount ActionCable.server => '/cable'
end
