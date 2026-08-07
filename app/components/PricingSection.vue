<script setup lang="ts">
import { ref } from 'vue'
import { Check, Sparkles, HelpCircle } from '@lucide/vue'
import Button from './ui/button/Button.vue'

const isAnnual = ref(true)

const plans = [
  {
    name: 'Starter',
    badge: 'Cocok Untuk Seller Pemula',
    monthlyPrice: 'Rp 199.000',
    annualPrice: 'Rp 149.000',
    description: 'Solusi ideal bagi toko kecil yang baru mengelola 2 toko online.',
    popular: false,
    features: [
      'Maksimal 2 Toko Marketplace',
      'Sync Stok Otomatis (Tiap 5 Menit)',
      'Hingga 500 Pesanan / Bulan',
      'Cetak Resi Massal Terpusat',
      'Dukungan Customer Care 24/7'
    ],
    buttonText: 'Mulai Trial 14 Hari',
    buttonVariant: 'outline'
  },
  {
    name: 'Professional',
    badge: 'Paling Populer untuk Fast Growth',
    monthlyPrice: 'Rp 499.000',
    annualPrice: 'Rp 399.000',
    description: 'Untuk toko berkembang yang membutuhkan sinkronisasi stok instan real-time.',
    popular: true,
    features: [
      'Hingga 10 Toko Marketplace (Tokopedia, TikTok, Shopee)',
      'Sync Stok Real-Time Milidetik',
      'Unlimited Pesanan / Bulan',
      'Kalkulator Net Profit & Biaya Admin',
      'Bulk Change Price & Promotion Engine',
      'Prioritas Customer Support Fast-Response'
    ],
    buttonText: 'Coba Pro 14 Hari Gratis',
    buttonVariant: 'default'
  },
  {
    name: 'Enterprise',
    badge: 'Untuk Brand & Multi-Gudang',
    monthlyPrice: 'Custom',
    annualPrice: 'Custom',
    description: 'Kebutuhan integrasi kustom ERP, multi-warehouse, & dedicated account manager.',
    popular: false,
    features: [
      'Unlimited Jumlah Toko & Channel',
      'Multi-Warehouse Inventory Sync',
      'Integrasi Custom API & ERP (SAP, Jurnal, Accurate)',
      'Dedicated Account Manager (SLA 99.9%)',
      'Training Karyawan & Onboarding Langsung'
    ],
    buttonText: 'Hubungi Tim Sales',
    buttonVariant: 'outline'
  }
]
</script>

<template>
  <section class="py-20 lg:py-32 bg-muted/20 border-t border-border/40 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4 mb-12">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
          Harga Transparan
        </div>

        <h2 class="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
          Pilihan Paket Tanpa Biaya Tersembunyi
        </h2>

        <p class="text-base sm:text-lg text-muted-foreground">
          Pilih paket yang sesuai dengan skala bisnis toko Anda. Batalkan kapan saja.
        </p>

        <!-- Annual Billing Toggle Switch -->
        <div class="flex items-center justify-center gap-4 pt-6">
          <span class="text-sm font-medium" :class="!isAnnual ? 'text-foreground font-bold' : 'text-muted-foreground'">Bayar Bulanan</span>
          
          <button 
            @click="isAnnual = !isAnnual"
            class="relative w-14 h-8 rounded-full bg-muted p-1 transition-colors border border-border focus:outline-none"
            :class="isAnnual ? 'bg-primary' : 'bg-muted'"
          >
            <span 
              class="block w-6 h-6 rounded-full bg-white transition-transform duration-200 shadow-md"
              :class="isAnnual ? 'translate-x-6' : 'translate-x-0'"
            ></span>
          </button>

          <span class="text-sm font-medium flex items-center gap-1.5" :class="isAnnual ? 'text-foreground font-bold' : 'text-muted-foreground'">
            Bayar Tahunan
            <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">Hemat 20%</span>
          </span>
        </div>
      </div>

      <!-- Pricing Cards Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        <div 
          v-for="plan in plans" 
          :key="plan.name"
          class="relative rounded-2xl p-8 border bg-card backdrop-blur-sm flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl"
          :class="plan.popular ? 'border-primary shadow-primary/10 ring-2 ring-primary/20 scale-[1.02]' : 'border-border/70 hover:border-primary/40'"
        >
          <!-- Popular Ribbon Badge -->
          <div v-if="plan.popular" class="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-md flex items-center gap-1">
            <Sparkles class="w-3.5 h-3.5" />
            {{ plan.badge }}
          </div>

          <div class="space-y-6">
            <div>
              <h3 class="text-2xl font-bold text-foreground">{{ plan.name }}</h3>
              <p class="text-sm text-muted-foreground mt-1 min-h-[40px]">{{ plan.description }}</p>
            </div>

            <!-- Price -->
            <div class="py-2 border-y border-border/50">
              <div class="flex items-baseline gap-1">
                <span class="text-4xl font-extrabold text-foreground">{{ isAnnual ? plan.annualPrice : plan.monthlyPrice }}</span>
                <span v-if="plan.monthlyPrice !== 'Custom'" class="text-sm text-muted-foreground font-medium">/bulan</span>
              </div>
              <p v-if="isAnnual && plan.monthlyPrice !== 'Custom'" class="text-xs text-primary font-medium mt-1">Ditagih tahunan (Lebih hemat)</p>
            </div>

            <!-- Features List -->
            <ul class="space-y-3 text-sm">
              <li v-for="ft in plan.features" :key="ft" class="flex items-start gap-3">
                <div class="p-0.5 rounded-full bg-emerald-500/10 text-emerald-500 shrink-0 mt-0.5">
                  <Check class="w-4 h-4" />
                </div>
                <span class="text-foreground/90 font-medium">{{ ft }}</span>
              </li>
            </ul>
          </div>

          <!-- Action Button -->
          <div class="pt-8">
            <Button 
              :variant="plan.popular ? 'default' : 'outline'" 
              size="lg" 
              class="w-full font-bold h-12 rounded-xl"
              :class="plan.popular ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25' : ''"
            >
              {{ plan.buttonText }}
            </Button>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
