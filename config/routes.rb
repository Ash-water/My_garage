Rails.application.routes.draw do
  root to: 'pages#index'

  resources :pages, only: :index
  resources :bios, only: :index
  resources :artworks, only: :index
  resources :blogs, only: [:index, :new, :crate, :show, :edit]
  resources :contacts, only: [:index, :new, :create]
  
end
