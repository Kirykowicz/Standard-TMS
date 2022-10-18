class FeeTypesController < ApplicationController
    def index 
        render json: FeeType.all, status: :ok 
    end
end
