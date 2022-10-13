# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_10_13_185603) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "carrier_reps", force: :cascade do |t|
    t.integer "load_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "carriers", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.integer "mc_number"
    t.string "contact_name"
    t.string "contact_phone"
    t.string "contact_email"
    t.string "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "check_calls", force: :cascade do |t|
    t.integer "load_id"
    t.string "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "customer_reps", force: :cascade do |t|
    t.integer "load_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "customers", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "contact_name"
    t.string "contact_email"
    t.string "contact_phone"
    t.string "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "equipment", force: :cascade do |t|
    t.string "equipment_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "fee_types", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "fees", force: :cascade do |t|
    t.integer "load_id"
    t.integer "fee_type_id"
    t.integer "customer_rate"
    t.integer "carrier_rate"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "load_statuses", force: :cascade do |t|
    t.string "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "loads", force: :cascade do |t|
    t.integer "customer_id"
    t.integer "carrier_id"
    t.integer "weight"
    t.integer "pallet_count"
    t.integer "temperature"
    t.integer "equipment_id"
    t.integer "truck_status_id"
    t.integer "load_status_id"
    t.string "commodity"
    t.string "reference_info"
    t.string "notes"
    t.string "driver_name"
    t.string "driver_cell"
    t.integer "truck_number"
    t.integer "trailer_number"
    t.integer "equipment_length"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sites", force: :cascade do |t|
    t.string "name"
    t.string "city"
    t.string "state"
    t.string "address"
    t.integer "zip"
    t.string "contact_name"
    t.string "contact_email"
    t.string "contact_phone"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "stops", force: :cascade do |t|
    t.integer "load_id"
    t.integer "site_id"
    t.string "date"
    t.string "time"
    t.string "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "truck_statuses", force: :cascade do |t|
    t.string "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "first_name"
    t.string "last_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
