<template>
  <div class="navbar bg-base-100 shadow-sm border-b sticky top-0 z-10">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li><a>Over mij</a></li>
          <li><a>Contact</a></li>
          <li>
            <a>Projecten</a>
            <ul class="p-2">
              <li v-for="project in projects" :key="project.name">
                <a>{{ project.name }}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <NuxtLink class="btn btn-ghost text-xl" to="/#about">ClaySite</NuxtLink>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><NuxtLink to="/#about">Over mij</NuxtLink></li>
        <li><NuxtLink to="/#contact">Contact</NuxtLink></li>
        <li><NuxtLink to="/#projects">Projecten</NuxtLink></li>
        <!-- <li>
          <details>
            <summary>Projecten</summary>
            <ul class="p-2">
              <li v-for="project in projects" :key="project.name">
                <a>{{ project.name }}</a>
              </li>
            </ul>
          </details>
        </li> -->
      </ul>
    </div>
    <div class="navbar-end gap-2">
      <a
        v-for="button in buttons.icons"
        :key="button.icon"
        :href="button.url"
        target="_blank"
      >
        <Icon :name="button.icon" />
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
const { data: buttons } = await useAsyncData("buttons", () => {
  return queryCollection("ui").first();
});

const { data: projects } = await useAsyncData("projects", () => {
  return queryCollection("projects").all();
});
</script>
