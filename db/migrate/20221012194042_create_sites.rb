class CreateSites < ActiveRecord::Migration[7.0]
  def change
    create_table :sites do |t|
      t.string :name 
      t.string :city 
      t.string :state
      t.string :address
      t.integer :zip 
      t.string :contact_name
      t.string :contact_email 
      t.string :contact_phone 
      t.timestamps
    end
  end
end
