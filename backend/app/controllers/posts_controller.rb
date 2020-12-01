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

    def create
        # byebug
        @post = Post.new(post_params)
        if @post.save
            render json: @post
        end 
    end

    private

    def post_params
        params.require(:post).permit(:user_id, :content)
    end
end
