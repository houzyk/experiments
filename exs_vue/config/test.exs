import Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :exs_vue, ExsVueWeb.Endpoint,
  http: [ip: {127, 0, 0, 1}, port: 4002],
  secret_key_base: "ea5h8K2i2arrXleAncO/0ncB1DwCRD6DtcVmLKFPLW5L98J0cNmmkgm7/nkx9ahp",
  server: false

# In test we don't send emails.
config :exs_vue, ExsVue.Mailer,
  adapter: Swoosh.Adapters.Test

# Disable swoosh api client as it is only required for production adapters.
config :swoosh, :api_client, false

# Print only warnings and errors during test
config :logger, level: :warning

# Initialize plugs at runtime for faster test compilation
config :phoenix, :plug_init_mode, :runtime
