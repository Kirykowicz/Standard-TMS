Rails.application.routes.draw do
  resources :truck_statuses
  resources :load_statuses
  resources :fee_types
  resources :fees
  resources :sites
  resources :stops
  resources :check_calls
  resources :equipment
  resources :customer_reps
  resources :carrier_reps
  resources :users
  resources :carriers
  resources :customers
  resources :loads
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
