class CreateSites < ActiveRecord::Migration[7.0]
  def change
    create_table :sites do |t|
      t.string :name 
      t.string :city 
      t.strinf :state
      t.string :address
      t.integer :zip 
      t.timestamps
    end
  end
end
