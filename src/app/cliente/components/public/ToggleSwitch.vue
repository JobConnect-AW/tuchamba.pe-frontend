<!-- src/app/cliente/components/public/ToggleSwitch.vue -->
<template>
  <label class="inline-flex items-center cursor-pointer">
    <span class="mr-2 text-gray-700"><slot /></span>
    <div
      :class="[
        'relative w-10 h-6 rounded-full transition-colors duration-200',
        modelValue ? 'bg-blue-500' : 'bg-gray-300',
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      ]"
    >
      <input
        type="checkbox"
        class="absolute w-full h-full opacity-0 cursor-pointer"
        :checked="modelValue"
        :disabled="disabled"
        @change="onChange"
      />
      <span
        :class="[
          'absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200',
          modelValue ? 'translate-x-4' : 'translate-x-0'
        ]"
      />
    </div>
  </label>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps({
  modelValue: { type: Boolean, default: false },
  disabled:   { type: Boolean, default: false }
})
const emit = defineEmits(['update:modelValue'])
function onChange(e) {
  if (!props.disabled) emit('update:modelValue', e.target.checked)
}
</script>
