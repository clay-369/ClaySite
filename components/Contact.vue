<template>
  <div id="contact" class="flex flex-col gap-8 lg:gap-4 justify-center">
    <h2 class="text-center">Contact</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <a
        class="bg-base-900 p-4 rounded-lg border border-base-700 text-center flex flex-col gap-2 items-center"
        v-for="item in contact.sections"
        :href="item.link"
        target="_blank"
      >
        <Icon :name="item.icon" class="text-2xl" />
        <p>{{ item.text }}</p>
      </a>
    </div>
  </div>
</template>

<script setup>
const { data: contact } = await useAsyncData("contact", () => {
  return queryCollection("contact").first();
});
</script>
