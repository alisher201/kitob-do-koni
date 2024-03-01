<template>
    <div>
       <!-- <ReadingBookPage /> -->
       <reading />
        <slot />
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

<style lang="scss" scoped>

</style>