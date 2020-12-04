class User < ApplicationRecord

    has_many :posts
    acts_as_mappable

    def write_post(content)
        Post.create(content: content, user_id: self.id)
    end 

    def reply_to_post(post, content)
        Post.create(content: content, user_id: self.id, parent_post_id: post.id)
    end 
end
