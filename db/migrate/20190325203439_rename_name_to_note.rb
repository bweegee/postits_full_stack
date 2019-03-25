class RenameNameToNote < ActiveRecord::Migration[5.2]
  def change
    rename_column :post_its, :name, :note
  end
end
