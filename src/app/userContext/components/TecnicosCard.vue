<template>
  <div class="cards-container">
    <!-- Iteramos sobre los técnicos y mostramos sus datos -->
    <div class="tecnico-card" v-for="tecnico in tecnicos" :key="tecnico.id">
      <!-- Card de PrimeVue -->
      <Card class="p-mb-3">
        <!-- Header con la imagen del técnico -->
        <template #header>
          <img
            :src="tecnico.imagen"
            alt="Imagen Técnico"
            class="tecnico-image"
          />
        </template>

        <!-- Cuerpo de la Card: Usamos el slot #content para el contenido -->
        <template #content>
          <div class="card-content">
            <h3>{{ tecnico.nombre }}</h3>
            <p><strong>Categoría:</strong> {{ tecnico.categoria }}</p>
            <p><strong>Experiencia:</strong> {{ tecnico.experiencia }}</p>
            <p><strong>Calificación:</strong> {{ tecnico.calificacion }} ⭐</p>
          </div>
        </template>

        <!-- Footer con el botón -->
        <template #footer>
          <Button
            label="Ver Perfil"
            icon="pi pi-user"
            class="p-button-primary p-mt-2"
            @click="viewProfile(tecnico.id)"
          />
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { tecnicosService } from "../service/tecnicosService"; // Importamos el servicio
import Card from "primevue/card";
import Button from "primevue/button";

export default {
  components: {
    Card,
    Button,
  },
  setup() {
    const tecnicos = ref([]);

    // Función para obtener los datos de los técnicos desde el servicio
    const fetchTecnicos = async () => {
      tecnicos.value = await tecnicosService.getTecnicos(); // Usamos el servicio
      console.log("Datos de técnicos:", tecnicos.value); // Verificamos los datos
    };

    // Usamos onMounted para cargar los datos al montar el componente
    onMounted(() => {
      fetchTecnicos();
    });

    // Función para manejar la vista del perfil
    const viewProfile = (id) => {
      console.log("Ver perfil del técnico con ID:", id);
    };

    return {
      tecnicos,
      viewProfile,
    };
  },
};
</script>

<style scoped>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.tecnico-card {
  width: 250px;
  text-align: center;
}

.tecnico-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
}

.card-content h3 {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin: 10px 0;
}

.card-content p {
  font-size: 14px;
  color: #666;
  margin: 5px 0;
}

.p-button-primary {
  width: 100%;
}

.card-footer {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}

.card-footer button {
  margin-top: 10px;
}
</style>
