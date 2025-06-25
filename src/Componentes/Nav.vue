<template>
  <nav
    class="fixed bottom-0 left-0   right-0 z-50 bg-white border-t border-gray-200 flex justify-around items-center"
    :style="{ paddingBottom: 'env(safe-area-inset-bottom)' }"
  >
    <router-link
      v-for="item in navItems"
      :key="item.href"
      :to="item.href"
      class="flex flex-col items-center  py-2"
      active-class="text-[#07a495]"
      exact-active-class="text-[#07a495]"
    >
      <span v-html="item.icon" class="w-7 h-7 mb-1"></span>
      <span class="text-xs font-semibold">{{ item.label }}</span>
    </router-link>
    <a href="#jugadoras" class="flex flex-col items-center py-2" >
            <span class="w-7 h-7 mb-1"> <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.5 21a7.5 7.5 0 0 1 13 0" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
      <span class="text-xs font-semibold">Jugadoras</span>
    </a>
  </nav>
</template>

<script setup>
const navItems = [
  {
    label: "Home",
    href: "/",
    icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 17v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6m-6 0h6" stroke-linecap="round" stroke-linejoin="round"/><rect width="20" height="14" x="2" y="5" rx="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
  },

  {
    label: "Indumentaria",
    href: "/indumentaria",
    icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4l4 2 4-2 4 2 4-2v6a8 8 0 1 1-16 0V4z" stroke-linecap="round" stroke-linejoin="round"/></svg>`
  },
  {
    label: "Admin",
    href: "/admin",
    icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 8v4l3 3" stroke-linecap="round" stroke-linejoin="round"/></svg>`
  }
];
</script>

<style scoped>
nav {
  height: 64px;
  /* Safe area for iOS/Android navigation bar */
  padding-bottom: env(safe-area-inset-bottom);
  box-shadow: 0 -2px 16px 0 rgba(7,164,149,0.08), 0 -1px 8px rgba(0,0,0,0.08);
}
.router-link-active,
.router-link-exact-active {
  color: #07a495 !important;
}
svg {
  width: 28px;
  height: 28px;
  display: block;
}
</style>