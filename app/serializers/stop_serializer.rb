class StopSerializer < ActiveModel::Serializer
  attributes :id, :load_id, :site_id, :date, :time, :notes, :site_name, :site_address, :site_city, :site_state, :site_zip

  def site_name
    object.site.name
  end

  def site_address
    object.site.address
  end

  def site_city
    object.site.city
  end

  def site_state
    object.site.state
  end

  def site_zip
    object.site.zip
  end
end
