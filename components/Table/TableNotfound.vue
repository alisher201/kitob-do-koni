<template>
    <div>
        <div class="main">
            <div class="main_list">
                <img src="../../assets/profile/book.png" alt="">
                <h2>Bu yerda kitoblaringiz saqlanadi</h2>
                <p>Bizning do'konimizda kitoblarni tanlang va ularni istalgan qurilmada o'qing</p>
                <NuxtLink to="">
                    <button @click="send">Bosh Sahifa</button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
const router = useRouter()
const send=()=>{
    router.push('/')
}
</script>

<style lang="scss" scoped>
.main{
    width: 840px;
    height: 238px;
    top: 232px;
    left: 479px;
    border-radius: 10px;
    background-color: #FAFAFA;
}
.main_list{
    width: 342px;
    height: 351px;
    top: 342px;
    left: 728px;
    border-radius: 5px;
    margin:0px 249px 77px 249px;

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
    margin: 10px 30px 8px 65px;
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
button{
    width: 135px;
    height: 35px;
    top: 658px;
    left: 827px;
    border-radius: 5px;
    background-color:#307CCE;
    color:white;
    border:none;
    margin:20px 108px 0px 110px;

}
</style>