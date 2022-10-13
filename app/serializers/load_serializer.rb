class LoadSerializer < ActiveModel::Serializer
  attributes :id, :customer_id, :carrier_id, :weight, :pallet_count, :temperature, :equipment_id, :truck_status_id, :load_status_id, :commodity, :reference_info, :notes, :driver_name, :driver_cell, :truck_number, :trailer_number, :equipment_length
end
