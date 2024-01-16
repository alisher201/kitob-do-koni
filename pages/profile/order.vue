<template>
  <div>
    <div class="main">
      <h1 class="h1">Buyurtmalar tarixi</h1>
      <div class="main_div">
        <div  class="main_p" :class="{'price' :content == 1}" @click="content = 1">Muddatli to'lov</div>
        <div  class="main_p" :class="{'price' :content == 2}" @click="content = 2">Yetkazib berilgan</div>
        <div  class="main_p" :class="{'price' :content == 3}" @click="content = 3">Naqd to'lov</div>
      </div>
      <div v-show="content == 1"><Table/></div>
      <div v-show="content == 2"><TablePrice/></div>
      <div v-show="content == 3"><TablePay/></div>
    </div>
  </div>
</template>

<script setup>

const content = ref(null)


onMounted(() => {
  content.value = 1;
})

</script>

<style lang="scss" scoped>
.main {
  width: 930px;
  height: 100%;
  top: 232px;
  left: 30px;
  background-color: #fafafa;
  // background-color:red;
  margin: 40px 121px 412px 30px;
}
.h1 {
  width: 178px;
  height: 47px;
  top: 250px;
  left: 509px;
  font-family: Manrope;
  font-size: 20px;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #35363d;
  margin: 18px 632px 0px 30px;
  padding-top: 18px;
}
.main_div {
  display: flex;
}
.price{
  // background-color: red;
  // border-radius: 5px;
  border-bottom:2px solid green;
  
}
.main_p {
  width: 138px;
  height: 35px;
  top: 292px;
  left: 509px;
  font-family: Manrope;
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.02em;
  // text-align: left;
  color: #1c5793;
  margin: 15px 0px 30px 30px;
  // background-color: red;
  padding: 5px;
  cursor: pointer;

}
.nuxt-link-exact-active .nuxt-link,
.NuxtLink .nuxt-link-exact .nuxt-link {
  text-decoration: none;
}

</style>