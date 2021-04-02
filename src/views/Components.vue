<template>
  <div>
    <div class="container mx-auto">
      <h1 class="font-bold text-center text-3xl pt-10 mb-4">Components</h1>
      <div
        class="flex flex-row flex-wrap justify-center items-center pt-10 w-full"
      >
        <router-link
          custom
          v-for="(link, index) in links"
          :key="`link-${link}-${index}`"
          :to="`/components/${link.link}`"
          v-slot="{ href, navigate, isActive }"
        >
          <a
            :href="href"
            @click="navigate"
            class="bg-gray-200 dark:bg-gray-600 hover:bg-cyan-400 hover:text-cyan-900 dark:hover:bg-cyan-400 dark:hover:text-cyan-900 font-medium px-6 py-2 mb-4 mr-4 rounded-full transition"
            :class="{
              'bg-cyan-400 dark:bg-cyan-400 text-cyan-900': isActive,
            }"
          >
            {{ link.title }}
          </a>
        </router-link>
      </div>
    </div>

    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Components',
  setup() {
    const links = [
      {
        title: 'buttons',
        link: 'buttons',
      },
      {
        title: 'cards',
        link: 'cards',
      },
      {
        title: 'footers',
        link: 'footers',
      },
      {
        title: 'heroes',
        link: 'heroes',
      },
      {
        title: 'navs',
        link: 'navs',
      },
      {
        title: 'skeletons',
        link: 'skeletons',
      },
    ]

    return {
      links,
    }
  },
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.425s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translate3d(0, 100px, 0);
}
</style>
