<template>
  <div :class="cardClass">
    <div v-if="selected" class="badge">Selected</div>

    <h3 class="pc-title">{{ title }}</h3>

    <div class="pc-price">
      <span class="pc-amount">${{ price }}</span>
      <span class="pc-unit">/month</span>
    </div>

    <p class="pc-desc">{{ description }}</p>
    <hr class="pc-divider" />

    <ul class="pc-features">
      <li v-for="(feat, i) in features" :key="i">
        <img
          src="@/assets/checkgris.png"
          alt="check"
          class="pc-check"
          width="12"
          height="12"
        />
        <span>{{ feat }}</span>
      </li>
    </ul>

    <button :class="['pc-button', buttonClass]" :disabled="selected" @click="$emit('select', planKey)">
      {{ buttonText }}
    </button>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  title:       String,
  price:       [Number, String],
  description: String,
  features:    { type: Array, default: () => [] },
  buttonText:  { type: String, default: 'Choose Plan' },
  selected:    { type: Boolean, default: false },
  planKey:     { type: String, required: true }
});

const cardClass = computed(() => {
  return [
    'plan-card',
    props.selected ? 'pc-selected' : 'pc-unselected'
  ].join(' ');
});

const buttonClass = computed(() => {
  if (props.selected)               return 'pc-btn-disabled';
  if (props.planKey === 'standard') return 'pc-btn-disabled';
  if (props.planKey === 'basic')    return 'pc-btn-basic';
  if (props.planKey === 'expert')   return 'pc-btn-expert';
  return '';
});
</script>

<style scoped>
.plan-card {
  position: relative;
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-sizing: border-box;
  transition: transform 0.2s, box-shadow 0.2s;
}
.plan-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
}
.pc-selected {
  border: 2px solid #3b82f6;
}
.pc-unselected {
  border: 1px solid #d1d5db;
}
.badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #3b82f6;
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
}
.pc-title {
  margin: 0 0 0.75rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
}
.pc-price {
  display: flex;
  align-items: baseline;
  margin-bottom: 0.75rem;
}
.pc-amount {
  font-size: 1.875rem;
  font-weight: 800;
  color: #111827;
}
.pc-unit {
  margin-left: 0.5rem;
  color: #6b7280;
}
.pc-desc {
  color: #6b7280;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}
.pc-divider {
  border: none;
  border-top: 1px solid #e5e7eb;
  margin-bottom: 1rem;
}
.pc-features {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
}
.pc-features li {
  display: flex;
  align-items: center;
  color: #374151;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}
.pc-check {
  margin-right: 0.5rem;
}
.pc-button {
  width: 100%;
  padding: 0.75rem 0;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
}
.pc-btn-disabled {
  background: #e5e7eb;
  color: #9ca3af;
  cursor: not-allowed;
}
.pc-btn-basic {
  background: #3b82f6;
  color: white;
}
.pc-btn-basic:hover {
  background: #2563eb;
}
.pc-btn-expert {
  background: #f59e0b;
  color: white;
}
.pc-btn-expert:hover {
  background: #d97706;
}
</style>
