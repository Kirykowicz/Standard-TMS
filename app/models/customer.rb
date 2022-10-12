class Customer < ApplicationRecord
    has_many :loads 
    has_many :carriers, through: :loads 
end
