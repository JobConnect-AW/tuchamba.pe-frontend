<template>
  <PDropdown
    :modelValue="props.modelValue"
    @update:modelValue="onUpdate"
    :options="options"
    optionLabel="label"
    placeholder="Disponibilidad"
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
  '8:00 am - 12:00 pm',
  '10:00 am - 1:00 pm',
  '12:00 pm - 4:00 pm',
  '2:00 pm - 6:00 pm'
].map(v => ({ label: v, value: v }))

function onUpdate(val) {
  emit('update:modelValue', val)
}
</script>
