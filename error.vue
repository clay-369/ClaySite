<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div v-if="error.statusCode === 404">
    <div
      class="container mx-auto my-2 gap-4 flex flex-col items-center justify-center h-screen"
    >
      <h2>{{ error.statusCode }} error!</h2>
      <p>Deze pagina bestaat niet.</p>
      <button class="btn btn-primary" @click="handleError">
        Terug naar de homepagina
      </button>
    </div>
  </div>
  <div v-else>
    <div
      class="container mx-auto my-2 gap-4 flex flex-col items-center justify-center h-screen"
    >
      <h2>{{ error.statusCode }} error!</h2>
      <button class="btn btn-primary" @click="handleError">
        Terug naar de homepagina
      </button>
    </div>
  </div>
</template>
