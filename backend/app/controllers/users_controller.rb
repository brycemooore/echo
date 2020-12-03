class UsersController < ApplicationController

    def index
        render json: User.all 
    end

    def create
        @new_user = JSON.parse(request.body)
        render json: User.find_or_create_by(username: @new_user.username) 
    end

    def show
        @user = User.find(params[:id])
        render json: @user
    end 

    private 
    def user_params
        params.require(:user).permit(:username)   
    end 
end
