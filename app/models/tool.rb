# frozen_string_literal: true

class Tool < ApplicationRecord
  REVIEWABLE = 'reviewable'.freeze
  APPROVED = 'approved'.freeze
  PUBLISHED = 'published'.freeze
  STATES = [REVIEWABLE,  APPROVED, 'rejected', PUBLISHED].freeze

  validates :name,
            :logo_url,
            :email,
            :redirect_uris,
            :json_config,
            :author_name,
            :organization,
            :user_id,
            :workflow_state,
            presence: true

  validates :logo_url, format: URI::regexp(%w(http https))
  validates :workflow_state, inclusion: { in: STATES }
  validate :redirect_uris_valid

  serialize :redirect_uris, Array
  serialize :json_config, Hash

  before_destroy :destroy_client!

  belongs_to :user

  private

  def destroy_client!
    return if client_id.blank?

    provider = Providers::Oauth::DynamicRegistrationProvider.new
    response = provider.destroy_client!(client_id)
    throw(:abort) unless response.no_content?
  end

  def redirect_uris_valid
    redirect_uris.each do |uri|
      errors.add(:redirect_uris, "Invalid redirect URI: #{uri}") unless URI::regexp(%w(http https)).match?(uri)
    end
  end
end
