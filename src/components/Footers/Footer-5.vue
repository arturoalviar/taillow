<template>
  <footer>
    <div class="flex flex-col lg:flex-row items-stretch">
      <div class="mb-6 lg:mb-0 lg:mr-10">
        <div class="w-12">
          <AppLogo />
        </div>
      </div>
      <div class="flex flex-col flex-1">
        <address class="text-2xl leading-9 not-italic">
          123 Fake Street <br />
          New York, NY <br />
          10001
        </address>
        <div class="mt-4 lg:mt-auto">
          <div class="mb-4">
            <a class="border-b pb-2" href="tel:15555555555">(555) 555-5555</a>
          </div>
          <div>
            <a class="border-b pb-2" href="mailto:faker@fake.com"
              >hello@taillow.com</a
            >
          </div>
        </div>
      </div>
      <div class="mt-10 lg:mt-0 flex-1">
        <div class="grid grid-cols-3 text-sm md:text-base">
          <NavLinks title="navigation" />
          <NavLinks title="product" />
          <NavLinks title="resources" />
        </div>
        <div class="mt-auto pt-10">
          <p class="text-sm text-center lg:text-left">
            {{ new Date().getFullYear() }}. Taillow
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavLinks from './partials/NavLinks.vue'

export default defineComponent({
  name: 'FooterFive',
  components: {
    NavLinks,
  },
})
</script>
