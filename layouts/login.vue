<template>
  <div>
    <div class="main-content">
      <LoginPage />
    </div>
    
    <div class="second-content">
      <div class="box">
        <h1 class="disclaimer">
          Kechirasiz, ushbu veb-saytga mobil qurilmalar orqali kirish hozirda
          mavjud emas.
        </h1>
      </div>
      <MobileApp />
    </div>

    <!-- <slot /> -->
  </div>
</template>

<script setup>
import MobileApp from "@/components/Home/MobileApp.vue";
</script>

<style lang="scss" scoped>

.box {
  background: red;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.disclaimer {
  text-align: center;
  font-size: 20px;
  color: white;
}

.second-content {
  display: none;
}

@media (max-width: 900px) {
  .main-content {
    display: none;
  }
  .second-content {
    display: flex;
    flex-direction: column;
  }
}

</style>
