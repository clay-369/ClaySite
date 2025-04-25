<template>
  <div id="about" class="flex flex-col gap-8 lg:gap-4 pt-18">
    <h1>Over mij</h1>
    <div
      class="flex flex-col gap-2 lg:w-[80%]"
      v-for="section in about.sections"
      :key="section.title"
    >
      <h3>{{ section.title }}</h3>
      <p>{{ section.description }}</p>
      <ul
        class="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 text-left"
      >
        <li v-for="item in section.list" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="flex flex-row gap-2 lg:w-[80%]">
      <ContentRenderer
        :value="markdown"
        v-if="markdown"
        class="contentrenderer flex flex-row flex-wrap gap-4"
      />
      <div v-else>No skills found</div>
    </div>
  </div>
</template>

<script setup>
const { data: about } = await useAsyncData("about", () => {
  return queryCollection("about").first();
});

const { data: markdown } = await useAsyncData(() =>
  queryCollection("content").path("/about").first()
);
</script>

<style>
.contentrenderer p {
  display: flex;
  flex-wrap: wrap;
}
</style>
