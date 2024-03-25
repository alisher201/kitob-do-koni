<template>
  <div>
    <div class="container px-0" style="display:flex; justify-content:space-between">
      <div class="main row">
        <div style="padding: 22px">
          <div style="display: flex">
            <div class="aylana">
              <img src="@/assets/profile/Vector.svg" alt="" />
            </div>
            <div style="margin-top: 10px">
              <div>
                <h2 class="h2">Sherzod Abdullayev</h2>
                <p class="p1">+998 94 002 25 52</p>
              </div>
            </div>
          </div>
          <img src="@/assets/profile/chiziq.svg" alt="" />
          
          <NuxtLink to="/profile" class="main_list" >
            <img class="rasm"  src="@/assets/profile/Frame.svg" alt="" />
            <p  class="h2">Bildirishnoma</p>
          </NuxtLink>
          <NuxtLink to="/profile/order" class="main_list" >
            <img class="rasm" src="@/assets/profile/qongiroq.svg" alt="" />
            <p  href="" class="h2">Buyurtma tarixi</p>
          </NuxtLink>
          <NuxtLink to="/profile/book" class="main_list">
            <img class="rasm" src="@/assets/profile/watch.svg" alt="" />
            <p href="" class="h2">Mening Kitoblarim</p>
          </NuxtLink>
          <NuxtLink to="/profile/settings"  class="main_list">
            <img class="rasm" src="@/assets/profile/nastroyka.svg" alt="" />
            <p href="" class="h2">Profil sozlamalar</p>
          </NuxtLink>
          <NuxtLink to="/" class="main_list">
            <img class="rasm" src="@/assets/profile/tabler_logout.svg" alt="" />
            <p to="" class="h2" style="color: red">chiqish</p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template> 

<script setup>
const content = ref(false)
const notification = ref(true)


</script>
  <style lang="scss" scoped>

.router-link-exact-active,.nuxt-link,
 .nuxt-link{
  background-color: #f1f1f1;
  border-bottom: none; 
  text-decoration: none;
}

.main {
  background-color: #fafafa;
  // background-color: red;
  // width: 358px;
  height: 392px;
  top: 232px;
  left: 121px;
  border-radius: 10px;
  margin-top: 30px;
  margin-bottom: 200px;
}
.main_list {
  display: flex;
  width: 288px;
  height: 42px;
  top: 354px;
  left: 141px;
  border-radius: 10px;
  margin-top: 5px;
}
.aylana {
  display: flex;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  top: 254px;
  left: 143px;
  background-color: #f3f3f3;
  align-items: center;
  justify-content: center;
}
.h2 {
  width: 176px;
  height: 25px;
  top: 265px;
  left: 225px;
  font-family: Manrope;
  font-size: 18px;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0.02em;
  text-align: left;
  margin: 8px;
  padding-left: 4px;
  color: black;
}
.rasm {
  width: 22px;
  height: 22px;
  top: 364px;
  padding: 2.75px, 2.86px, 2.75px, 2.86px;
  margin: 9px;
  color: red;
}

.p1 {
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0.02em;
  text-align: left;
  padding-left: 4px;
  color: #9196ad;
}
.div2 {
  width: 840px;
  height: 355px;
  top: 232px;
  left: 479px;
  border-radius: 10px;
}
</style>