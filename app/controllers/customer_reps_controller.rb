class CustomerRepsController < ApplicationController

    def index 
        render json: CustomerRep.all, status: :ok 
    end

    def create 
        rep = CustomerRep.create customer_rep_params
        render json: rep, status: :created 
    end

    private 

    def customer_rep_params
        params.permit :load_id, :user_id 
    end
end
