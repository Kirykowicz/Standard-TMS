class StopSerializer < ActiveModel::Serializer
  attributes :id, :site_id, :date, :time, :notes, :site_name, :site_city, :site_state

  def site_name
    object.site.name
  end

  def site_city
    object.site.city
  end

  def site_state
    object.site.state
  end
end
