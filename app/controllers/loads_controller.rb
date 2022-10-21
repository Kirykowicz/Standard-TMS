class LoadsController < ApplicationController

    def index 
        render json: Load.all, status: :ok 
    end

    def show 
        load = Load.find params[:id]
        render json: load, status: :ok 
    end
    
    def create 
        load = Load.create! load_params
        render json: load.to_json(only: [:id]) 
    end

    def update 
        load = Load.find params[:id]
        load.update! load_params
        render json: load, status: :accepted 
    end

    def destroy 
        load = Load.find params[:id]
        load.destroy 
        head :no_content 
    end


    private 

    def load_params
        params.permit :customer_id, :carrier_id, :weight, :pallet_count, :temperature, :equipment_id, :truck_status_id, :load_status_id, :commodity, :reference_info, :notes, :driver_name, :driver_cell, :truck_number, :trailer_number, :equipment_length
    end
end
