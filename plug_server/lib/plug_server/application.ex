defmodule PlugServer.Application do
  use Application

  @impl true
  def start(_type, _args) do
    "Application Started" |> IO.puts

    children = [
      { Plug.Cowboy, scheme: :http, plug: PlugServer.Router, port: 3000 },
      { Plug.Cowboy, scheme: :http, plug: PlugServer.Router1, port: 3001 },
    ]

    opts = [strategy: :one_for_one, name: PlugServer.Supervisor]
    Supervisor.start_link(children, opts)
  end
end
