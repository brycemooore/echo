class UsersController < ApplicationController

    def index
        render json: User.all 
    end

    def create
        @new_user = JSON.parse(request.body)
        render json: User.find_or_create_by(username: @new_user.username) 
    end
end
