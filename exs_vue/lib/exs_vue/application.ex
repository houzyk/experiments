defmodule ExsVue.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      # Start the Telemetry supervisor
      ExsVueWeb.Telemetry,
      # Start the PubSub system
      {Phoenix.PubSub, name: ExsVue.PubSub},
      # Start Finch
      {Finch, name: ExsVue.Finch},
      # Start the Endpoint (http/https)
      ExsVueWeb.Endpoint
      # Start a worker by calling: ExsVue.Worker.start_link(arg)
      # {ExsVue.Worker, arg}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: ExsVue.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    ExsVueWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
