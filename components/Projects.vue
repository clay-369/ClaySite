<template>
  <div class="flex flex-col w-full">
    <h2>Projecten</h2>
    <div class="flex flex-wrap py-4 gap-8">
      <Card
        v-for="project in projects"
        :key="project.name"
        :project="project"
        class="flex-grow"
      />
    </div>
  </div>
</template>
<script setup>
const { data: projects } = await useAsyncData("projects", () => {
  return queryCollection("projects").all();
});
</script>
