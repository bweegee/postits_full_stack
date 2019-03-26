class CreatePostits < ActiveRecord::Migration[5.2]
  def change
    create_table :postits do |t|
      t.string :note
      t.string :color
      t.string :important

      t.timestamps
    end
  end
end
