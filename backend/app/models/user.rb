class User < ApplicationRecord

    has_many :posts

    def write_post(content)
        Post.create(content: content, user_id: self.id)
    end 

    def reply_to_post(post, content)
        Post.create(content: content, user_id: self.id, parent_post_id: post.id)
    end 
end
