class LoadSerializer < ActiveModel::Serializer
  attributes :id, :customer_id, :carrier_id, :weight, :pallet_count, :temperature, :equipment_id, :equipment, :truck_status_id, :truck_status, :load_status_id, :load_status, :commodity, :reference_info, :notes, :driver_name, :driver_cell, :truck_number, :trailer_number, :equipment_length

  has_many :stops

  def equipment 
    object.equipment.equipment_type
  end

  def truck_status 
    object.truck_status.status
  end

  def load_status
    object.load_status.status
  end
end
