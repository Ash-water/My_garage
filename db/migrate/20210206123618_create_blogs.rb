class CreateBlogs < ActiveRecord::Migration[6.0]
  def change
    create_table :blogs do |t|
      t.text :title, null: false
      t.string :content, null: false
      t.text :image
      t.timestamps
    end
  end
end

