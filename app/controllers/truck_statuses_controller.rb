class TruckStatusesController < ApplicationController

    def index 
        render json: TruckStatus.all, status: :ok 
    end
end
