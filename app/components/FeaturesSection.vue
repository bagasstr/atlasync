<script setup lang="ts">
import {
  RefreshCw,
  Printer,
  TrendingUp,
  Sliders,
  ShieldCheck,
  Zap,
  Layers,
  ArrowRight
} from '@lucide/vue'

const features = [
  {
    icon: RefreshCw,
    title: 'Auto-Sync Stok Real-Time',
    description: 'Saat 1 produk terjual di Tokopedia, stok di Shopee & TikTok Shop otomatis berkurang dalam hitungan milidetik. Mencegah risiko oversold 100%.',
    tag: 'Bebas Oversold',
    badgeColor: 'bg-primary/10 text-primary'
  },
  {
    icon: Printer,
    title: 'Cetak Resi & Packing Massal',
    description: 'Proses ratusan pesanan dari 3 marketplace sekaligus. Cetak label pengiriman thermal massal tanpa perlu buka-tutup tab toko satu per satu.',
    tag: 'Hemat 3 Jam/Hari',
    badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
  },
  {
    icon: TrendingUp,
    title: 'Kalkulator Profit & Biaya Admin',
    description: 'Hitung otomatis net profit bersih setelah dipotong potongan komisi Tokopedia, TikTok, & Shopee. Lengkap dengan estimasi HPP.',
    tag: 'Transparan 100%',
    badgeColor: 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
  },
  {
    icon: Sliders,
    title: 'Engine Pengaturan Harga Massal',
    description: 'Ubah harga atau buat diskon tanggal kembar (9.9, 10.10) di semua toko dalam satu kali klik dengan skema markup harga fleksibel.',
    tag: 'Multi-Store Control',
    badgeColor: 'bg-purple-500/10 text-purple-600 dark:text-purple-400'
  }
]
</script>

<template>
  <section class="py-20 lg:py-32 bg-muted/30 border-y border-border/40 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
          <Zap class="w-3.5 h-3.5" />
          Fitur Unggulan Seller
        </div>

        <h2 class="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
          Dirancang Khusus Untuk Solusi Operasional Seller Indonesia
        </h2>

        <p class="text-base sm:text-lg text-muted-foreground">
          Tinggalkan cara manual yang membuang waktu dan berisiko selisih stok. Otomatiskan seluruh alur kerja toko online Anda.
        </p>
      </div>

      <!-- Feature Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          v-for="feat in features" 
          :key="feat.title"
          class="p-8 rounded-2xl border border-border/70 bg-card/80 backdrop-blur-sm shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 group relative flex flex-col justify-between space-y-6"
        >
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div class="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <component :is="feat.icon" class="w-6 h-6" />
              </div>
              <span class="text-xs font-semibold px-3 py-1 rounded-full" :class="feat.badgeColor">
                {{ feat.tag }}
              </span>
            </div>

            <h3 class="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
              {{ feat.title }}
            </h3>

            <p class="text-muted-foreground leading-relaxed text-sm sm:text-base">
              {{ feat.description }}
            </p>
          </div>

          <div class="pt-4 flex items-center gap-2 text-sm font-semibold text-primary cursor-pointer group-hover:translate-x-1 transition-transform">
            <span>Pelajari Selengkapnya</span>
            <ArrowRight class="w-4 h-4" />
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
