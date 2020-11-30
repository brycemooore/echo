class ChangeDefaultValueForPostEchoes < ActiveRecord::Migration[6.0]
  def change
    change_column_default :posts, :echoes, 0
  end
end
