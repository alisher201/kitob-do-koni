<template>
  <div>
    <div class="main">
      <div class="wrapper">
      </div>
      <div class="main_list">
                <img src="../../assets/profile/book.png" alt="">
                <h2>{{$t("home.profile.Your book is stored in the buyer")}}</h2>
                <p>{{$t("home.profile.Choose books in our store and read them on any device")}}</p>
                <NuxtLink to="">
                    <button @click="send">{{ $t("home.profile.Homepage") }}</button>
                </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const store = ProfileHistory();
// const urlimg = useRuntimeConfig().public.bookUrl;
const router = useRouter()
// const aludioLink = (item) => {
//   let audio = JSON.stringify(item)
//   localStorage.setItem('audioData', audio)
//   router.push('/audio')
// }
const send = ()=>{
  router.push('/')
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
.main{
  margin-left: 250px;
  // margin-top:90px;

}
img{
    width: 200px;
    height: 200px;
    top: 342px;
    left: 798px;
    margin:10px 10px 0px 70px
}
h2{
    width: 241px;
    height: 22px;
    top: 572px;
    left: 776px;
    font-family: Manrope;
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;
    margin: 10px 30px 25px 65px;
}
p{
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
    color:#9196AD;
}
button {
  width: 195px;
  height: 35px;
  top: 658px;
  left: 827px;
  border-radius: 5px;
  background-color: #307cce;
  color: white;
  border: none;
  margin: 20px 148px 0px 60px;
}
</style>
