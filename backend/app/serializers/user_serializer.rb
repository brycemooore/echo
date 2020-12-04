class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :lat, :lng
end
