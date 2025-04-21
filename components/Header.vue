<template>
  <div class="navbar bg-base-100 shadow-sm border rounded-lg">
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
              <li><a>Project 1</a></li>
              <li><a>Project 2</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <a class="btn btn-ghost text-xl">ClaySite</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><a>Over mij</a></li>
        <li><a>Contact</a></li>
        <li>
          <details>
            <summary>Projecten</summary>
            <ul class="p-2">
              <li><a>Project 1</a></li>
              <li><a>Project 2</a></li>
            </ul>
          </details>
        </li>
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
<script setup>
const { data: buttons } = await useAsyncData("buttons", () => {
  return queryCollection("ui").first();
});
</script>
