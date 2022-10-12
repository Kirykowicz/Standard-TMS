class CreateStops < ActiveRecord::Migration[7.0]
  def change
    create_table :stops do |t|
      t.integer :load_id
      t.integer :site_id 
      t.string :date
      t.string :time 
      t.timestamps
    end
  end
end
