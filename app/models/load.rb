class Load < ApplicationRecord
    belongs_to :customer 
    belongs_to :carrier 
    has_many :stops
    has_many :sites, through: :stops
    has_many :fees 
    has_many :fee_types, through: :fees 
    belongs_to :load_status 
    belongs_to :truck_status 
    belongs_to :equipment 
    has_many :check_calls 
    has_one :carrier_rep
    has_one :customer_rep 
end
