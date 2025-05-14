import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/global.css'

import PrimeVue      from 'primevue/config'
import Button        from 'primevue/button'
import Dropdown      from 'primevue/dropdown'
import Checkbox      from 'primevue/checkbox'
import Toolbar       from 'primevue/toolbar'
import Card          from 'primevue/card'

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const app = createApp(App)
app.use(router)
app.use(PrimeVue)

app.component('PButton',     Button)
app.component('PDropdown',   Dropdown)
app.component('PCheckbox',   Checkbox)
app.component('PToolbar',    Toolbar)
app.component('PCard',       Card)

app.mount('#app')
