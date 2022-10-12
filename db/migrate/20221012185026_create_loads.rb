class CreateLoads < ActiveRecord::Migration[7.0]
  def change
    create_table :loads do |t|
      t.integer :customer_id
      t.integer :carrier_id
      t.integer :weight
      t.integer :pallet_count 
      t.integer :temperature 
      t.integer :equipment_id
      t.integer :status_id
      t.string :commodity 
      t.string :instructions 
      t.timestamps
    end
  end
end
