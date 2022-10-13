class LoadStatusesController < ApplicationController

    def index 
        render json: LoadStatus.all, status: :ok 
    end
end
