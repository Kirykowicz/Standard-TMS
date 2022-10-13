class CarrierSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :mc_number, :contact_name, :contact_phone, :contact_email, :notes
end
