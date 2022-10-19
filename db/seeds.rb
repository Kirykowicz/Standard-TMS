Equipment.destroy_all 
LoadStatus.destroy_all 
TruckStatus.destroy_all
Site.destroy_all
FeeType.destroy_all
Customer.destroy_all
Carrier.destroy_all
Load.destroy_all
Stop.destroy_all
User.destroy_all
CarrierRep.destroy_all

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
site5 = Site.create(name: "Unassigned", city: "Unassigned", state: "Unassigned", address: "Unassigned", zip: 00000, contact_name: "Unassigned", contact_email: "Unassigned", contact_phone: "000-000-0000")
puts 'finished seeding sites'

puts 'seeding fees_types'
    linehaul = FeeType.create(name: 'Linehaul')
    detention = FeeType.create(name: "Detention")
    extrastop = FeeType.create(name: "Extra Stop")
    lumper = FeeType.create(name: "Lumper")
puts 'finished seeding fees_types'

puts 'seeding customers'
customer1 = Customer.create(name: "Customer Unassigned")
customer2 = Customer.create(name: "Gelita USA", address: "2445 Port Neal Rd, Sergeant Bluff, IA 51054", contact_name: "Gina Swanson", contact_email: "Gina@fakeemail.com", contact_phone: "712-943-5516")
customer3 = Customer.create(name: "Aldi", address: "1200 N Kirk Rd, Batavia, IL 60510", contact_name: "Frank", contact_email: "Frank@fakeemail.com", contact_phone: "630-879-8100")
customer4 = Customer.create(name: "Jewel-Osco", address: "150 E Pierce Rd, Itasca, IL 60143", contact_name: "Louis", contact_email: "Louis@fakeemail.com", contact_phone: "630-948-6000")
puts 'finished seeding customers'

puts 'seeding carrier'
carrier1 = Carrier.create(name: "Carrier Unassigned")
carrier2 = Carrier.create(name: "US Expediters", address: "6428 Joliet Rd #202, Countryside, IL 60525", mc_number: 977326, contact_name: "Milos", contact_phone: "855-500-5522", contact_email: "milos@fakeuseexpediters.com")
carrier3 = Carrier.create(name: "Monson & Sons", address: "216 5th St NW, Britt, IA 50423", mc_number: 977326, contact_name: "Ian", contact_phone: "641-843-4272", contact_email: "Ian@fakemonson.com")
puts 'finished seeding carrier'

puts 'seeding loads'
load1 = Load.create(customer_id: customer1.id, carrier_id: carrier1.id, equipment_id: van.id, truck_status_id: unassigned.id, load_status_id: opn.id)
load2 = Load.create(customer_id: customer2.id, carrier_id: carrier2.id, equipment_id: van.id, truck_status_id: assigned.id, load_status_id: booked.id)
puts 'finished seeding loads'

puts 'seeding stops'
stop1 = Stop.create(load_id: load1.id, site_id: site1.id)
stop2 = Stop.create(load_id: load1.id, site_id: site2.id)
stop3 = Stop.create(load_id: load2.id, site_id: site2.id)
stop3 = Stop.create(load_id: load2.id, site_id: site3.id)
puts 'finished seeding stops'

puts 'seeding users'
user1 = User.create(username: "Robert", password: "123", first_name: "Robert", last_name: "Kirykowicz")
user2 = User.create(username: "Jose", password: "123", first_name: "Jose", last_name: "Gomez")
puts 'finished seeding users'

puts 'seeding carrier reps'
carrierRep1 = CarrierRep.create(load_id: load1.id, user_id: user2.id)
carrierRep2 = CarrierRep.create(load_id: load2.id, user_id: user1.id)
puts 'finished seeding carrier reps'