class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.integer :user_id
      t.string :content
      t.references :parent_post
      t.integer :echoes

      t.timestamps
    end
  end
end
