# frozen_string_literal: true

class Tool < ApplicationRecord
  REVIEWABLE = 'reviewable'.freeze
  APPROVED = 'approved'.freeze
  STATES = [REVIEWABLE,  APPROVED, 'rejected', 'published'].freeze

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

  belongs_to :user

  private

  def redirect_uris_valid
    redirect_uris.each do |uri|
      errors.add(:redirect_uris, "Invalid redirect URI: #{uri}") unless URI::regexp(%w(http https)).match?(uri)
    end
  end
end
