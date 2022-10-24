class StopsController < ApplicationController

    def index 
    render json: Stop.all, status: :ok
    end

    def create 
        stop = Stop.create! stops_params
        render json: stop, status: :created 
    end

    def update
        stop = Stop.find params[:id]
        stop.update! stops_params
        render json: stop, serializer: LoadSerializer
    end

    private 

    def stops_params
        params.permit :load_id, :site_id, :date, :time, :notes 
    end

end
