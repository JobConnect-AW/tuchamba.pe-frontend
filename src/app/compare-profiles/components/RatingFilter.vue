<template>
  <PDropdown
    :modelValue="props.modelValue"
    @update:modelValue="onUpdate"
    :options="options"
    optionLabel="label"
    placeholder="Valoración mínima"
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
  { label: '3+', value: 3 },
  { label: '4+', value: 4 },
  { label: '5',  value: 5 }
]

function onUpdate(val) {
  emit('update:modelValue', val)
}
</script>
