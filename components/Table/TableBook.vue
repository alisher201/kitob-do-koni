<template>
    <div style="display:flex">
        <div class="main" v-for="(item,ind) in data" :key="ind">
            <img :src="item.img" alt="">
            <h2>{{item.name}}</h2>
            <p class="main_p">{{item.author}}</p>
            <img class="main_img" :src="item.start" alt="">
            <div class="main_list">
                <p class="main_list_p">{{item.foiz}}</p>
                <img class="main_list_img" style="height:2px;margin-top:8px" :src="item.stecer" alt="">
            </div>
           
        </div>
    </div>
</template>

<script setup>
import img1 from '../../assets/profile/AtomOdatlari.png';
import img3 from '../../assets/profile/foiz.png';
import start1 from '../../assets/profile/start.png';
import img2 from '../../assets/profile/Kitoblar.png'
import img4 from '../../assets/profile/Ruxiyat.png'
import img5 from '../../assets/profile/Zukkolar.png'
import img6 from '../../assets/profile/Raqamlar.png'
const data = [
    {
        img:img1,
        name:'Atom odatlar (yum...',
        author:'Martimer Alder',
        start:start1,
        foiz:'50%',
        stecer:img3
    },
    {
        img:img2,
        name:'Kitoblar qanday o’q...',
        author:'Jayms Kir',
        start:start1,
        foiz:'50%',
        stecer:img3
    },
    {
        img:img4,
        name:'Ruhiyat parhezi',
        author:'Jayms Kir',
        start:start1,
        foiz:'50%',
        stecer:img3
    },
    {
        img:img5,
        name:'Zukkolar va landov...',
        author:'Malkolm Gladuell',
        start:start1,
        foiz:'50%',
        stecer:img3
    },
    {
        img:img6,
        name:'Raqamlar uchun ya...',
        author:'Barbara Oukli',
        start:start1,
        foiz:'50%',
        stecer:img3
    },
]
</script>

<style lang="scss" scoped>
.main{
    width: 840px;
    height: 438px;
    top: 232px;
    left: 479px;
    border-radius: 10px;
    background-color:#FAFAFA;
    // background-color: red;
    margin-left:30px
}
.main_list{
    display: flex;
}
h2{
    width: 131px;
    height: 18px;
    top: 549px;
    left: 517px;
    font-family: Manrope;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0.02em;
    text-align: left;
    color:#35363D;
    margin:6px 7px 3px 8px; 
}
.main_p{
    width: 92px;
    height: 18px;
    top: 570px;
    left: 517px;
    font-family: Manrope;
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0.02em;
    text-align: left;
    color:#9196AD;
    margin:3px 39px 4px 8px;
}
.main_img{
    width: 66px;
    height: 16px;
    top: 592px;
    left: 517px;
    margin:3px 39px 4px 8px; 
}
.main_list_p{
    width: 27px;
    height: 16px;
    top: 612px;
    left: 517px;
    font-family: Manrope;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.04em;
    text-align: left;
    content: 50%;
    color: #9196AD;

}
.main_list_img{
    width: 100px;
    height: 3px;
    top: 619px;
    left: 549px;
    border-radius: 2px;
}
</style>