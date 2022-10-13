Equipment.destroy_all 
LoadStatus.destroy_all 
TruckStatus.destroy_all
Site.destroy_all
FeeType.destroy_all
Customer.destroy_all
Carrier.destroy_all

puts 'seeding equipment'
van = Equipment.create(equipment_type: "Van")
reefer = Equipment.create(equipment_type: "Reefer")
vr = Equipment.create(equipment_type: "Van / Reefer")
flatbed = Equipment.create(equipment_type: "Flatbed")
conestoga = Equipment.create(equipment_type: "Conestoga")
stepdeck = Equipment.create(equipment_type: "Step deck")
puts 'finished seeding equipment'

puts 'seeding load statuses'
opn = LoadStatus.create(status: "Open")
booked = LoadStatus.create(status: "Booked")
complete = LoadStatus.create(status: "Complete")
puts 'finished seeding load statuses'

puts 'seeding truck statuses'
unassigned = TruckStatus.create(status: "Unassigned")
assigned = TruckStatus.create(status: "Assigned")
dispatched = TruckStatus.create(status: "Dispatched")
atpickup = TruckStatus.create(status: "At pickup")
loaded = TruckStatus.create(status: "loaded")
atdelivery = TruckStatus.create(status: "At delivery")
delivered = TruckStatus.create(status: "Delivered")
puts 'finished seeding truck statuses'

puts 'seeding sites'
Site.create(name: "Steel of West Virginia, Inc.", city: "Huntington", state: "WV", address: "17th Street &, 2nd Ave", zip: 25703, contact_name: "John Newman", contact_email: "John@fake.com", contact_phone: "304-696-8200")
puts 'finished seeding sites'

puts 'seeding fees_types'
    linehaul = FeeType.create(name: "Linehaul")
    detention = FeeType.create(name: "Detention")
    extrastop = FeeType.create(name: "Extra Stop")
    lumper = FeeType.create(name: "Lumper")
puts 'finished seeding fees_types'

puts 'seeding customers'
Customer.create(name: "Customer Unassigned")
puts 'finished seeding customers'

puts 'seeding carrier'
Carrier.create(name: "Carrier Unassigned")
puts 'finished seeding carrier'