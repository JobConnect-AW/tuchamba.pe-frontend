<template>
  <PDropdown
    :modelValue="props.modelValue"
    @update:modelValue="onUpdate"
    :options="options"
    optionLabel="label"
    placeholder="Categoría de servicio"
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
  { label: 'Electricista',    value: 'electricista' },
  { label: 'Estilista',       value: 'estilista'    },
  { label: 'Carpintero',      value: 'carpintero'   },
  { label: 'Gasfitero',       value: 'gasfitero'    },
  { label: 'Pintor de obras', value: 'pintor'       },
  { label: 'Albañil',         value: 'albanil'      },
  { label: 'Soldador',        value: 'soldador'     },
  { label: 'Jardinero',       value: 'jardinero'    }
]

function onUpdate(val) {
  emit('update:modelValue', val)
}
</script>
