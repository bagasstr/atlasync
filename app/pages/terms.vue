<script setup lang="ts">
import { ArrowLeft, ShieldCheck, FileText, Scale, Lock, Clock, HelpCircle } from '@lucide/vue'

useHead({
  title: 'Syarat & Ketentuan - Atlasync',
  meta: [
    { name: 'description', content: 'Syarat dan Ketentuan Penggunaan Layanan Manajemen Marketplace Atlasync.' }
  ]
})

const lastUpdated = '7 Agustus 2026'

const sections = [
  { id: 'ketentuan-umum', title: '1. Ketentuan Umum' },
  { id: 'akun-keamanan', title: '2. Akun & Keamanan Seller' },
  { id: 'integrasi-api', title: '3. Integrasi API Marketplace' },
  { id: 'layanan-pembayaran', title: '4. Biaya & Langganan' },
  { id: 'batasan-tanggung-jawab', title: '5. Batasan Tanggung Jawab' },
  { id: 'pemutusan-layanan', title: '6. Pemutusan Layanan' },
  { id: 'perubahan-ketentuan', title: '7. Perubahan Ketentuan' },
  { id: 'kontak-bantuan', title: '8. Kontak & Bantuan' },
]
</script>

<template>
  <div class="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-10">
    <!-- Header Banner -->
    <div class="relative overflow-hidden rounded-3xl bg-card border border-border/70 p-8 sm:p-12 shadow-xl">
      <div class="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div class="relative z-10 space-y-4">
        <NuxtLink to="/" class="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline transition-all mb-2">
          <ArrowLeft class="w-4 h-4" /> Kembali ke Beranda
        </NuxtLink>

        <div class="flex items-center gap-3">
          <div class="p-3 rounded-2xl bg-primary/10 text-primary border border-primary/20">
            <Scale class="w-6 h-6" />
          </div>
          <div>
            <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Syarat & Ketentuan Penggunaan
            </h1>
            <p class="text-xs text-muted-foreground mt-1 flex items-center gap-1.5">
              <Clock class="w-3.5 h-3.5" /> Terakhir diperbarui: {{ lastUpdated }}
            </p>
          </div>
        </div>

        <p class="text-sm text-muted-foreground leading-relaxed max-w-3xl pt-2">
          Selamat datang di Atlasync. Harap baca Syarat dan Ketentuan berikut secara saksama sebelum menggunakan platform otomatisasi & manajemen multi-marketplace kami.
        </p>
      </div>
    </div>

    <!-- Main Content Layout -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <!-- Quick Navigation Sidebar (Desktop) -->
      <div class="hidden lg:block lg:col-span-4 sticky top-24 space-y-4 p-5 rounded-2xl bg-card/60 border border-border/60 backdrop-blur-md">
        <h3 class="text-xs font-bold text-foreground uppercase tracking-wider px-2">Daftar Isi</h3>
        <nav class="space-y-1">
          <a 
            v-for="item in sections" 
            :key="item.id" 
            :href="`#${item.id}`"
            class="block px-3 py-2 rounded-xl text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
          >
            {{ item.title }}
          </a>
        </nav>
      </div>

      <!-- Article Sections -->
      <div class="lg:col-span-8 space-y-8 text-sm text-foreground/90 leading-relaxed">
        <section id="ketentuan-umum" class="p-6 rounded-2xl bg-card border border-border/50 space-y-3">
          <h2 class="text-lg font-bold text-foreground flex items-center gap-2">
            <FileText class="w-5 h-5 text-primary" /> 1. Ketentuan Umum
          </h2>
          <p class="text-muted-foreground text-xs sm:text-sm">
            Dengan mendaftar, mengakses, atau menggunakan layanan Atlasync ("Platform"), Anda menyatakan bahwa Anda telah membaca, memahami, dan menyetujui untuk terikat oleh Syarat dan Ketentuan ini. Layanan ini disediakan untuk membantu Seller mengelola integrasi stok dan pesanan lintas toko online (Tokopedia, TikTok Shop, Shopee, dll).
          </p>
        </section>

        <section id="akun-keamanan" class="p-6 rounded-2xl bg-card border border-border/50 space-y-3">
          <h2 class="text-lg font-bold text-foreground flex items-center gap-2">
            <Lock class="w-5 h-5 text-primary" /> 2. Akun & Keamanan Seller
          </h2>
          <ul class="list-disc pl-5 space-y-2 text-xs sm:text-sm text-muted-foreground">
            <li>Pengguna bertanggung jawab penuh untuk menjaga kerahasiaan kredensial akun dan kata sandi Atlasync Anda.</li>
            <li>Anda wajib memberikan informasi bisnis dan akun yang akurat dan sah saat pendaftaran.</li>
            <li>Atlasync tidak bertanggung jawab atas kerugian akibat akses tidak sah terhadap akun Anda yang disebabkan oleh kelalaian menjaga kredensial pribadi.</li>
          </ul>
        </section>

        <section id="integrasi-api" class="p-6 rounded-2xl bg-card border border-border/50 space-y-3">
          <h2 class="text-lg font-bold text-foreground flex items-center gap-2">
            <ShieldCheck class="w-5 h-5 text-primary" /> 3. Integrasi API Marketplace
          </h2>
          <p class="text-muted-foreground text-xs sm:text-sm">
            Atlasync terhubung ke toko marketplace Anda melalui API Resmi (*Official Open API*). Dengan mengizinkan otorisasi toko:
          </p>
          <ul class="list-disc pl-5 space-y-2 text-xs sm:text-sm text-muted-foreground">
            <li>Anda memberikan izin kepada Atlasync untuk mengambil data produk, kuantitas stok, dan status pesanan demi kelancaran sinkronisasi otomatis.</li>
            <li>Atlasync tunduk pada pembatasan dan kebijakan batasan (*rate limit*) yang ditentukan oleh masing-masing penyedia API Marketplace (Tokopedia, TikTok Shop, Shopee).</li>
          </ul>
        </section>

        <section id="layanan-pembayaran" class="p-6 rounded-2xl bg-card border border-border/50 space-y-3">
          <h2 class="text-lg font-bold text-foreground">4. Biaya & Langganan</h2>
          <p class="text-muted-foreground text-xs sm:text-sm">
            Atlasync menyediakan versi uji coba gratis (Free Trial 14 Hari) serta paket langganan berbayar bulanan atau tahunan. Semua pembayaran berlangganan bersifat final dan tidak dapat dikembalikan (*non-refundable*), kecuali dinyatakan lain berdasarkan diskresi manajemen Atlasync.
          </p>
        </section>

        <section id="batasan-tanggung-jawab" class="p-6 rounded-2xl bg-card border border-border/50 space-y-3">
          <h2 class="text-lg font-bold text-foreground">5. Batasan Tanggung Jawab</h2>
          <p class="text-muted-foreground text-xs sm:text-sm">
            Atlasync berusaha menjaga ketersediaan sistem hingga 99.9% uptime. Namun, Atlasync tidak bertanggung jawab atas keterlambatan sinkronisasi yang disebabkan oleh gangguan server pihak ketiga (Marketplace), kendala jaringan penyedia internet pengguna, atau pemeliharaan sistem terencana.
          </p>
        </section>

        <section id="pemutusan-layanan" class="p-6 rounded-2xl bg-card border border-border/50 space-y-3">
          <h2 class="text-lg font-bold text-foreground">6. Pemutusan Layanan</h2>
          <p class="text-muted-foreground text-xs sm:text-sm">
            Kami berhak untuk membekukan atau menghentikan akses akun Anda sewaktu-waktu tanpa pemberitahuan sebelumnya jika terbukti terdapat indikasi kecurangan, tindakan ilegal, pemalsuan data, atau pelanggaran terhadap Syarat dan Ketentuan ini.
          </p>
        </section>

        <section id="perubahan-ketentuan" class="p-6 rounded-2xl bg-card border border-border/50 space-y-3">
          <h2 class="text-lg font-bold text-foreground">7. Perubahan Ketentuan</h2>
          <p class="text-muted-foreground text-xs sm:text-sm">
            Atlasync berhak memperbarui Syarat dan Ketentuan ini kapan saja. Perubahan akan berlaku segera setelah diumumkan melalui situs web ini. Penggunaan layanan secara berkelanjutan mengindikasikan persetujuan Anda terhadap ketentuan yang diperbarui.
          </p>
        </section>

        <section id="kontak-bantuan" class="p-6 rounded-2xl bg-primary/5 border border-primary/20 space-y-3">
          <h2 class="text-lg font-bold text-foreground flex items-center gap-2">
            <HelpCircle class="w-5 h-5 text-primary" /> 8. Bantuan & Pertanyaan
          </h2>
          <p class="text-muted-foreground text-xs sm:text-sm">
            Jika Anda memiliki pertanyaan mengenai Syarat & Ketentuan ini, silakan hubungi tim legal & support kami melalui email di <span class="font-semibold text-primary">legal@atlasync.com</span> atau WhatsApp Support resmi Atlasync.
          </p>
        </section>
      </div>
    </div>
  </div>
</template>
