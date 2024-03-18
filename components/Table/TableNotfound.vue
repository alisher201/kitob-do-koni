<template>
  <div>
    <div class="main">
      <div class="wrapper">
        <div @click= aludioLink(item) class="main" v-for="(item, ind) in store.books" :key="ind">
          <img :src="urlimg + '/' + item.book.image" alt="" />
          <h2>{{ item.book.name }}</h2>
          {{ item.book.id }}
          <!-- <p class="main_p">{{ item.author }}</p> -->
          <!-- <img class="main_img" :src="item.start" alt="" /> -->
          <!-- <div class="main_list">
            <p class="main_list_p">{{ item.foiz }}</p>
            <img
              class="main_list_img"
              style="height: 2px; margin-top: 8px"
              :src="item.stecer"
              alt=""
            />
          </div> -->
        </div>
      </div>
      <!-- <div class="main_list">
                <img src="../../assets/profile/book.png" alt="">
                <h2>Bu yerda kitoblaringiz saqlanadi</h2>
                <p>Bizning do'konimizda kitoblarni tanlang va ularni istalgan qurilmada o'qing</p>
                <NuxtLink to="">
                    <button>Bosh Sahifa</button>
                </NuxtLink>
            </div> -->
    </div>
  </div>
</template>

<script setup>
const store = ProfileHistory();
const urlimg = useRuntimeConfig().public.bookUrl;
const router = useRouter()
const aludioLink = (item) => {
  let audio = JSON.stringify(item)
  localStorage.setItem('audioData', audio)
  router.push('/audio')
  // console.log(item);
}

const profile = () => {
  store.Book();
};

onMounted(() => {
  profile();
});
</script>

<style lang="scss" scoped>

.wrapper {
    display: flex;
    gap: 20px;
}
.main_list {
  border-radius: 5px;
}
img {
  width: 200px;
  height: 200px;
}
h2 {
  font-family: Manrope;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
}
p {
  width: 342px;
  height: 36px;
  top: 602px;
  left: 728px;
  font-family: Manrope;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.02em;
  text-align: center;
  color: #9196ad;
}
button {
  width: 135px;
  height: 35px;
  top: 658px;
  left: 827px;
  border-radius: 5px;
  background-color: #307cce;
  color: white;
  border: none;
  margin: 20px 108px 0px 110px;
}
</style>
