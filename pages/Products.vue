<template>
    <div>
        <HomeCarousel />
        <HomePossibilities />
        <HomeMarketFast :title="'Bozori chaqqon'" :bookImgs="store.books.special_offer" />
        <HomeMarketFast :title="'Mashhurlar'" :bookImgs="store.books.salable" />
        <HomeMarketFast :title="'Maxsus taklif'" :bookImgs="store.books.popular" />
        <HomeMobileApp />
        <!-- <ProductsBreadCrumbs />
        <ProductsGrid /> -->
    </div>
</template>

<script setup>
const store = useTestTStore();
onMounted(() => {
    store.fechBooks()
});
</script>
