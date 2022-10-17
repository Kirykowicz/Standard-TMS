class SitesController < ApplicationController

    def index 
        render json: Site.all, status: :ok
    end
end
