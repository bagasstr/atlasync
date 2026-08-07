<script setup lang="ts">
import { ref } from 'vue'
import {
  ArrowRight,
  Play,
  CheckCircle2,
  Zap,
  TrendingUp,
  RefreshCw,
  ShoppingBag,
  Layers,
  Sparkles,
  ShieldCheck,
  Building2,
  Store
} from '@lucide/vue'
import Button from './ui/button/Button.vue'

const activeTab = ref('all')

const channelStats = [
  { name: 'Tokopedia', orders: 1248, revenue: '146.500.000', color: 'bg-emerald-500', textColor: 'text-emerald-600 dark:text-emerald-400', share: '42%' },
  { name: 'TikTok Shop', orders: 1092, revenue: '132.800.000', color: 'bg-slate-900 dark:bg-white', textColor: 'text-slate-900 dark:text-white', share: '38%' },
  { name: 'Shopee', orders: 505, revenue: '69.620.000', color: 'bg-orange-500', textColor: 'text-orange-600 dark:text-orange-400', share: '20%' },
]

const recentOrders = [
  { id: 'ORD-8921', channel: 'Tokopedia', items: '2x Wireless Earbuds Pro', price: 'Rp 1.198.000', time: '1 menit lalu', status: 'Auto-Synced' },
  { id: 'ORD-8920', channel: 'TikTok Shop', items: '1x Mechanical Keyboard RGB', price: 'Rp 750.000', time: '3 menit lalu', status: 'Auto-Synced' },
  { id: 'ORD-8919', channel: 'Shopee', items: '3x Premium Cotton T-Shirt', price: 'Rp 447.000', time: '7 menit lalu', status: 'Auto-Synced' },
]
</script>

<template>
  <section class="relative overflow-hidden pt-12 pb-24 lg:pt-16 lg:pb-32 bg-background">
    <!-- Ambient Background Glows -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/15 blur-[120px] rounded-full pointer-events-none -z-10"></div>
    <div class="absolute top-10 right-10 w-72 h-72 bg-primary/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Top Announcement Badge -->
      <div class="flex justify-center mb-8">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:bg-primary/10 cursor-pointer group shadow-sm">
          <span class="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
          <span class="flex items-center gap-1.5 text-xs sm:text-sm font-medium">
            <Sparkles class="w-4 h-4 text-primary" />
            Atlasync 2.0 Real-time Omnichannel Engine
          </span>
          <ArrowRight class="w-3.5 h-3.5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
        </div>
      </div>

      <!-- Main Headline & Subtitle -->
      <div class="text-center max-w-4xl mx-auto space-y-6">
        <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.15]">
          Kelola Semua Marketplace Dalam
          <span class="relative inline-block text-primary">
            Satu Dashboard
            <svg class="absolute -bottom-2 left-0 w-full h-3 text-primary/30" viewBox="0 0 100 12" preserveAspectRatio="none">
              <path d="M0,0 Q50,12 100,0" stroke="currentColor" stroke-width="4" fill="none" stroke-linecap="round" />
            </svg>
          </span>
        </h1>

        <p class="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto font-normal leading-relaxed">
          Sinkronisasi stok otomatis, manajemen pesanan terpusat, dan analitik penjualan real-time untuk <span class="font-semibold text-foreground">Tokopedia</span>, <span class="font-semibold text-foreground">TikTok Shop</span>, & <span class="font-semibold text-foreground">Shopee</span> tanpa takut oversold.
        </p>

        <!-- CTA Action Group -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button size="lg" class="w-full sm:w-auto h-12 px-8 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] gap-2">
            Coba Gratis 14 Hari
            <ArrowRight class="w-5 h-5" />
          </Button>

          <Button variant="outline" size="lg" class="w-full sm:w-auto h-12 px-7 text-base font-medium border-border/80 bg-background/80 hover:bg-accent hover:text-accent-foreground rounded-xl backdrop-blur-sm gap-2">
            <Play class="w-4 h-4 fill-current text-primary" />
            Tonton Demo 2 Menit
          </Button>
        </div>

        <!-- Trust Badges / Quick Highlights -->
        <div class="pt-6 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs sm:text-sm text-muted-foreground font-medium">
          <div class="flex items-center gap-2">
            <CheckCircle2 class="w-4 h-4 text-primary" />
            <span>Tanpa Kartu Kredit</span>
          </div>
          <div class="flex items-center gap-2">
            <CheckCircle2 class="w-4 h-4 text-primary" />
            <span>Setup Kurang dari 3 Menit</span>
          </div>
          <div class="flex items-center gap-2">
            <CheckCircle2 class="w-4 h-4 text-primary" />
            <span>Resmi API Partner</span>
          </div>
        </div>

      </div>

      <!-- Live Dashboard Preview (Non-AI Slop, Functional Design) -->
      <div class="mt-16 lg:mt-20 relative max-w-5xl mx-auto">

        <!-- Outer Glowing Accent Border -->
        <div class="absolute -inset-1.5 bg-gradient-to-r from-primary/30 via-primary/10 to-primary/30 rounded-3xl blur-xl opacity-75"></div>

        <!-- Dashboard Frame Mockup -->
        <div class="relative rounded-2xl border border-border/80 bg-card/95 backdrop-blur-xl shadow-2xl overflow-hidden">
          
          <!-- Mock Header Bar -->
          <div class="px-6 py-4 border-b border-border/60 bg-muted/40 flex items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <div class="flex gap-1.5">
                <span class="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span class="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span class="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              </div>
              <span class="text-xs font-mono text-muted-foreground hidden sm:inline-block">atlasync.id/dashboard/omnichannel</span>
            </div>

            <!-- Live Status Indicator -->
            <div class="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>All 3 Channels Synced</span>
            </div>
          </div>

          <!-- Mock Dashboard Body -->
          <div class="p-6 sm:p-8 space-y-8">
            
            <!-- Metric Summary Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <!-- Metric 1: Total Revenue -->
              <div class="p-5 rounded-xl border border-border/60 bg-background/60 backdrop-blur-sm space-y-2 hover:border-primary/40 transition-colors">
                <div class="flex items-center justify-between text-muted-foreground text-xs font-medium">
                  <span>Total Omset (Bulan Ini)</span>
                  <div class="p-1.5 rounded-lg bg-primary/10 text-primary">
                    <TrendingUp class="w-4 h-4" />
                  </div>
                </div>
                <div class="flex items-baseline gap-2">
                  <span class="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">Rp 348.920.000</span>
                </div>
                <div class="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                  <span>+18.4% vs bulan lalu</span>
                </div>
              </div>

              <!-- Metric 2: Orders Synced -->
              <div class="p-5 rounded-xl border border-border/60 bg-background/60 backdrop-blur-sm space-y-2 hover:border-primary/40 transition-colors">
                <div class="flex items-center justify-between text-muted-foreground text-xs font-medium">
                  <span>Total Pesanan Masuk</span>
                  <div class="p-1.5 rounded-lg bg-primary/10 text-primary">
                    <ShoppingBag class="w-4 h-4" />
                  </div>
                </div>
                <div class="flex items-baseline gap-2">
                  <span class="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">2,845 Order</span>
                </div>
                <div class="flex items-center gap-1.5 text-xs text-primary font-medium">
                  <RefreshCw class="w-3 h-3 animate-spin" />
                  <span>Auto-processed 100%</span>
                </div>
              </div>

              <!-- Metric 3: Zero Oversold Protection -->
              <div class="p-5 rounded-xl border border-border/60 bg-background/60 backdrop-blur-sm space-y-2 hover:border-primary/40 transition-colors">
                <div class="flex items-center justify-between text-muted-foreground text-xs font-medium">
                  <span>Proteksi Selisih Stok</span>
                  <div class="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-500">
                    <ShieldCheck class="w-4 h-4" />
                  </div>
                </div>
                <div class="flex items-baseline gap-2">
                  <span class="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 tracking-tight">0 Oversold</span>
                </div>
                <div class="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span>Stok 1,420 SKU tersinkron otomatis</span>
                </div>
              </div>

            </div>

            <!-- Marketplace Channels Distribution & Live Orders -->
            <div class="grid grid-cols-1 lg:grid-cols-5 gap-6">
              
              <!-- Channel Performance Progress (3 Cols) -->
              <div class="lg:col-span-3 p-5 rounded-xl border border-border/60 bg-background/60 space-y-4">
                <div class="flex items-center justify-between pb-2 border-b border-border/40">
                  <h3 class="text-sm font-bold text-foreground flex items-center gap-2">
                    <Layers class="w-4 h-4 text-primary" />
                    Kontribusi Penjualan Per Channel
                  </h3>
                  <span class="text-xs font-medium text-muted-foreground">Real-time Data</span>
                </div>

                <div class="space-y-4 pt-1">
                  <div v-for="ch in channelStats" :key="ch.name" class="space-y-1.5">
                    <div class="flex justify-between items-center text-xs font-medium">
                      <span class="flex items-center gap-2 font-semibold text-foreground">
                        <span class="w-2.5 h-2.5 rounded-full" :class="ch.color"></span>
                        {{ ch.name }}
                      </span>
                      <span class="text-muted-foreground">Rp {{ ch.revenue }} ({{ ch.share }})</span>
                    </div>
                    <div class="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div class="h-2 rounded-full transition-all duration-500" :class="ch.color" :style="{ width: ch.share }"></div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Live Order Stream (2 Cols) -->
              <div class="lg:col-span-2 p-5 rounded-xl border border-border/60 bg-background/60 space-y-4">
                <div class="flex items-center justify-between pb-2 border-b border-border/40">
                  <h3 class="text-sm font-bold text-foreground flex items-center gap-2">
                    <Zap class="w-4 h-4 text-primary" />
                    Pesanan Terkini
                  </h3>
                  <span class="text-xs text-emerald-500 font-mono">Live</span>
                </div>

                <div class="space-y-3">
                  <div v-for="ord in recentOrders" :key="ord.id" class="p-2.5 rounded-lg border border-border/40 bg-card/60 flex items-center justify-between gap-3 text-xs">
                    <div class="space-y-0.5 min-w-0">
                      <div class="flex items-center gap-2">
                        <span class="font-bold text-foreground truncate">{{ ord.channel }}</span>
                        <span class="text-[10px] text-muted-foreground font-mono">{{ ord.id }}</span>
                      </div>
                      <p class="text-muted-foreground truncate text-[11px]">{{ ord.items }}</p>
                    </div>
                    <div class="text-right shrink-0">
                      <div class="font-bold text-foreground">{{ ord.price }}</div>
                      <div class="text-[10px] text-emerald-500 font-medium">{{ ord.status }}</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      <!-- Partner E-Commerce Logos / Supported Marketplaces -->
      <div class="mt-16 text-center space-y-6">
        <p class="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Terintegrasi Langsung Dengan Official API Marketplace Indonesia
        </p>
        
        <div class="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-80 grayscale hover:grayscale-0 transition-all duration-300">
          <div class="flex items-center gap-2.5 font-bold text-lg text-emerald-600 dark:text-emerald-400">
            <Store class="w-6 h-6" />
            <span>Tokopedia</span>
          </div>

          <div class="flex items-center gap-2.5 font-bold text-lg text-foreground">
            <Building2 class="w-6 h-6" />
            <span>TikTok Shop</span>
          </div>

          <div class="flex items-center gap-2.5 font-bold text-lg text-orange-600 dark:text-orange-400">
            <ShoppingBag class="w-6 h-6" />
            <span>Shopee</span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
