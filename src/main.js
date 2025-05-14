import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from './router'
import Aura from '@primeuix/themes/aura';
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

import Dropdown from 'primevue/dropdown';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';
import Panel from 'primevue/panel';
import Chart from 'primevue/chart';


const app = createApp(App);
app.component('Panel', Panel);
app.component('Chart', Chart);
app.component('Dropdown', Dropdown);
app.component('Checkbox', Checkbox);
app.component('Button', Button);
app.use(createPinia())
app.use(PrimeVue, {
   theme: {
        preset: Aura
    }
});
app.use(router)

app.component('PCheckbox',   Checkbox)
app.component('PToolbar',    Toolbar)
app.component('PCard',       Card)

app.mount('#app')





