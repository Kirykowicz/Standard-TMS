class CustomersController < ApplicationController

    def index
        render json: Customer.all, status: :ok 
    end

    def show 
        customer = Customer.find params[:id]
        render json: customer, status: :ok
    end

    def create
        customer = Customer.create! customer_params
        render json: customer, status: :created 
    end

    def update 
        customer = Customer.find params[:id]
        customer.update! customer_params
        render json: customer, status: :ok
    end

    private 

    def customer_params
        params.permit :name, :address, :contact_name, :contact_email, :contact_phone, :notes
    end

end
