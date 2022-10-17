Equipment.destroy_all 
LoadStatus.destroy_all 
TruckStatus.destroy_all
Site.destroy_all
FeeType.destroy_all
Customer.destroy_all
Carrier.destroy_all
Load.destroy_all
Stop.destroy_all

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
site1 = Site.create(name: "Steel of West Virginia, Inc.", city: "Huntington", state: "WV", address: "17th Street &, 2nd Ave", zip: 25703, contact_name: "John Newman", contact_email: "John@fake.com", contact_phone: "304-696-8200")
site2 = Site.create(name: "Gelita USA - Sergeant Bluff IA", city: "Sergeant Bluff", state: "IA", address: "2445 Port Neal Rd", zip: 51054, contact_name: "Gina Swanson", contact_email: "Swanson@fameemail.com", contact_phone: "712-943-5516")
site3 = Site.create(name: "Gelita USA - Calumet City IL", city: "Calumet City", state: "IL", address: "10 Wentworth Ave", zip: 60409, contact_name: "Randy", contact_email: "randy@notrealemail.com", contact_phone: "708-891-8405")
site4 = Site.create(name: "ADM - Decatur IL", city: "Decatur", state: "IL", address: "4666 East Faries Parkway", zip: 62526, contact_name: "Steve", contact_email: "Steve@fakeemail.com", contact_phone: "217-424-5200")
puts 'finished seeding sites'

puts 'seeding fees_types'
    detention = FeeType.create(name: "Detention")
    extrastop = FeeType.create(name: "Extra Stop")
    lumper = FeeType.create(name: "Lumper")
puts 'finished seeding fees_types'

puts 'seeding customers'
customer1 = Customer.create(name: "Customer Unassigned")
puts 'finished seeding customers'

puts 'seeding carrier'
carrier1 = Carrier.create(name: "Carrier Unassigned")
puts 'finished seeding carrier'



puts 'seeding loads'
load1 = Load.create(customer_id: customer1.id, carrier_id: carrier1.id, equipment_id: van.id, truck_status_id: unassigned.id, load_status_id: opn.id)
puts 'finished seeding loads'

puts 'seeding stops'
stop1 = Stop.create(load_id: load1.id, site_id: site1.id)
stop2 = Stop.create(load_id: load1.id, site_id: site2.id)
puts 'finished seeding stops'