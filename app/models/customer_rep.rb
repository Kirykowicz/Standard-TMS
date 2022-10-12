class CustomerRep < ApplicationRecord
    belongs_to :user 
    belongs_to :load 
end
