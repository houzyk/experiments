defmodule PlugServer.MixProject do
  use Mix.Project

  def project do
    [
      app: :plug_server,
      version: "0.1.0",
      elixir: "~> 1.16",
      start_permanent: Mix.env() == :prod,
      aliases: aliases(),
      deps: deps()
    ]
  end

  def application do
    [
      extra_applications: [:logger],
      mod: {PlugServer.Application, []}
    ]
  end

  defp deps do
    [
      plug_cowboy: "~> 2.0",
    ]
  end

  defp aliases do
    [
      setup: ["deps.get"],
      start: ["run --no-halt"],
    ]
  end
end
