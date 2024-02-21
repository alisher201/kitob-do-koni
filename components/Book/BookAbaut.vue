<template>
    <div>
        <div class="about">
        <p ref="ptag"><span >{{ $t("home.author") }}</span>  <span>----------</span> <span>Jeyms Klil</span></p>
        <p class="mt-2">{{ $t("home.genre") }} <img src="../../assets/contact/Line 644.png" alt="">Jeyms Klil</p>

        <p  class="mt-2">{{ $t("home.year") }}<img src="../../assets/contact/Line 644.png" alt="">Jeyms Klil</p>

        <p class="mt-2">{{ $t("home.ageLimit") }}<img src="../../assets/contact/Line 644.png" alt="">Jeyms Klil</p>
        <p class="mt-2">ISBN <img src="../../assets/contact/Line 644.png" alt="">Jeyms Klil</p>
        <p class="mt-2">{{ $t("home.pages") }}<img src="../../assets/contact/Line 644.png" alt="">Jeyms Klil</p>
        <p class="mt-2">{{ $t("home.category") }}<img src="../../assets/contact/Line 644.png" alt="">Jeyms Klil</p>
        <p class="mt-2">{{ $t("home.publishing") }}<img src="../../assets/contact/Line 644.png" alt="">Jeyms Klil</p>

      </div>
    </div>
</template>
<script setup>

 const Props = defineProps({
 
})
// const refs = toRefs()

</script>
<style scoped>
.about {
  padding: 0 32px 32px 32px;
  color: #858D96;}
    
</style>