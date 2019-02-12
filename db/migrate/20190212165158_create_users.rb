class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :avatar_url, null: false
      t.string :email, null: false
      t.string :uuid, null: false
      t.string :provider, null: false
      t.string :oauth_token, null: false
      t.boolean :site_admin, null: false, default: false
      t.timestamps

      t.index :username, unique: true
      t.index :email, unique: true
      t.index :uuid, unique: true
    end
  end
end
