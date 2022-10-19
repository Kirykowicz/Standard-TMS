class StopsController < ApplicationController

    def index 
    render json: Stop.all, status: :ok
    end

    def create 
        stop = Stop.create! stops_params
        render json: stop, status: :created 
    end

    private 

    def stops_params
        params.permit :load_id, :site_id, :date, :time, :notes 
    end

end
