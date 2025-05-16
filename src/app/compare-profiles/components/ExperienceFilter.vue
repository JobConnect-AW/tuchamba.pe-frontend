<template>
  <PDropdown
    :modelValue="props.modelValue"
    @update:modelValue="onUpdate"
    :options="options"
    optionLabel="label"
    placeholder="Años de experiencia"
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
  { label: '1-5',  value: '1-5' },
  { label: '6-10', value: '6-10' },
  { label: '10+',  value: '10+' }
]

function onUpdate(val) {
  emit('update:modelValue', val)
}
</script>
