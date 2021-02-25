class CreateBlogs < ActiveRecord::Migration[6.0]
  def change
    create_table :blogs do |t|
      t.text :article_name, null: false
      t.string :contents, null: false
      t.timestamps
    end
  end
end

