class EquipmentController < ApplicationController
    def index
        render json: Equipment.all, status: :ok 
    end
end
