// import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'

import VueSweetAlert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
import router from './router'
import store from './store'

library.add(faTrash, faCheck);

store.actions.initaliseProducts()

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .use(VueSweetAlert2)
    .mount('#app')