<script setup lang="ts">
import { ArrowLeft, Shield, Lock, Eye, Database, Server, RefreshCw, Mail } from '@lucide/vue'

useHead({
  title: 'Kebijakan Privasi - Atlasync',
  meta: [
    { name: 'description', content: 'Kebijakan Privasi dan Perlindungan Data Pengguna Platform Atlasync.' }
  ]
})

const lastUpdated = '7 Agustus 2026'

const sections = [
  { id: 'pengumpulan-data', title: '1. Informasi Yang Kami Kumpulkan' },
  { id: 'penggunaan-data', title: '2. Penggunaan Informasi' },
  { id: 'keamanan-data', title: '3. Keamanan & Enkripsi Data' },
  { id: 'penyimpanan-data', title: '4. Penyimpanan & Akses API' },
  { id: 'hak-pengguna', title: '5. Hak-Hak Pengguna' },
  { id: 'cookie-teknologi', title: '6. Cookie & Pelacakan' },
  { id: 'hubungi-kami', title: '7. Hubungi Tim Privasi' },
]
</script>

<template>
  <div class="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-10">
    <!-- Header Banner -->
    <div class="relative overflow-hidden rounded-3xl bg-card border border-border/70 p-8 sm:p-12 shadow-xl">
      <div class="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div class="relative z-10 space-y-4">
        <NuxtLink to="/" class="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline transition-all mb-2">
          <ArrowLeft class="w-4 h-4" /> Kembali ke Beranda
        </NuxtLink>

        <div class="flex items-center gap-3">
          <div class="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
            <Shield class="w-6 h-6" />
          </div>
          <div>
            <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Kebijakan Privasi
            </h1>
            <p class="text-xs text-muted-foreground mt-1 flex items-center gap-1.5">
              <RefreshCw class="w-3.5 h-3.5" /> Terakhir diperbarui: {{ lastUpdated }}
            </p>
          </div>
        </div>

        <p class="text-sm text-muted-foreground leading-relaxed max-w-3xl pt-2">
          Privasi Anda sangat penting bagi kami. Kebijakan Privasi ini menjelaskan bagaimana Atlasync mengumpulkan, mengelola, mengenkripsi, dan melindungi data pribadi serta token akses marketplace Anda.
        </p>
      </div>
    </div>

    <!-- Main Content Layout -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <!-- Sidebar Navigation -->
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

      <!-- Content Sections -->
      <div class="lg:col-span-8 space-y-8 text-sm text-foreground/90 leading-relaxed">
        <section id="pengumpulan-data" class="p-6 rounded-2xl bg-card border border-border/50 space-y-3">
          <h2 class="text-lg font-bold text-foreground flex items-center gap-2">
            <Database class="w-5 h-5 text-emerald-500" /> 1. Informasi Yang Kami Kumpulkan
          </h2>
          <p class="text-muted-foreground text-xs sm:text-sm">
            Kami mengumpulkan jenis data berikut untuk mengoperasikan layanan manajemen marketplace secara efektif:
          </p>
          <ul class="list-disc pl-5 space-y-2 text-xs sm:text-sm text-muted-foreground">
            <li><strong class="text-foreground">Informasi Akun:</strong> Nama, alamat email seller, nomor telepon, dan nama toko.</li>
            <li><strong class="text-foreground">Data Kredensial & Otorisasi API:</strong> Token Akses API terenkripsi (*OAuth Access Tokens*) dari marketplace yang disambungkan (Tokopedia, TikTok Shop, Shopee).</li>
            <li><strong class="text-foreground">Data Operasional Toko:</strong> Daftar katalog produk, stok inventaris, rincian transaksi pesanan, dan alamat pengiriman pembeli untuk pemrosesan order.</li>
          </ul>
        </section>

        <section id="penggunaan-data" class="p-6 rounded-2xl bg-card border border-border/50 space-y-3">
          <h2 class="text-lg font-bold text-foreground flex items-center gap-2">
            <Eye class="w-5 h-5 text-emerald-500" /> 2. Penggunaan Informasi
          </h2>
          <p class="text-muted-foreground text-xs sm:text-sm">
            Data Anda hanya digunakan secara khusus untuk keperluan operasional berikut:
          </p>
          <ul class="list-disc pl-5 space-y-2 text-xs sm:text-sm text-muted-foreground">
            <li>Menjalankan sinkronisasi kuantitas stok otomatis secara real-time antar marketplace.</li>
            <li>Menampilkan agregasi analisa penjualan dan laporan inventaris pada dashboard Anda.</li>
            <li>Mengirimkan notifikasi stok menipis (*low stock alert*) atau update sistem.</li>
            <li><strong class="text-foreground">Kami TIDAK PERNAH dan tidak akan pernah menjual data bisnis atau data pelanggan Anda kepada pihak ketiga mana pun.</strong></li>
          </ul>
        </section>

        <section id="keamanan-data" class="p-6 rounded-2xl bg-card border border-border/50 space-y-3">
          <h2 class="text-lg font-bold text-foreground flex items-center gap-2">
            <Lock class="w-5 h-5 text-emerald-500" /> 3. Keamanan & Enkripsi Data
          </h2>
          <p class="text-muted-foreground text-xs sm:text-sm">
            Keamanan data seller adalah prioritas tertinggi Atlasync. Kami menerapkan tolok ukur keamanan standar perbankan:
          </p>
          <ul class="list-disc pl-5 space-y-2 text-xs sm:text-sm text-muted-foreground">
            <li>Semua token API dan data sensitif dienkripsi menggunakan standar industri <strong class="text-foreground">AES-256</strong> saat dalam penyimpanan (*at-rest*).</li>
            <li>Seluruh komunikasi data antara server Atlasync, pengguna, dan API Marketplace dikirimkan melalui saluran aman berenkripsi <strong class="text-foreground">SSL/TLS 1.3</strong>.</li>
          </ul>
        </section>

        <section id="penyimpanan-data" class="p-6 rounded-2xl bg-card border border-border/50 space-y-3">
          <h2 class="text-lg font-bold text-foreground flex items-center gap-2">
            <Server class="w-5 h-5 text-emerald-500" /> 4. Penyimpanan & Akses API
          </h2>
          <p class="text-muted-foreground text-xs sm:text-sm">
            Atlasync hanya menyimpan data transaksi yang diperlukan untuk pencatatan riwayat sinkronisasi. Anda berhak mencabut otorisasi toko (*Revoke API Access*) kapan saja langsung dari dashboard marketplace Anda, dan Atlasync akan secara otomatis menghapus token otorisasi terkait dari database kami.
          </p>
        </section>

        <section id="hak-pengguna" class="p-6 rounded-2xl bg-card border border-border/50 space-y-3">
          <h2 class="text-lg font-bold text-foreground">5. Hak-Hak Pengguna</h2>
          <p class="text-muted-foreground text-xs sm:text-sm">
            Sebagai pengguna, Anda memiliki hak penuh untuk mengakses, memperbarui, meminta ekspor data toko Anda, atau mengajukan pemusnahan total akun (*Account Deletion*) beserta riwayat data yang tersimpan di Atlasync.
          </p>
        </section>

        <section id="cookie-teknologi" class="p-6 rounded-2xl bg-card border border-border/50 space-y-3">
          <h2 class="text-lg font-bold text-foreground">6. Cookie & Pelacakan Sesi</h2>
          <p class="text-muted-foreground text-xs sm:text-sm">
            Atlasync menggunakan *essential cookies* dan token sesi aman (such as JWT/HTTP-Only Cookies) hanya untuk mengautentikasi status masuk akun Anda dan menyimpan preferensi tampilan (seperti Dark/Light mode).
          </p>
        </section>

        <section id="hubungi-kami" class="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-3">
          <h2 class="text-lg font-bold text-foreground flex items-center gap-2">
            <Mail class="w-5 h-5 text-emerald-500" /> 7. Hubungi Tim Data Protection
          </h2>
          <p class="text-muted-foreground text-xs sm:text-sm">
            Jika Anda memiliki pertanyaan, kendala, atau permintaan mengenai perlindungan data pribadi dan privasi di Atlasync, silakan hubungi Data Protection Officer (DPO) kami di:
          </p>
          <p class="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            Email: privacy@atlasync.com
          </p>
        </section>
      </div>
    </div>
  </div>
</template>
