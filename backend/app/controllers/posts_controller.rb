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

    def update
        @post = Post.find(params[:id])
        if @post.update(post_params)
            render json: @post
        end
    end

    def geo
        posts = []
        the_user = User.find(params[:user_id])
        location = [the_user.lat, the_user.lng]
        users = User.within(5, :origin => location)
        users.each do |user|
            puts user.username
            user.posts.each do |post|
                if post.parent_post_id == nil
                    posts << post
                end 
            end 
        end 
        puts posts[0].created_at
        posts = posts.sort do |post_a, post_b|
            post_a.created_at <=> post_b.created_at
        end 
        render json: posts
    end 

    private

    def post_params
        params.require(:post).permit(:user_id, :content, :parent_post_id, :echoes)
    end
end
