class CreateCheckCalls < ActiveRecord::Migration[7.0]
  def change
    create_table :check_calls do |t|
      t.integer :load_id
      t.string :notes
      t.timestamps
    end
  end
end
