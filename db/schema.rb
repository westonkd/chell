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

ActiveRecord::Schema.define(version: 2019_02_13_155451) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "tools", force: :cascade do |t|
    t.string "name", null: false
    t.string "logo_url", null: false
    t.string "email", null: false
    t.text "redirect_uris", null: false
    t.jsonb "json_config", null: false
    t.string "author_name", null: false
    t.string "organization", null: false
    t.integer "user_id", null: false
    t.string "workflow_state", default: "reviewable", null: false
    t.text "testing_instructions"
    t.text "accessibility_documentation"
    t.text "security_information"
    t.text "installation_instructions"
    t.text "privacy_policy"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_tools_on_email"
    t.index ["name"], name: "index_tools_on_name"
    t.index ["organization"], name: "index_tools_on_organization"
    t.index ["user_id"], name: "index_tools_on_user_id"
    t.index ["workflow_state"], name: "index_tools_on_workflow_state"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "avatar_url", null: false
    t.string "email", null: false
    t.string "uuid", null: false
    t.string "provider", null: false
    t.string "oauth_token", null: false
    t.boolean "site_admin", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
    t.index ["uuid"], name: "index_users_on_uuid", unique: true
  end

  add_foreign_key "tools", "users"
end
