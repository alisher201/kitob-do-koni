<template>
  <div class="navbar-item  d-none d-xl-block d-lg-block py-2 ">
    <NuxtLink
      class="navLink"
      :class="idx != 0 ? 'ms-3' : 'ms-0'"
      :to="link.Link"
      v-for="(link, idx) in navLinks" :key="idx"
      :id="idx"
      >{{ link.name }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const navLinks = [
  {
    name: "Barcha kitoblar",
    Link: "/",
  },
  {
    name: "Elektron kitob",
    Link: "/products",
  },
  {
    name: "Audio kitob",
    Link: "/contact",
  },
  // {
  //   name: "Aksessuarlar",
  //   Link: "/contact",
  // },
  // {
  //   name: "O'quvchi qurulma",
  //   Link: "/contact",
  // },
  // {
  //   name: "Krujka",
  //   Link: "/contact",
  // },
  // {
  //   name: "Futbolka",
  //   Link: "/contact",
  // },
  // {
  //   name: "Ruchka",
  //   Link: "/contact",
  // },
];
</script>
<style>
.router-link-active {
  color: #2869ab !important;  
  border-bottom: 2px solid #2869ab;
 
}
.navLink {
  font-size: 15px !important;
  padding-bottom: 8px;
  font-weight: 500;
  
}
/* .navbar-item {
  height: 40px;
} */
</style>
