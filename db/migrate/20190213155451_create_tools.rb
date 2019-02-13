class CreateTools < ActiveRecord::Migration[5.2]
  def change
    create_table :tools do |t|
      t.string :name, null: false
      t.string :logo_url, null: false
      t.string :email, null: false
      t.text :redirect_uris, null: false
      t.jsonb :json_config, null: false
      t.string :author_name, null: false
      t.string :organization, null: false
      t.integer :user_id, null: false
      t.string :workflow_state, null: false, default: 'reviewable'

      t.text :testing_instructions
      t.text :accessibility_documentation
      t.text :security_information
      t.text :installation_instructions
      t.text :privacy_policy
      t.timestamps

      t.index :name
      t.index :email
      t.index :user_id
      t.index :organization
      t.index :workflow_state
    end

    add_foreign_key :tools, :users
  end
end
