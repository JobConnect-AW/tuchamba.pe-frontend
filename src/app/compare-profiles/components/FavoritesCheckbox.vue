<template>
  <div class="flex items-center">
    <input
      id="fav"
      type="checkbox"
      :checked="modelValue"
      @change="onChange"
      class="h-4 w-4 text-blue-600 border-gray-300 rounded"
    />
    <label for="fav" class="ml-2 text-sm">Solo Favoritos</label>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

// 1) Definimos correctamente el prop modelValue:
const props = defineProps({
  modelValue: Boolean
})

// 2) Definimos el emit que usaremos para el v-model:
const emit = defineEmits(['update:modelValue'])

// 3) Función que despacha el cambio del input:
function onChange(e) {
  emit('update:modelValue', e.target.checked)
}

// Desestructuramos para poder usar `modelValue` directamente en el template
const { modelValue } = props
</script>
