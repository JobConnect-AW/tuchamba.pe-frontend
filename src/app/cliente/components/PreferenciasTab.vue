<template>
  <div class="preferencias-grid">
    <!-- Columna izquierda -->
    <div class="field">
      <label>Categoría del Servicio</label>
      <Dropdown
        v-model="form.category"
        :options="categories"
        optionLabel="label"
        placeholder="Selecciona"
      />
    </div>
    <div class="field">
      <label>Ubicación / Distrito</label>
      <Dropdown
        v-model="form.district"
        :options="districts"
        optionLabel="label"
        placeholder="Selecciona"
      />
    </div>
    <div class="field">
      <label>Tipo de Servicio Ofrecido</label>
      <Dropdown
        v-model="form.serviceType"
        :options="serviceTypes"
        optionLabel="label"
        placeholder="Selecciona"
      />
    </div>
    <div class="field">
      <label>Años de Experiencia</label>
      <MultiSelect
        v-model="form.experience"
        :options="experienceOptions"
        optionLabel="label"
        placeholder="Selecciona"
      />
    </div>

    <!-- Columna derecha -->
    <div class="field">
      <label>Disponibilidad</label>
      <Dropdown
        v-model="form.availability"
        :options="availabilityOptions"
        optionLabel="label"

        placeholder="Selecciona"
      />
    </div>
    <div class="field">
      <label>Valoración Mínima</label>
      <Dropdown
        v-model="form.minRating"
        :options="ratingOptions"
        optionLabel="label"

        placeholder="Selecciona"
      />
    </div>
    <div class="field">
      <label>Presupuesto Estimado</label>
      <Dropdown
        v-model="form.budget"
        :options="budgetOptions"
        optionLabel="label"

        placeholder="Selecciona"
      />
    </div>
    <div class="field">
      <label>Idiomas</label>
      <MultiSelect
        v-model="form.languages"
        :options="languageOptions"
        optionLabel="label"

        placeholder="Selecciona"
      />
    </div>

    <!-- Botón guardar -->
    <div class="save-btn">
      <Button label="Guardar cambios" icon="pi pi-save" class="p-button-warning" />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Dropdown    from 'primevue/dropdown'
import MultiSelect from 'primevue/multiselect'
import Button      from 'primevue/button'

const form = reactive({
  category:    null,
  district:    null,
  serviceType: null,
  experience:  [],
  availability:null,
  minRating:   null,
  budget:      null,
  languages:   []
})

const categories = [
  { label:'Electricista', value:'electricista' },
  { label:'Fontanero',    value:'fontanero'   }
]
const districts = [
  { label:'Lima',     value:'lima'     },
  { label:'Arequipa', value:'arequipa' }
]
const serviceTypes = [
  { label:'Instalación',   value:'instalacion'   },
  { label:'Mantenimiento', value:'mantenimiento' }
]
const experienceOptions = [
  { label:'10+',  value:'10+'  },
  { label:'6-10', value:'6-10' },
  { label:'3-5',  value:'3-5'  },
  { label:'0-2',  value:'0-2'  }
]
const availabilityOptions = [
  { label:'Inmediata', value:'inmediata' },
  { label:'24h',       value:'24h'       }
]
const ratingOptions = [
  { label:'4 estrellas', value:'4' },
  { label:'3 estrellas', value:'3' }
]
const budgetOptions = [
  { label:'< S/50',       value:'<50'     },
  { label:'S/50 – S/100', value:'50-100' }
]
const languageOptions = [
  { label:'Español',   value:'es'    },
  { label:'Inglés',    value:'en'    },
  { label:'Portugués', value:'pt'    },
  { label:'Otro',      value:'other' }
]
</script>

<style scoped>
.preferencias-grid {
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 1.5rem 2rem;
}
.field { display: flex; flex-direction: column; }
.field label {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #0B5ED7;
}
.save-btn {
  grid-column: span 2;
  text-align: right;
}
</style>
