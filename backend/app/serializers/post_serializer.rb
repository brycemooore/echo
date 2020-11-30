class PostSerializer < ActiveModel::Serializer
  attributes :id, :content, :echoes
  belongs_to :user
end
