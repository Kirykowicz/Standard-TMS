class CreateCarrierReps < ActiveRecord::Migration[7.0]
  def change
    create_table :carrier_reps do |t|
      t.integer :load_id
      t.integer :user_id
      t.timestamps
    end
  end
end
