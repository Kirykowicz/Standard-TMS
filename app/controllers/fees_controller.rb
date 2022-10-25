class FeesController < ApplicationController

    def index 
        render json: Fee.all, status: :ok 
    end

    def create 
        fee = Fee.create! fee_params
        render json: fee, status: :created 
    end

    def update 
        fee = Fee.find params[:id]
        fee.update! fee_params
        render json: fee, status: :ok 
    end

    private 

    def fee_params
        params.permit :load_id, :fee_type_id, :customer_rate, :carrier_rate
    end
end
