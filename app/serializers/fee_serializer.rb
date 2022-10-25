class FeeSerializer < ActiveModel::Serializer
  attributes :id, :load_id, :fee_type_id, :customer_rate, :carrier_rate
end
