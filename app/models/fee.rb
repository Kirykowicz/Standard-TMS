class Fee < ApplicationRecord
    belongs_to :load 
    belongs_to :fee_type 
end
