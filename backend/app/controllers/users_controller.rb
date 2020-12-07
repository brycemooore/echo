class UsersController < ApplicationController

    def index
        render json: User.all 
    end

    def create
        @user = User.find_by(username: user_params[:username])
        if @user == nil
            @user = User.create(user_params)
        end 
        if @user.save
            render json: @user
        end 
    end

    def show
        @user = User.find(params[:id])
        render json: @user
    end 

    private 
    def user_params
        params.require(:user).permit(:username, :lat, :lng)   
    end 
end
