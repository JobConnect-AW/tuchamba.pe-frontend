<script setup>
import { reactive, ref } from 'vue'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Dropdown from 'primevue/dropdown'
import Checkbox from 'primevue/checkbox'
import { Button } from 'primevue'
import { useRouter } from 'vue-router'
import { CreateOfferUseCase } from '../application/use-cases/create-offer.usecase'
import { ApiOfferRepository } from '../infrastructure/repositories/api-offer.repository'
import { HttpService } from '../../shared/infrastructure/services/http.service'

const router = useRouter()
const isLoading = ref(false)
const errorMessage = ref('')

const httpService = new HttpService()
const apiOfferRepository = new ApiOfferRepository(httpService)
const createOfferUseCase = new CreateOfferUseCase(apiOfferRepository)

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

async function submitForm() {
  if (!form.personalDataConsent) {
    errorMessage.value = 'Debes aceptar el tratamiento de datos personales'
    return
  }

  if (!form.title || !form.description || !form.technicalCategory || !form.requiredExperience || !form.workSchedule || !form.paymentMethod) {
    errorMessage.value = 'Por favor, completa todos los campos obligatorios'
    return
  }

  isLoading.value = true
  errorMessage.value = ''

  try {
    const offerData = {
      title: form.title,
      description: form.description,
      technicalCategory: form.technicalCategory,
      location: form.location,
      estimatedBudget: parseFloat(form.estimatedBudget) || 0,
      paymentMethod: form.paymentMethod,
      requiredExperience: form.requiredExperience,
      workSchedule: form.workSchedule,
      notificationsAccepted: form.notificationsAccepted,
      personalDataConsent: form.personalDataConsent,
      //userUid: userData.uid
    }

    await createOfferUseCase.execute(offerData)

    // Redirigir a la lista de ofertas o dashboard
    router.push('/cliente/ofertas')
  } catch (error) {
    console.error('Error al crear oferta:', error)
    errorMessage.value = error.message || 'Error al crear la oferta. Inténtalo de nuevo.'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <form @submit.prevent="submitForm" class="flex flex-wrap gap-6">
    <div v-if="errorMessage" class="error-message w-full">
      {{ errorMessage }}
    </div>
    <div class="flex flex-col md:flex-row gap-6 w-full flex-[100%]">
      <!-- Información General -->
      <fieldset class="border border-dashed border-blue-400 rounded p-4 md:flex-1 flex flex-col gap-2">
        <legend class="px-2 text-blue-600 font-semibold">Información General</legend>

        <div class="flex flex-col mb-4">
          <label for="title" class="mb-1 font-medium">Título de la Oferta</label>
          <InputText id="title" v-model="form.title" placeholder="Escribe aquí" />
        </div>

        <div class="flex flex-col mb-4">
          <label for="description" class="mb-1 font-medium">Descripción</label>
          <Textarea
            id="description"
            v-model="form.description"
            placeholder="Escribe aquí"
            rows="3"
          />
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
      <fieldset class="border border-dashed border-blue-400 rounded p-4 md:flex-1 flex flex-col gap-2">
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
    </div>
    <div class="flex flex-col md:flex-row gap-6 w-full flex-[100%]">
      <fieldset class="border border-dashed border-blue-400 rounded p-4  md:flex-1 flex flex-col gap-2">
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

      <fieldset class="rounded p-4 flex flex-col gap-4  md:flex-1">
        <!-- Checkboxes -->
        <div class="flex items-start gap-4 mt-2">
          <Checkbox
            binary
            inputId="notificationsAccepted"
            v-model="form.notificationsAccepted"
            class="mr-2"
          />
          <label for="notificationsAccepted" class="select-none"
            >Acepto recibir notificaciones sobre el estado de esta oferta</label
          >
        </div>

        <div class="flex items-start gap-4">
          <Checkbox
            binary
            inputId="personalDataConsent"
            v-model="form.personalDataConsent"
            class="mr-2"
          />
          <label for="personalDataConsent" class="select-none">
            Autorizo el tratamiento de mis datos personales para finalidades informativas y
            comerciales, conforme al siguiente
            <a href="#" class="!text-blue-600 underline">enlace</a>. Sin mi autorización, no podrán
            comunicarse conmigo. *
          </label>
        </div>
        <Button
          type="submit"
          :disabled="!form.personalDataConsent || isLoading"
          :loading="isLoading"
          :label="isLoading ? 'Publicando...' : 'Publicar'"
          class="md:col-span-2 mt-4 bg-blue-600 text-white font-bold py-3 rounded hover:bg-blue-700 transition"
        />
      </fieldset>
    </div>

  </form>
</template>

<style scoped>
.error-message {
  background-color: #fee2e2;
  color: #dc2626;
  padding: 0.75rem;
  border-radius: 0.375rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  border: 1px solid #fecaca;
}
</style>
