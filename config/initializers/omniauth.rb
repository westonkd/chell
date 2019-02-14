# frozen_string_literal: true

opts = { scope: 'user' }

Rails.application.config.middleware.use OmniAuth::Builder do
  provider(
    :github,
    Rails.application.credentials.github[:client_id],
    Rails.application.credentials.github[:client_secret],
    opts
  )
end
