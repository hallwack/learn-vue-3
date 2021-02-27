import { createApp } from "vue";
import App from "./App.vue";
import { store } from "./capstone/store.js";
import { router } from "./capstone/router.js";

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
