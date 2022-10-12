class CreateCarriers < ActiveRecord::Migration[7.0]
  def change
    create_table :carriers do |t|
      t.sting :name
      t.string :address 
      t.integer :mc_number 
      t.timestamps
    end
  end
end
