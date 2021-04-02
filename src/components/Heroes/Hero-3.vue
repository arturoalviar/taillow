<template>
  <div class="relative overflow-hidden">
    <div
      class="relative grid grid-rows-none lg:grid-cols-6 gap-4 py-12 px-4 md:px-8 items-center"
    >
      <div
        class="lg:col-start-1 lg:col-span-3 lg:row-span-full py-6 lg:py-12 z-20"
      >
        <p class="text-xl lg:text-2xl mb-2 lg:mb-4">Koushirou Izumi</p>
        <h1 class="font-bold leading-none mb-8 lg:mb-12 text-4xl lg:text-7xl">
          Web developer, designer, &amp; more.
        </h1>
        <p class="leading-relaxed text-lg lg:text-2xl xl:pr-32">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          delectus iure aspernatur repudiandae libero magni
        </p>
      </div>
      <div class="relative lg:col-start-3 lg:col-span-4 lg:row-span-full z-10">
        <div
          class="bg-cover bg-no-repeat bg-bottom aspect-w-1 aspect-h-1"
          style="
            background-image: url(https://images.unsplash.com/photo-1567861911437-538298e4232c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=50);
          "
        />
        <a
          href="#"
          class="bg-white text-gray-900 absolute inline-block px-6 py-4 font-bold bottom-0 right-0 text-sm lg:text-base"
          >Learn more</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeroThree',
})
</script>
