class CreateCarriers < ActiveRecord::Migration[7.0]
  def change
    create_table :carriers do |t|
      t.string :name
      t.string :address 
      t.integer :mc_number 
      t.string :contact_name
      t.string :contact_phone
      t.string :contact_email
      t.string :notes 
      t.timestamps
    end
  end
end
