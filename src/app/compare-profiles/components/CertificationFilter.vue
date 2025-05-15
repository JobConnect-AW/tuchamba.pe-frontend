<template>
  <PDropdown
    :modelValue="props.modelValue"
    @update:modelValue="onUpdate"
    :options="options"
    optionLabel="label"
    placeholder="Tipo de certificación"
    class="p-dropdown-sm"
  />
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: null
})
const emit = defineEmits(['update:modelValue'])

const options = [
  { label: 'Técnico certificado',    value: 'tecnico'     },
  { label: 'Institución técnica',    value: 'institucion'  },
  { label: 'Formación autodidacta',  value: 'autodidacta' },
  { label: 'Certificación en línea', value: 'online'      },
  { label: 'Licencia profesional',   value: 'licencia'    }
]

function onUpdate(val) {
  emit('update:modelValue', val)
}
</script>
