<template>
  <nav
    class="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 flex justify-around items-center"
    :style="{ paddingBottom: 'env(safe-area-inset-bottom)' }"
  >
    <router-link
      v-for="item in navItems"
      :key="item.href"
      :to="item.href"
      class="flex flex-col items-center py-2"
      active-class="text-[#07a495]"
      exact-active-class="text-[#07a495]"
    >
      <component :is="item.icon" class="w-7 h-7 mb-1 text-[#07a495]" />
      <span class="text-xs font-semibold">{{ item.label }}</span>
    </router-link>
    <a href="/#jugadoras" class="flex flex-col items-center py-2">
      <UserCircle class="w-7 h-7 mb-1 text-[#07a495]" />
      <span class="text-xs font-semibold">Portal Jugadoras</span>
    </a>
  </nav>
</template>

<script setup>
import { Home, Shirt, Wrench, UserCircle } from 'lucide-vue-next'

const navItems = [
  {
    label: "Home",
    href: "/",
    icon: Home
  },
  {
    label: "Indumentaria",
    href: "/indumentaria",
    icon: Shirt
  },
  {
    label: "Admin",
    href: "/admin",
    icon: Wrench
  }
];
</script>

<style scoped>
nav {
  min-height: 64px;
  padding-bottom: max(env(safe-area-inset-bottom), 16px);
  background: #fff;
  box-shadow: 0 -2px 16px 0 rgba(7,164,149,0.08), 0 -1px 8px rgba(0,0,0,0.08);
  z-index: 50;
}
.router-link-active,
.router-link-exact-active {
  color: #07a495 !important;
}
</style>