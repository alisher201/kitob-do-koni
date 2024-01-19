<template>
  <div id="app">
    <SeoKit />
    <Header />
    
    <slot />
   
    <!-- <Newsletter v-if="route.path != '/contact'" /> -->
    <Footer />
  </div>
</template>

<script setup>

const route = useRoute()

useHead({
  title: 'kytab',
  meta: [
    { property: 'og:title', content: `${route.meta.title}` },
    // { property: 'og:image', content: useAsset('jum1.jpg') }
  ],
  link: [
    { rel: 'canonical', href: process.env.NUXT_PUBLIC_SITE_URL},
    { rel: 'icon', type: 'image/x-icon', href: '/fi(1).ico' }],
  htmlAttrs: { lang: 'uz' },
})
</script>

<style>
#app {
  /* background-color: #F8F8F8 !important; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #2c3e50; */
}
</style>