<template>
  <div id="app">
    <SeoKit />
    <Header />
<<<<<<< HEAD
=======
    
>>>>>>> ee90e53da642864c21b59e8a1fa2637af6fc5ded
    <slot />
   
    <!-- <Newsletter v-if="route.path != '/contact'" /> -->
    <Footer />
  </div>
</template>

<script setup>
<<<<<<< HEAD
import useAsset from '~/composables/useAsset';
=======
>>>>>>> ee90e53da642864c21b59e8a1fa2637af6fc5ded

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
  htmlAttrs: { lang: 'en-US' },
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