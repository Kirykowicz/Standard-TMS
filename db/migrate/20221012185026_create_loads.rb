class CreateLoads < ActiveRecord::Migration[7.0]
  def change
    create_table :loads do |t|
      t.integer :customer_id
      t.integer :carrier_id
      t.integer :weight
      t.integer :pallet_count 
      t.integer :temperature 
      t.integer :equipment_id
      t.integer :truck_status_id
      t.integer :load_status_id 
      t.string :commodity 
      t.string :notes
      t.string :driver_name
      t.string :driver_cell
      t.integer :truck_number
      t.integer :trailer_number 
      t.integer :equipment_length 
      t.timestamps
    end
  end
end
