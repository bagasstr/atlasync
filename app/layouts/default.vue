<script setup lang="ts">
import SharedNavbar from '@/components/shared/Navbar.vue'
import FooterSection from '@/components/FooterSection.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col justify-between bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
    <SharedNavbar />
    <main class="flex-1">
      <slot />
    </main>
    <FooterSection />
  </div>
</template>
