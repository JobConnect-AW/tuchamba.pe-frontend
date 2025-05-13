import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from './router'

import Dropdown from 'primevue/dropdown';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';


const app = createApp(App);
app.component('Dropdown', Dropdown);
app.component('Checkbox', Checkbox);
app.component('Button', Button);
app.use(createPinia())
app.use(PrimeVue, {

});
app.use(router)

app.mount('#app')

