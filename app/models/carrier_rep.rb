class CarrierRep < ApplicationRecord
    belongs_to :user 
    belongs_to :load 
end
