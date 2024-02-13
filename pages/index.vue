<template>
  <main>
    {{ dataa }}
    <HomeCarousel />
    <HomePossibilities />
    <HomeMarketFast :title="'Bozori chaqqon'" :bookImgs="store?.books?.special_offer" />
    <HomeMarketFast :title="'Mashhurlar'" :bookImgs="store?.books?.salable" />
    <HomeMarketFast :title="'Maxsus taklif'" :bookImgs="store?.books?.popular" />
    <HomeMobileApp />

  </main>
</template>
 
<script setup>
let dataa = ref('')
const store = useTestTStore();
onMounted(() => {
  store.fechBooks().then((a) => {
  });

  
});
</script>