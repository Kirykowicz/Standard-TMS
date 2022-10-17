class StopSerializer < ActiveModel::Serializer
  attributes :id, :site_id, :date, :time, :notes, :site_name

  def site_name
    object.site.name
  end
end
