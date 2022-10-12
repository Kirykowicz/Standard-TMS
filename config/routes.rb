Rails.application.routes.draw do
  resources :fee_types
  resources :fees
  resources :sites
  resources :stops
  resources :check_calls
  resources :statuses
  resources :equipment
  resources :customer_reps
  resources :carrier_reps
  resources :users
  resources :carriers
  resources :customers
  resources :loads
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
