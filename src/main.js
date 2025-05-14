import { createApp } from 'vue'
import App from './app.vue'
import './app/public/styles.css'

// Vue Router
import router from "./router/index.js";

// PrimeVue
import PrimeVue from 'primevue/config';

// PrimeVue CSS
import 'primeflex/primeflex.css';

// PrimeVue Theme
import Aura from '@primevue/themes/aura';
// Tema claro de PrimeVue (cambiamos a Lara o Saga Blue)
// PrimeVue Icons
import 'primeicons/primeicons.css';

// Componentes de PrimeVue
import Toast from "primevue/toast";
import Toolbar from "primevue/toolbar";
import Card from "primevue/card";
import Column from "primevue/column";
import Button from "primevue/button";
import ConfirmDialog from "primevue/confirmdialog";
import Checkbox from "primevue/checkbox";
import DataTable from "primevue/datatable";
import Dialog from "primevue/dialog";
import FileUpload from "primevue/fileupload";
import FloatLabel from "primevue/floatlabel";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import Menu from "primevue/menu";
import Rating from "primevue/rating";
import Row from "primevue/row";
import Tag from "primevue/tag";
import Textarea from "primevue/textarea";
import Drawer from "primevue/drawer";
import Select from "primevue/select";
import ConfirmationService from "primevue/confirmationservice";
import DialogService from "primevue/dialogservice";
import ToastService from "primevue/toastservice";
import Splitter from "primevue/splitter";

import SelectButton from "primevue/selectbutton";

import { createPinia } from "pinia";

const app = createApp(App);


app.use(router);

const pinia = createPinia();
app.use(pinia);

app.use(PrimeVue, { theme:{}})
  .use(ConfirmationService)
  .use(DialogService)
  .use(ToastService)
  .component('pv-button', Button)
  .component('pv-card', Card)
  .component('pv-column', Column)
  .component('pv-confirm-dialog', ConfirmDialog)
  .component('pv-checkbox', Checkbox)
  .component('pv-data-table', DataTable)
  .component('pv-dialog', Dialog)
  .component('pv-select', Select)
  .component('pv-select-button', SelectButton)
  .component('pv-file-upload', FileUpload)
  .component('pv-float-label', FloatLabel)
  .component('pv-icon-field', IconField)
  .component('pv-input-icon', InputIcon)
  .component('pv-input-text', InputText)
  .component('pv-input-number', InputNumber)
  .component('pv-menu', Menu)
  .component('pv-rating', Rating)
  .component('pv-row', Row)
  .component('pv-drawer', Drawer)
  .component('pv-tag', Tag)
  .component('pv-textarea', Textarea)
  .component('pv-toolbar', Toolbar)
  .component('pv-toast', Toast)
  .component('pv-splitter', Splitter);

app.mount('#app');
