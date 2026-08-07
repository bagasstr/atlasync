<script setup lang="ts">
import { Link2, Cpu, Rocket, CheckCircle } from '@lucide/vue'

const steps = [
  {
    number: '01',
    icon: Link2,
    title: 'Hubungkan Toko Anda',
    description: 'Login dengan akun official Tokopedia, TikTok Shop, atau Shopee Anda via OAuth API resmi yang terenskripsi aman.'
  },
  {
    number: '02',
    icon: Cpu,
    title: 'Mapping Produk & Stok Awal',
    description: 'Atlasync akan mendeteksi SKU produk yang sama secara otomatis dan menyelaraskan jumlah stok awal dalam hitungan detik.'
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Otomatisasi Berjalan 24/7',
    description: 'Setiap ada penjualan baru, stok di marketplace lain langsung di-update instan. Anda cukup fokus memperluas penjualan.'
  }
]
</script>

<template>
  <section class="py-20 lg:py-32 bg-background relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4 mb-20">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
          Proses Mudah
        </div>
        <h2 class="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
          Hanya 3 Langkah Mudah Untuk Memulai
        </h2>
        <p class="text-base sm:text-lg text-muted-foreground">
          Tanpa perlu setup server sendiri atau coding rumit. Langsung terhubung dalam 3 menit.
        </p>
      </div>

      <!-- Steps Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        <div 
          v-for="(step, idx) in steps" 
          :key="step.number"
          class="relative p-8 rounded-2xl border border-border/60 bg-card hover:border-primary/40 transition-all duration-300 space-y-5"
        >
          <!-- Step Badge Number -->
          <div class="flex items-center justify-between">
            <span class="text-4xl font-extrabold text-primary/30 font-mono">{{ step.number }}</span>
            <div class="p-3 rounded-xl bg-primary/10 text-primary">
              <component :is="step.icon" class="w-6 h-6" />
            </div>
          </div>

          <h3 class="text-xl font-bold text-foreground">
            {{ step.title }}
          </h3>

          <p class="text-sm text-muted-foreground leading-relaxed">
            {{ step.description }}
          </p>
        </div>
      </div>

    </div>
  </section>
</template>
