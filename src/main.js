import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router.js';
import store from './store';
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();

const app = createApp(App)

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router)
app.use(VueAxios, axios)
app.use(store)

app.mount('#app')
