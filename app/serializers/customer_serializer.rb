class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :contact_name, :contact_email, :contact_phone, :notes
end
