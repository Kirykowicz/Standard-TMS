class Site < ApplicationRecord
    has_many :stops 
    has_many :loads, through: :stops 
end
