class User < ApplicationRecord
    has_many :carrier_reps
    has_many :loads, through: :carrier_reps
    has_many :customer_reps 
    has_many :loads, through: :customer_reps
end
