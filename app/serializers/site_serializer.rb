class SiteSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :state, :address, :zip, :contact_name, :contact_email, :contact_phone
end
