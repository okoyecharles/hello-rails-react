class Api::V1::RandomGreetingsController < ActionController::API
  def index
    @greetings = Greeting.all
    random_index = rand(@greetings.size)
    render json: @greetings[random_index]
  end
end
