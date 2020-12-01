class PostSerializer < ActiveModel::Serializer
  attributes :id, :content, :echoes, :created_at
  belongs_to :user
end
