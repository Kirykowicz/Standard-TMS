class CreateCustomerReps < ActiveRecord::Migration[7.0]
  def change
    create_table :customer_reps do |t|
      t.integer :load_id 
      t.integer :user_id
      t.timestamps
    end
  end
end
