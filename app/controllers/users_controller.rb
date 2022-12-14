class UsersController < ApplicationController
     skip_before_action :authorize, only: [:create, :index]

  def index 
      render json: User.all, status: :ok
  end

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    render json: @current_user
  end


  def destroy
    user = User.find(params[:id])
  end

  private

  def user_params
    params.permit(:username, :password, :first_name, :last_name)
  end
end
