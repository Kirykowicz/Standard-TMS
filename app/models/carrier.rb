class Carrier < ApplicationRecord
    has_many :loads 
    has_many :carrier_reps, through: :loads 
end
