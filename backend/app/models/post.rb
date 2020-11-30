class Post < ApplicationRecord

    belongs_to :user
    has_many :replies, class_name: "Post", foreign_key: "parent_post_id"
    belongs_to :parent_post, class_name: "Post", optional: true

end
