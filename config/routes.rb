Rails.application.routes.draw do
  root to: 'pages#index'

  resources :pages, only: :index
  resources :bios, only: :index
  resources :artworks, only: :index
  resources :blogs
  resources :contacts, only: [:index, :new, :create]
  
end
