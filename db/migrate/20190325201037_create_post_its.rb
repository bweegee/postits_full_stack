class CreatePostIts < ActiveRecord::Migration[5.2]
  def change
    create_table :post_its do |t|
      t.string :name
      t.string :color
      t.boolean :important

      t.timestamps
    end
  end
end
