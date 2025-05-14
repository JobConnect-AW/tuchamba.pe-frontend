import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from './router'
import Aura from '@primeuix/themes/aura';
import '@/assets/global.css'

import PrimeVue from 'primevue/config'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import Dropdown from 'primevue/dropdown'
import InputText from 'primevue/inputtext'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'
import PanelMenu from 'primevue/panelmenu'

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
app.component('Toolbar', Toolbar);
app.component('Card', Card);
app.component('TabView', TabView);
app.component('TabPanel', TabPanel);
app.component('InputText', InputText);
app.component('PanelMenu', PanelMenu);

app.use(createPinia())
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});
app.use(router)
app.use(PrimeVue)


app.mount('#app')





