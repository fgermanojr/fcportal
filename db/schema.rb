# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171115220053) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "builds", force: :cascade do |t|
    t.string "fc_file_name"
    t.text "fc_file_contents"
    t.string "dat_file_name"
    t.text "dat_file_contents"
    t.string "job_id"
    t.integer "ck_create_map"
    t.integer "ck_build_model"
    t.integer "ck_run_model"
    t.integer "ck_return_results"
    t.integer "build_status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "model_id"
    t.index ["model_id"], name: "index_builds_on_model_id"
  end

  create_table "jobs", force: :cascade do |t|
    t.string "server_name"
    t.string "queue_name"
    t.integer "job_state"
    t.datetime "dt_enqueued"
    t.datetime "dt_started"
    t.datetime "dt_ended"
    t.integer "completion_status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "build_id"
    t.bigint "run_id"
    t.index ["build_id"], name: "index_jobs_on_build_id"
    t.index ["run_id"], name: "index_jobs_on_run_id"
  end

  create_table "messages", force: :cascade do |t|
    t.text "content"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_messages_on_user_id"
  end

  create_table "models", force: :cascade do |t|
    t.string "modelname"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.index ["user_id"], name: "index_models_on_user_id"
  end

  create_table "runs", force: :cascade do |t|
    t.integer "run_status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "build_id"
    t.index ["build_id"], name: "index_runs_on_build_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest"
    t.string "email", null: false
    t.boolean "is_admin"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  add_foreign_key "builds", "models"
  add_foreign_key "jobs", "builds"
  add_foreign_key "jobs", "runs"
  add_foreign_key "messages", "users"
  add_foreign_key "models", "users"
  add_foreign_key "runs", "builds"
end
