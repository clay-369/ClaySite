<template>
  <div id="#about" class="flex flex-col gap-4">
    <h1>Over mij</h1>
    <div
      class="flex flex-col gap-2 lg:w-[80%]"
      v-for="section in about.sections"
      :key="section.title"
    >
      <h2>{{ section.title }}</h2>
      <p>{{ section.description }}</p>
      <ul
        class="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400"
      >
        <li v-for="item in section.list" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const { data: about } = await useAsyncData("about", () => {
  return queryCollection("about").first();
});
</script>
