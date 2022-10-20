class SitesController < ApplicationController

    def index 
        render json: Site.all, status: :ok
    end

    def create 
        site = Site.create! site_params
        render json: site, status: :created 
    end

    private 

    def site_params
        params.permit :name, :address, :mc_number, :contact_name, :contact_email, :contact_phone, :contact_phone, :notes 
    end
end
