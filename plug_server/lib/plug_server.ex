defmodule PlugServer do

  defmodule Router do
    use Plug.Router
    import Plug.BasicAuth

    plug :basic_auth,
      username: Application.compile_env(:plug_server, :basic_auth_username),
      password: Application.compile_env(:plug_server, :basic_auth_password)

    plug :match
    plug :dispatch

    match _ do
      conn
      |> send_resp(404, "Not Found")
    end
  end

    defmodule Router1 do
    use Plug.Router
    import Plug.BasicAuth

    plug :basic_auth,
      username: Application.compile_env(:plug_server, :basic_auth_username),
      password: Application.compile_env(:plug_server, :basic_auth_password)

    plug :match
    plug :dispatch

    match _ do
      conn
      |> send_resp(404, "Not Found")
    end
  end

end
