class CreateCustomers < ActiveRecord::Migration[7.0]
  def change
    create_table :customers do |t|
      t.string :name
      t.string :address 
      t.string :contact_name
      t.string :contact_email
      t.string :contact_phone
      t.string :notes 
      t.timestamps
    end
  end
end
