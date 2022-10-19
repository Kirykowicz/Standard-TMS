class CarrierRepsController < ApplicationController

    def index 
        render json: CarrierRep.all, status: :ok 
    end

    def create 
        rep = CarrierRep.create! carrier_rep_params
        render json: rep, status: :created 
    end

    private 

    def carrier_rep_params
        params.permit :load_id, :user_id 
    end
end
