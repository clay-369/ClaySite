<template>
  <div
    class="card bg-base-100 w-96 shadow-sm border cursor-pointer hover:shadow-md transition-all duration-300"
    v-if="project.image"
  >
    <figure>
      <img :src="project.image" alt="Shoes" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        {{ project.name }}
        <div v-if="checkNew()" class="badge badge-secondary">NEW</div>
      </h2>
      <p>
        {{ project.description }}
      </p>
      <div class="card-actions justify-start">
        <div
          class="badge badge-outline"
          v-if="project.tags"
          v-for="tag in project.tags"
          :key="tag"
        >
          {{ tag }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { project } = defineProps({
  project: Object,
});

const checkNew = () => {
  const now = new Date();
  const projectDate = new Date(project.date);
  const diffTime = Math.abs(now - projectDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays < 30;
};
</script>

<style>
.card:hover {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  transform: scale(1.05);
}
</style>
