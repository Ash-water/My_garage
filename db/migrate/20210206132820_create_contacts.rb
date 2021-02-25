class CreateContacts < ActiveRecord::Migration[6.0]
  def change
    create_table :contacts do |t|
      t.text :name, null: false
      t.text :email, null: false
      t.string :message, null: false
      t.timestamps
    end
  end
end
