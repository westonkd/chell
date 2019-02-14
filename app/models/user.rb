# frozen_string_literal: true

class User < ApplicationRecord
  validates :email, :uuid, :provider, :avatar_url, :username, :oauth_token, presence: true
  validates :email, :uuid, :username, uniqueness: true

  has_many :tools

  def self.omniauth_find_or_create(auth)
    user = find_or_initialize_by(
      provider: auth.provider,
      email: auth.info.email,
      avatar_url: auth.info.image,
      username: auth.info.name
    )

    user.update!(
      uuid: auth.uid,
      oauth_token: auth.credentials.token
    )

    user
  end
end
