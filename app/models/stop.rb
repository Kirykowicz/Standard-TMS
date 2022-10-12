class Stop < ApplicationRecord
    belongs_to :load 
    belongs_to :site 
end
