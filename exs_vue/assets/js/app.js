import "phoenix_html";
// Establish Phoenix Socket and LiveView configuration.
import {Socket} from "phoenix";
import {LiveSocket} from "phoenix_live_view";
import { createApp } from 'vue';
import App from "./App.vue";

let csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content")
let liveSocket = new LiveSocket("/live", Socket, {params: {_csrf_token: csrfToken}})

// connect if there are any LiveViews on the page
liveSocket.connect();

const app = createApp(App);
app.mount('#app');

// expose liveSocket on window for web console debug logs and latency simulation:
// >> liveSocket.enableDebug()
// >> liveSocket.enableLatencySim(1000)  // enabled for duration of browser session
// >> liveSocket.disableLatencySim()
window.liveSocket = liveSocket
