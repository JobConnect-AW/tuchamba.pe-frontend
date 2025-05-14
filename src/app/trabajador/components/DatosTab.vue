<template>
  <div class="datos-grid">
    <div v-for="f in fields" :key="f.label" class="field">
      <span class="label"><i :class="f.icon"/> {{ f.label }}</span>
      <span class="value">{{ f.value }}</span>
    </div>
    <div class="save-btn">
      <Button label="Guardar cambios" icon="pi pi-save" class="p-button-warning"/>
    </div>
  </div>
</template>
<script>
export default {
  props:['fields']
}
</script>
<style scoped>
.datos-grid {
  display:grid; grid-template-columns:repeat(2,1fr); gap:1.5rem 2rem;
}
.label { font-weight:600; color:#0B5ED7; }
.value { display:block; margin-top:.25rem; color:#343A40; }
.save-btn { grid-column:span 2; text-align:right; }
</style>
