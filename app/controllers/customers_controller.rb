class CustomersController < ApplicationController

    def index
        render json: Customer.all, status: :ok 
    end

    def create
        customer = Customer.create! customer_params
        render json: customer, status: :created 
    end

    private 

    def customer_params
        params.permit :name, :address, :contact_name, :contact_email, :contact_phone, :notes
    end

end
