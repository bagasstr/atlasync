<script setup lang="ts">
import { ref } from 'vue'
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
  Store,
  Building2,
  ShoppingBag,
  CheckCircle2,
} from '@lucide/vue'
import Button from '@/components/ui/button/Button.vue'

// Set page layout (or default layout)
definePageMeta({
  layout: false,
})

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const rememberMe = ref(false)
const isLoading = ref(false)

const handleLogin = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 1500)
}
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
    <!-- Ambient Background Glows -->
    <div
      class="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 blur-[140px] rounded-full pointer-events-none -z-10"></div>
    <div
      class="absolute bottom-10 right-1/4 w-80 h-80 bg-primary/15 blur-[120px] rounded-full pointer-events-none -z-10"></div>

    <div
      class="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-12 rounded-3xl border border-border/70 bg-card/80 backdrop-blur-xl shadow-2xl overflow-hidden">
      <!-- Left Column: Branding & Value Showcase (Hidden on Mobile) -->
      <div
        class="hidden lg:flex lg:col-span-5 p-8 bg-muted/40 border-r border-border/50 flex-col justify-between relative overflow-hidden">
        <div class="space-y-6 relative z-10">
          <NuxtLink to="/" class="flex items-center gap-2">
            <span class="font-extrabold text-2xl tracking-tight text-foreground"
              >ATLASYNC</span
            >
          </NuxtLink>

          <div class="space-y-3 pt-4">
            <h2 class="text-2xl font-bold text-foreground leading-snug">
              Satu Pintu Untuk Kelola Semua Marketplace
            </h2>
            <p class="text-sm text-muted-foreground leading-relaxed">
              Masuk ke akun Anda dan pantau ribuan stok & pesanan real-time dari
              Tokopedia, TikTok Shop, & Shopee.
            </p>
          </div>

          <!-- Feature Highlights -->
          <div class="space-y-3 pt-2 text-xs font-medium text-foreground">
            <div class="flex items-center gap-2.5">
              <div class="p-1 rounded-full bg-emerald-500/10 text-emerald-500">
                <CheckCircle2 class="w-3.5 h-3.5" />
              </div>
              <span>Sync stok 100% otomatis 24/7</span>
            </div>
            <div class="flex items-center gap-2.5">
              <div class="p-1 rounded-full bg-emerald-500/10 text-emerald-500">
                <CheckCircle2 class="w-3.5 h-3.5" />
              </div>
              <span>Bebas risiko selisih & oversold</span>
            </div>
            <div class="flex items-center gap-2.5">
              <div class="p-1 rounded-full bg-emerald-500/10 text-emerald-500">
                <CheckCircle2 class="w-3.5 h-3.5" />
              </div>
              <span>Enkripsi API Keamanan Standar Bank</span>
            </div>
          </div>
        </div>

        <!-- Marketplace Integration Logos -->
        <div class="pt-8 border-t border-border/40 relative z-10">
          <p
            class="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Official API Partner
          </p>
          <div
            class="flex items-center gap-5 text-sm font-bold text-muted-foreground">
            <span
              class="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
              <Store class="w-4 h-4" /> Tokopedia
            </span>
            <span class="flex items-center gap-1.5 text-foreground">
              <Building2 class="w-4 h-4" /> TikTok
            </span>
            <span
              class="flex items-center gap-1.5 text-orange-600 dark:text-orange-400">
              <ShoppingBag class="w-4 h-4" /> Shopee
            </span>
          </div>
        </div>
      </div>

      <!-- Right Column: Login Form -->
      <div
        class="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center space-y-8">
        <!-- Header -->
        <div class="space-y-2 text-center sm:text-left">
          <h1
            class="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Selamat Datang Kembali
          </h1>
          <p class="text-sm text-muted-foreground">
            Masukkan kredensial akun Atlasync Anda untuk melanjutkan
          </p>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleLogin" class="space-y-5">
          <!-- Email Input -->
          <div class="space-y-2">
            <label
              for="email"
              class="text-xs font-semibold text-foreground uppercase tracking-wider block"
              >Email Seller</label
            >
            <div class="relative">
              <div
                class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground">
                <Mail class="w-4 h-4" />
              </div>
              <input
                id="email"
                v-model="email"
                type="email"
                required
                placeholder="nama@toko.com"
                class="w-full pl-10 pr-4 py-3 bg-muted/30 border border-border/70 rounded-xl text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
            </div>
          </div>

          <!-- Password Input -->
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="text-xs font-semibold text-foreground uppercase tracking-wider block"
                >Password</label
              >
              <NuxtLink
                to="/forgot-password"
                class="text-xs font-medium text-primary hover:underline"
                >Lupa Password?</NuxtLink
              >
            </div>
            <div class="relative">
              <div
                class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground">
                <Lock class="w-4 h-4" />
              </div>
              <input
                id="password"
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                required
                placeholder="••••••••"
                class="w-full pl-10 pr-10 py-3 bg-muted/30 border border-border/70 rounded-xl text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute inset-y-0 right-0 pr-3.5 flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <EyeOff v-if="showPassword" class="w-4 h-4" />
                <Eye v-else class="w-4 h-4" />
              </button>
            </div>
          </div>

          <!-- Remember Me Checkbox -->
          <div class="flex items-center justify-between pt-1">
            <label class="flex items-center gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                v-model="rememberMe"
                class="w-4 h-4 rounded border-border text-primary focus:ring-primary/20 accent-primary cursor-pointer" />
              <span class="text-xs font-medium text-muted-foreground"
                >Ingat saya di perangkat ini</span
              >
            </label>
          </div>

          <!-- Submit Button -->
          <Button
            type="submit"
            size="lg"
            :disabled="isLoading"
            class="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl shadow-lg shadow-primary/25 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] gap-2 mt-2">
            <span v-if="!isLoading" class="flex items-center gap-2">
              Masuk Ke Dashboard
              <ArrowRight class="w-4 h-4" />
            </span>
            <span v-else class="flex items-center gap-2">
              <span
                class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Memproses...
            </span>
          </Button>
        </form>

        <!-- Divider -->
        <div class="relative flex items-center justify-center my-4">
          <div class="border-t border-border/60 w-full"></div>
          <span
            class="bg-card px-3 text-xs text-muted-foreground font-medium uppercase tracking-wider absolute"
            >Atau</span
          >
        </div>

        <!-- Footer Callout -->
        <p class="text-center text-sm text-muted-foreground">
          Belum punya akun Atlasync?
          <NuxtLink
            to="/register"
            class="font-bold text-primary hover:underline"
            >Daftar Gratis 14 Hari</NuxtLink
          >
        </p>
      </div>
    </div>
  </div>
</template>
