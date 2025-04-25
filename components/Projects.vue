<template>
  <div class="flex flex-col w-full pt-18" id="projects">
    <h2>Projecten</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 gap-8">
      <Card
        v-for="project in projects"
        :key="project.name"
        :project="project"
      />
    </div>
  </div>
</template>
<script setup>
const { data: projects } = await useAsyncData("projects", () => {
  return queryCollection("projects").all();
});
</script>
