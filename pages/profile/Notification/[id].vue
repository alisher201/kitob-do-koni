<template>
    <div v-for="(item,index) in store?.notifications?.result" :key="index">
        <div class="div" v-if="(route.params.id == item.id)">
            <dev @click="back.go(-1)">
                <img class="h1" src="@/assets/profile/back.png" alt="">
                
            </dev>

            <div  class="div1">
                <div  class="div2">
                    <!-- <img style="" src="@/assets/profile/singlepage.png" alt=""> -->
                    <img class="img1" :src="'https://beta.kytab.uz'+item.parent.image" alt="">  
                </div>
                <h2 class="h2">{{ item.title }}</h2>
                <p class="p">{{ item.body }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const back = useRouter();
const route  = useRoute()
const store = ProfileHistory()
// console.log(`${back.id}`,'back')
console.log(route.params.id,'route.param.id');
onMounted(()=>{
  store.Notification()
})
</script>

<style lang="scss" scoped>
.router-link-exact-active,.nuxt-link,
 .nuxt-link{
  background-color: #f1f1f1;
  border-bottom: none; 
  text-decoration: none;
}
.div{
    width: 961px;
    height: 538px;
    top: 232px;
    left: 479px;
    border-radius: 10px;
    background-color: #FAFAFA;
    // background-color: red;
    margin:40px 121px 101px 30px;
}
.div1{
    width: 780px;
    height: 448px;
    top: 292px;
    left: 509px;
    border-radius: 10px;
    margin: 15px 30px 30px 80px;

}
.h1{
    width: 136px;
    height: 27px;
    top: 250px;
    left: 509px;
    font-family: Manrope;
    font-size: 20px;
    font-weight: 600;
    line-height: 27px;
    letter-spacing: 0.02em;
    text-align: left;
    margin:18px 658px 15px 70px;

}
.div2{
    width: 740px;
    height: 226.11px;
    top: 312px;
    left: 529px;
    border-radius: 7px;
    background-image: url('@/assets/profile/singlepage.png');
    background-color: rgb(81, 0, 255);
    margin: 20px 20px 10px 20px;
}
.img1{

    margin:24px 451px 29px 116px;
}
.h2{
    width: 454px;
    height: 23px;
    top: 548px;
    left: 529px;
    font-family: Manrope;
    font-size: 17px;
    font-weight: 600;
    line-height: 23px;
    letter-spacing: 0.02em;
    text-align: left;
    color:#35363D;
    margin: 10px 286px 8px 20px;

}
.p{
    width: 740px;
    height: 144px;
    top: 579px;
    left: 529px;
    font-family: Manrope;
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #9196AD;
    margin: 8px 20px 17px 20px;


}
</style>
