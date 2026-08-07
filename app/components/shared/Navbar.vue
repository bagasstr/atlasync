<script setup lang="ts">
import { ref } from 'vue'
import {
  ChevronDown,
  Store,
  Building2,
  ShoppingBag,
  Sparkles,
} from '@lucide/vue'
import Button from '../ui/button/Button.vue'
import Separator from '../ui/separator/Separator.vue'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const isOpen = ref(false)
</script>

<template>
  <header
    class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md transition-all duration-200">
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      <!-- Brand Logo & Platform Dropdown -->
      <div class="flex items-center gap-x-8">
        <NuxtLink to="/" class="flex items-center gap-2 group">
          <span
            class="font-extrabold text-2xl tracking-tight text-foreground group-hover:text-primary transition-colors">
            ATLASYNC
          </span>
        </NuxtLink>

        <DropdownMenu v-model:open="isOpen">
          <DropdownMenuTrigger
            class="group flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all focus:outline-none">
            <span>Platform</span>
            <ChevronDown
              class="w-4 h-4 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="start"
            class="w-56 p-2 rounded-xl border border-border/70 bg-card/95 backdrop-blur-xl shadow-xl space-y-1">
            <DropdownMenuItem
              class="flex items-center gap-3 p-2.5 rounded-lg cursor-pointer hover:bg-emerald-500/10 hover:text-emerald-600 transition-colors">
              <Store class="w-4 h-4 text-emerald-500" />
              <div class="flex flex-col">
                <span class="font-bold text-sm">Tokopedia</span>
                <span class="text-[11px] text-muted-foreground"
                  >Official Seller Sync</span
                >
              </div>
            </DropdownMenuItem>

            <DropdownMenuItem
              class="flex items-center gap-3 p-2.5 rounded-lg cursor-pointer hover:bg-slate-500/10 transition-colors">
              <Building2 class="w-4 h-4 text-foreground" />
              <div class="flex flex-col">
                <span class="font-bold text-sm">TikTok Shop</span>
                <span class="text-[11px] text-muted-foreground"
                  >Live & Order Engine</span
                >
              </div>
            </DropdownMenuItem>

            <DropdownMenuItem
              class="flex items-center gap-3 p-2.5 rounded-lg cursor-pointer hover:bg-orange-500/10 hover:text-orange-600 transition-colors">
              <ShoppingBag class="w-4 h-4 text-orange-500" />
              <div class="flex flex-col">
                <span class="font-bold text-sm">Shopee</span>
                <span class="text-[11px] text-muted-foreground"
                  >Auto-Stock & Voucher</span
                >
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <!-- Navigation Links -->
      <nav class="hidden md:flex items-center gap-x-8">
        <NuxtLink
          to="#why-atlasync"
          class="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
          Why Atlasync
        </NuxtLink>
        <NuxtLink
          to="#pricing"
          class="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
          Pricing
        </NuxtLink>
        <NuxtLink
          to="#how-it-works"
          class="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
          How it Works
        </NuxtLink>
        <NuxtLink
          to="#about-us"
          class="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
          About Us
        </NuxtLink>
      </nav>

      <!-- Action Buttons -->
      <div class="flex items-center gap-x-6">
        <NuxtLink
          to="#free-try"
          class="text-sm font-medium text-foreground hover:text-primary underline underline-offset-8 decoration-primary/40 hover:decoration-primary transition-all cursor-pointer hidden sm:inline-block">
          Free Trial
        </NuxtLink>

        <Separator
          orientation="vertical"
          class="h-5 !self-center hidden sm:block" />

        <div class="flex items-center gap-x-3">
          <NuxtLink to="/login">
            <Button variant="ghost" size="sm" class="font-semibold text-sm px-4">
              Login
            </Button>
          </NuxtLink>
          <Button
            size="sm"
            class="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm px-5 shadow-md shadow-primary/20 rounded-lg transition-all hover:scale-[1.02]">
            Register
          </Button>
        </div>
      </div>
    </div>
  </header>
</template>
