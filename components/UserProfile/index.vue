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
          <div @click="router.push('/profile')" class="main_list" :class="{ 'router-link-active': $route.path === '/profile' }">
            <img class="rasm" src="@/assets/profile/Frame.svg" alt="" />
            <p class="h2">{{$t("home.profile.Notification")}}</p>
          </div>
          <div @click="router.push('/profile/order')" class="main_list" :class="{ 'router-link-active': $route.path === '/profile/order' }">
            <img class="rasm" src="@/assets/profile/qongiroq.svg" alt="" />
            <p class="h2">{{ $t("home.profile.Order history") }}</p>
          </div>
          <div @click="router.push('/profile/book')" class="main_list" :class="{ 'router-link-active': $route.path === '/profile/book' }">
            <img class="rasm" src="@/assets/profile/watch.svg" alt="" />
            <p class="h2">{{ $t("home.profile.My books") }}</p>
          </div>
          <div @click="router.push('/profile/settings')" class="main_list" :class="{ 'router-link-active': $route.path === '/profile/settings' }">
            <img class="rasm" src="@/assets/profile/nastroyka.svg" alt="" />
            <p class="h2">{{ $t("home.profile.Profile settings") }}</p>
          </div>
          <div @click="router.push('/') " class="main_list" :class="{ 'router-link-active': $route.path === '/' }">
            <img class="rasm" src="@/assets/profile/tabler_logout.svg" alt="" />
            <p class="h2" style="color: red">{{ $t("home.profile.Exit") }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 

<script setup>
const content = ref(false)
const notification = ref(true)
const router = useRouter()



</script>
  <style lang="scss" scoped>

.router-link-active {
  background-color: #F1F1F1
}

.main {
  background-color: #fafafa;

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
  cursor: pointer;
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