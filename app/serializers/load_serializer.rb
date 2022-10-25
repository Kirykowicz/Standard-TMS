class LoadSerializer < ActiveModel::Serializer
  attributes :id, :customer_id, :carrier_id, :weight, :pallet_count, :temperature, :equipment_id, :equipment, :truck_status_id, :truck_status, :load_status_id, :load_status, :commodity, :reference_info, :notes, :driver_name, :driver_cell, :truck_number, :trailer_number, :equipment_length, :customer_name, :carrier_rep, :customer_rep, :carrier_name, :customer_contact_name, :customer_contact_email, :customer_contact_phone, :carrier_contact_name, :carrier_contact_email, :carrier_contact_phone, :customer_rep_name, :carrier_rep_name
  has_many :stops
  has_many :fees 
  

  def equipment 
    object.equipment.equipment_type
  end

  def truck_status 
    object.truck_status.status
  end

  def load_status
    object.load_status.status
  end

  def customer_name
    object.customer.name
  end

  def carrier_name
    object.carrier.name
  end

  def carrier_rep 
    object.carrier_rep
  end

  def customer_rep
    object.customer_rep
  end
  
  def customer_rep_name
    object.customer_rep.user
  end

  def carrier_rep_name
    object.carrier_rep.user
  end

  def customer_contact_name
    object.customer.contact_name
  end

  def customer_contact_email
    object.customer.contact_email
  end

  def customer_contact_phone
    object.customer.contact_phone
  end

  def carrier_contact_name
    object.carrier.contact_name
  end

  def carrier_contact_email
    object.carrier.contact_email
  end

  def carrier_contact_phone
    object.carrier.contact_phone
  end
end
