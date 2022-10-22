class CarriersController < ApplicationController

    def index 
        render json: Carrier.all, status: :ok 
    end

    def show
        carrier = Carrier.find params[:id]
        render json: carrier, status: :ok
    end

    def create 
        carrier = Carrier.create! carrier_params
        render json: carrier, status: :created
    end

    private 

    def carrier_params
        params.permit :name, :address, :mc_number, :contact_name, :contact_email, :contact_phone, :notes
    end
end
