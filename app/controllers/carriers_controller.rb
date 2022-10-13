class CarriersController < ApplicationController

    def index 
        render json: Carrier.all, status: :ok 
    end
end
