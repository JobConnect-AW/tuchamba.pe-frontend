<script setup>
import { reactive } from 'vue'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Dropdown from 'primevue/dropdown'
import Checkbox from 'primevue/checkbox'
import { Button } from 'primevue'

const form = reactive({
  title: '',
  description: '',
  technicalCategory: null,
  location: '',
  requiredLanguages: '',
  requiredExperience: null,
  certifications: '',
  workSchedule: null,
  estimatedBudget: '',
  paymentMethod: null,
  notificationsAccepted: false,
  personalDataConsent: false,
})

const technicalCategories = [
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend', value: 'backend' },
  { label: 'Fullstack', value: 'fullstack' },
]

const experiences = [
  { label: 'Junior', value: 'junior' },
  { label: 'Semi Senior', value: 'semi_senior' },
  { label: 'Senior', value: 'senior' },
]

const workSchedules = [
  { label: '9am - 6pm', value: '9-18' },
  { label: 'Flexible', value: 'flexible' },
  { label: 'Turnos', value: 'shifts' },
]

const paymentMethods = [
  { label: 'Transferencia bancaria', value: 'transfer' },
  { label: 'Pago por hora', value: 'hourly' },
  { label: 'Pago fijo', value: 'fixed' },
]

function submitForm() {
  if (!form.personalDataConsent) {
    alert('Debes aceptar el tratamiento de datos personales')
    return
  }
  // Aquí podés enviar el formulario o llamar al use case
  console.log('Formulario enviado', JSON.stringify(form))
}
</script>

<template>
  <form @submit.prevent="submitForm" class="flex flex-wrap gap-6">
    <!-- Información General -->
    <fieldset class="border border-dashed border-blue-400 rounded p-4 w-[calc(50%-1.5rem)]">
      <legend class="px-2 text-blue-600 font-semibold">Información General</legend>

      <div class="flex flex-col mb-4">
        <label for="title" class="mb-1 font-medium">Título de la Oferta</label>
        <InputText id="title" v-model="form.title" placeholder="Escribe aquí" />
      </div>

      <div class="flex flex-col mb-4">
        <label for="description" class="mb-1 font-medium">Descripción</label>
        <Textarea id="description" v-model="form.description" placeholder="Escribe aquí" rows="3" />
      </div>

      <div class="flex flex-col mb-4">
        <label for="technicalCategory" class="mb-1 font-medium">Categoría Técnica</label>
        <Dropdown
          id="technicalCategory"
          v-model="form.technicalCategory"
          :options="technicalCategories"
          optionLabel="label"
          optionValue="value"
          placeholder="Seleccionar Trabajo*"
        />
      </div>

      <div class="flex flex-col">
        <label for="location" class="mb-1 font-medium">Dirección</label>
        <InputText id="location" v-model="form.location" placeholder="Escribe aquí" />
      </div>
    </fieldset>

    <!-- Requisitos del técnico -->
    <fieldset class="border border-dashed border-blue-400 rounded p-4 w-[calc(50%-1.5rem)]">
      <legend class="px-2 text-blue-600 font-semibold">Requisitos del técnico</legend>

      <div class="flex flex-col mb-4">
        <label for="requiredExperience" class="mb-1 font-medium"
          >Experiencia Mínima Requerida</label
        >
        <Dropdown
          id="requiredExperience"
          v-model="form.requiredExperience"
          :options="experiences"
          optionLabel="label"
          optionValue="value"
          placeholder="Seleccionar Experiencia*"
        />
      </div>

      <div class="flex flex-col">
        <label for="workSchedule" class="mb-1 font-medium">Horario de Trabajo</label>
        <Dropdown
          id="workSchedule"
          v-model="form.workSchedule"
          :options="workSchedules"
          optionLabel="label"
          optionValue="value"
          placeholder="Elige Rango de Horas*"
        />
      </div>
    </fieldset>

    <!-- Compensación y Beneficios -->
    <fieldset class="border border-dashed border-blue-400 rounded p-4 w-[calc(50%-1.5rem)]">
      <legend class="px-2 text-blue-600 font-semibold">Compensación y Beneficios</legend>

      <div class="flex flex-col mb-4">
        <label for="estimatedBudget" class="mb-1 font-medium">Presupuesto Estimado</label>
        <InputText id="estimatedBudget" v-model="form.estimatedBudget" placeholder="Escribe aquí" />
      </div>

      <div class="flex flex-col">
        <label for="paymentMethod" class="mb-1 font-medium">Forma de Pago</label>
        <Dropdown
          id="paymentMethod"
          v-model="form.paymentMethod"
          :options="paymentMethods"
          optionLabel="label"
          optionValue="value"
          placeholder="Seleccionar Forma de Pago*"
        />
      </div>
    </fieldset>

    <fieldset class="rounded p-4 flex flex-col gap-4 w-[calc(50%-1.5rem)]">
      <!-- Checkboxes -->
      <div class="flex items-start gap-4 mt-2">
        <Checkbox
          inputId="notificationsAccepted"
          v-model="form.notificationsAccepted"
          class="mr-2"
        />
        <label for="notificationsAccepted" class="select-none"
          >Acepto recibir notificaciones sobre el estado de esta oferta</label
        >
      </div>

      <div class="flex items-start gap-4">
        <Checkbox inputId="personalDataConsent" v-model="form.personalDataConsent" class="mr-2" />
        <label for="personalDataConsent" class="select-none">
          Autorizo el tratamiento de mis datos personales para finalidades informativas y
          comerciales, conforme al siguiente
          <a href="#" class="text-blue-600 underline">enlace</a>. Sin mi autorización, no podrán
          comunicarse conmigo. *
        </label>
      </div>
      <!-- Botón Publicar -->
      <Button
        type="submit"
        class="md:col-span-2 mt-4 bg-blue-600 text-white font-bold py-3 rounded hover:bg-blue-700 transition"
      >
        Publicar
      </Button>
    </fieldset>
  </form>
</template>
