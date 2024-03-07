<template>
  <div>
    <SeoKit />
    <Header />

    <div class="d-flex container " style=" height:100%;">
      <UserProfile />
      <slot  />
    </div>
    <Footer />
  </div>
</template>
  
<script setup>
</script>
<style lang="scss" scoped>
</style>