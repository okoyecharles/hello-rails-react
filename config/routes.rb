Rails.application.routes.draw do
  root 'root#index'

  namespace :api do
    namespace :v1 do
      resources :random_greetings, only: %i[index]
    end
  end
end
