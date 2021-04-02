<template>
  <div class="container mx-auto p-4 md:p-10">
    <div
      class="grid lg:grid-cols-10 lg:grid-rows-1 gap-8 lg:items-stretch justify-center"
    >
      <div class="lg:col-span-4 pt-16 lg:pr-20 lg:py-32">
        <div class="font-medium mb-4 lg:mb-8 tracking-wider uppercase">
          <span class="pr-2">&mdash;</span> we are
        </div>
        <h1 class="font-bold text-4xl lg:text-6xl mb-10 tracking-tight">
          <span class="border-b-4 pb-2 border-yellow-400">Lorem</span>.Inc
        </h1>
        <p class="leading-relaxed mb-10 lg:mb-20 text-2xl lg:text-4xl">
          Aut distinctio itaque a! Odit corrupti fugit quod alias.
        </p>
        <div class="flex flex-row">
          <a
            href="#"
            class="bg-black text-white text-lg font-medium leading-none py-4 px-4 md:px-6 mr-4"
            >Contact Us</a
          >
          <a href="#" class="text-lg font-medium leading-none py-4 px-4 md:px-6"
            >Case Study</a
          >
        </div>
      </div>
      <div class="lg:col-span-6 mb-20">
        <div class="flex flex-col h-full relative w-full mr-20 z-10">
          <div
            class="bg-cover bg-no-repeat bg-center md:bg-right-bottom bg-yellow-400 relative flex flex-col h-full pb-6 px-6 lg:pb-12 lg:px-12 z-20"
            style="
              background-image: url(https://images.unsplash.com/photo-1457131760772-7017c6180f05?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=50);
            "
          >
            <div class="relative w-full aspect-w-16 aspect-h-9" />
            <div class="text-black mt-auto">
              <div class="text-base md:text-xl mb-2 uppercase">
                <span class="pr-2">&mdash;</span> Our Products
              </div>
              <p class="font-bold text-2xl md:text-4xl mb-2">Nemo libero</p>
              <p class="text-2xl md:text-3xl mb-8">Ipsum</p>
              <a
                href="#"
                class="font-medium text-base md:text-lg inline-block pb-1 border-b-2 border-current"
              >
                Explore
              </a>
            </div>
          </div>
          <div
            class="flex flex-col absolute -bottom-20 right-0 lg:-right-10 w-full h-60 bg-black z-0"
          >
            <div
              class="flex flex-row py-8 px-6 lg:px-8 justify-between mt-auto w-full text-sm md:text-base text-white"
            >
              <div>
                <a
                  class="hover:opacity-70 transition-opacity duration-200"
                  href="mailto:hello@agency.com"
                  >hello@agency.com</a
                >
              </div>
              <div>
                <a
                  class="hover:opacity-70 transition-opacity duration-200"
                  href="#"
                  >Our work</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeroOne',
})
</script>
