// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import PrimeVue  from 'primevue/config'
import TabView    from 'primevue/tabview'
import TabPanel   from 'primevue/tabpanel'
import Dropdown   from 'primevue/dropdown'
import InputText  from 'primevue/inputtext'
import Checkbox   from 'primevue/checkbox'
import Button     from 'primevue/button'
import PanelMenu  from 'primevue/panelmenu'

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const app = createApp(App)
app.use(router)
app.use(PrimeVue)

// registra los componentes globalmente (sin Textarea)
;[
  TabView, TabPanel,
  Dropdown, InputText,
  Checkbox, Button,
  PanelMenu
].forEach(c => app.component(c.name, c))

app.mount('#app')
