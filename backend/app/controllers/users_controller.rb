class UsersController < ApplicationController

    def index
        render json: User.all 
    end

    def create
        @new_user = User.find_or_create_by(user_params)
        if @new_user.save
            render json: @new_user
        end 
    end

    def show
        @user = User.find(params[:id])
        render json: @user
    end 

<<<<<<< HEAD
    private 
    def user_params
        params.require(:user).permit(:username)   
=======
    private
    def user_params
        params.require(:user).permit(:username)
>>>>>>> usertime
    end 
end
