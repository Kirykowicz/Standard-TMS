class CreateFees < ActiveRecord::Migration[7.0]
  def change
    create_table :fees do |t|
      t.integer :load_id
      t.integer :fee_type_id 
      t.integer :customer_rate
      t.integer :carrier_rate 
      t.timestamps
    end
  end
end
