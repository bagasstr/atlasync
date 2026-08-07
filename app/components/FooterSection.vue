<script setup lang="ts">
import { ArrowRight, Shield, Heart } from '@lucide/vue'
</script>

<template>
  <footer class="bg-card border-t border-border/60 pt-16 pb-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-border/50">
        <!-- Brand Info -->
        <div class="space-y-4 md:col-span-1">
          <div class="flex items-center gap-2">
            <span class="font-extrabold text-2xl tracking-tight text-foreground"
              >ATLASYNC</span
            >
          </div>
          <p class="text-sm text-muted-foreground leading-relaxed">
            Platform manajemen marketplace omnichannel terdepan di Indonesia
            untuk Tokopedia, TikTok Shop, & Shopee.
          </p>
        </div>

        <!-- Links Column 1: Produk -->
        <div class="space-y-3">
          <h4
            class="text-sm font-bold text-foreground uppercase tracking-wider">
            Produk
          </h4>
          <ul class="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="#" class="hover:text-primary transition-colors"
                >Auto-Sync Stok</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-primary transition-colors"
                >Cetak Resi Massal</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-primary transition-colors"
                >Kalkulator Net Profit</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-primary transition-colors"
                >Price Engine Rule</a
              >
            </li>
          </ul>
        </div>

        <!-- Links Column 2: Solusi Marketplace -->
        <div class="space-y-3">
          <h4
            class="text-sm font-bold text-foreground uppercase tracking-wider">
            Integrasi
          </h4>
          <ul class="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="#" class="hover:text-primary transition-colors"
                >Tokopedia Seller Center</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-primary transition-colors"
                >TikTok Shop Partner</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-primary transition-colors"
                >Shopee Open API</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-primary transition-colors"
                >Lazada (Coming Soon)</a
              >
            </li>
          </ul>
        </div>

        <!-- Links Column 3: Perusahaan -->
        <div class="space-y-3">
          <h4
            class="text-sm font-bold text-foreground uppercase tracking-wider">
            Perusahaan
          </h4>
          <ul class="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="#" class="hover:text-primary transition-colors"
                >Tentang Kami</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-primary transition-colors"
                >Blog & Edukasi Seller</a
              >
            </li>
            <li>
              <NuxtLink to="/privacy" class="hover:text-primary transition-colors"
                >Kebijakan Privasi</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/terms" class="hover:text-primary transition-colors"
                >Syarat & Ketentuan</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div
        class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>© 2026 ATLASYNC Technologies Inc. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
