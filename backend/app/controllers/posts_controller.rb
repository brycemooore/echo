class PostsController < ApplicationController

    def index
        render json: Post.where(parent_post_id: nil)
    end 

    def show
        @post = Post.find(params[:id])
        render json: @post
    end 

    def replies
        @replies = Post.where(parent_post_id: params[:id])
        render json: @replies
    end 
end
