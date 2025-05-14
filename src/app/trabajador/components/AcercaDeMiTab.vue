<template>
  <div class="about-grid">
    <div class="left">
      <div class="form-group">
        <label for="about-me">Sobre mí</label>
        <PTextarea id="about-me" v-model="localAbout.me" rows="4" placeholder="Type here"/>
      </div>
      <div class="form-group">
        <label for="about-exp">Mis experiencias</label>
        <PTextarea id="about-exp" v-model="localAbout.experiences" rows="4"/>
      </div>
      <div class="form-group">
        <label for="about-skill">Mis habilidades</label>
        <PTextarea id="about-skill" v-model="localAbout.skills" rows="4"/>
      </div>
    </div>
    <div class="right">
      <div class="form-group">
        <label for="education">Grado de instrucción*</label>

        <PDropdown
          optionLabel="label"
          id="education" v-model="localAbout.education" :options="educationOptions"/>

      </div>
      <div class="form-group">
        <label for="langs">Idiomas</label>
        <PInputText id="langs" v-model="localAbout.languages" placeholder="Type here"/>
      </div>
      <div class="form-group">
        <label>Certificaciones</label>
        <PButton label="Choose File" icon="pi pi-upload" class="p-button-outlined"/>
      </div>
      <div class="form-group">
        <PCheckbox v-model="localAbout.notify"/><label>Acepto recibir notificaciones...</label>
      </div>
      <div class="form-group">
        <PCheckbox v-model="localAbout.consent"/><label>Autorizo el tratamiento de datos… *</label>
      </div>
      <div class="actions">
        <PButton label="Publicar" class="p-button-primary" @click="onPublish"/>
        <PButton label="Guardar cambios" class="p-button-warning" @click="onSave"/>
      </div>
    </div>
  </div>
</template>

<script>
import Textarea from 'primevue/textarea';
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';

export default {
  name: 'AcercaDeMiTab',
  props: {
    about: {
      type: Object,
      required: true
    }
  },
  emits: ['update:about','publish'],
  components: {
    PTextarea: Textarea,
    PDropdown: Dropdown,
    PInputText: InputText,
    PCheckbox: Checkbox,
    PButton: Button
  },
  data() {
    return {
      localAbout: { ...this.about },
      educationOptions: [
        { label: 'Secundaria completa', value: 'Secundaria completa' },
        { label: 'Pregrado completo',   value: 'Pregrado completo' },
        { label: 'Postgrado',           value: 'Postgrado' }
      ]
    }
  },
  watch: {
    about: {
      deep: true,
      handler(newVal) {
        this.localAbout = { ...newVal };
      }
    }
  },
  methods: {
    onSave() {
      this.$emit('update:about', { ...this.localAbout });
    },
    onPublish() {
      this.$emit('publish', { ...this.localAbout });
      this.$emit('update:about', { ...this.localAbout });
    }
  }
}
</script>

<style scoped>
.about-grid { display:flex; gap:2rem; }
.left, .right {
  background:white; padding:1.5rem;
  border:1px dashed #6C757D; border-radius:6px;
  display:flex; flex-direction:column; gap:1rem;
}
.form-group label { font-weight:600; margin-bottom:.25rem; display:block; }
.actions { margin-top:auto; display:flex; flex-direction:column; gap:.75rem; }
</style>
