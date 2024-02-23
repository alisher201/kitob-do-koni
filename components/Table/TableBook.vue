<template>
    <div>

    <div style="background-color:white;">
        <div class="wrapper " >
            <NuxtLink to="/reading" class="main col-sm-12"  v-for="(item,index) in store.books.result" :key="index">
                <div class="main_card">
                    <img :src="' https://beta.kytab.uz'+ item.book.image" alt="">
                    <h2>{{item.book.name}}</h2>
                    <div v-for="(itm,index) in item" :key="index">
                        <div v-for="(i, ind) in itm.author " :key="ind">
                            <p class="main_p">{{i.fio}}</p>
                        <!-- <pre>{{i}}</pre>    -->            
                        </div>
                        
                    </div>
                    <!-- <img class="main_img" :src="item.start" alt=""> -->
                    <p class="main_card_p">{{ item.book.number_of_pages }} ta page</p>
                    <div class="main_list">
                        <p class="main_list_p">{{item.foiz}}</p>
                        <img class="main_list_img" style="height:2px;margin-top:8px" :src="item.stecer" alt="">
                    </div>
                </div>
                
            </NuxtLink>
        </div>
        <!-- <pre style="">{{ store.books }}</pre> -->
    </div>
    </div>


</template>

<script setup>
const store = ProfileHistory()
onMounted(()=>{
    store.Book()
})
// import img1 from '../../assets/profile/AtomOdatlari.png';
// import img3 from '../../assets/profile/foiz.png';
// import start1 from '../../assets/profile/start.png';
// import img2 from '../../assets/profile/Kitoblar.png'
// import img4 from '../../assets/profile/Ruxiyat.png'
// import img5 from '../../assets/profile/Zukkolar.png'
// import img6 from '../../assets/profile/Raqamlar.png'
// const data = [
//     {
//         img:img1,
//         name:'Atom odatlar (yum...',
//         author:'Martimer Alder',
//         start:start1,
//         foiz:'50%',
//         stecer:img3
//     },
//     {
//         img:img2,
//         name:'Kitoblar qanday o’q...',
//         author:'Jayms Kir',
//         start:start1,
//         foiz:'50%',
//         stecer:img3
//     },
//     {
//         img:img4,
//         name:'Ruhiyat parhezi',
//         author:'Jayms Kir',
//         start:start1,
//         foiz:'50%',
//         stecer:img3
//     },
//     {
//         img:img5,
//         name:'Zukkolar va landov...',
//         author:'Malkolm Gladuell',
//         start:start1,
//         foiz:'50%',
//         stecer:img3
//     },
//     {
//         img:img6,
//         name:'Raqamlar uchun ya...',
//         author:'Barbara Oukli',
//         start:start1,
//         foiz:'50%',
//         stecer:img3
//     },
// ]
</script>

<style lang="scss" scoped>
.nuxt-link-custom {
  text-decoration: none;
  text-underline-offset:none
}
.wrapper{
    display: flex;
    background-color:#FAFAFA;
    height: 100%;
}
.main{
    width:150px;
    height: 260px;
    top: 232px;
    // left: 479px;
    border-radius: 10px;
    background-color:#FAFAFA;
    // background-color: red;
    margin-left:30px;
}
.main_card{
    width: 30px;
    height: 30px;
    background-color: blue;

}
.main_card_p{
    margin-top:22px;
    width: 150px;
    color: black;
}
img{
    width: 150px;
    height: 150px;
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
    // margin:6px 7px 3px 8px; 
}
.main_p{
    width: 150px;
    height: 18px;
    top: 570px;
    // left: 517px;
    font-family: Manrope;
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0.02em;
    text-align: left;
    // color:#9196AD;
    color: #35363D;
    margin:0px 0px 15px 0px;
}
.main_img{
    width: 66px;
    height: 16px;
    top: 592px;
    left: 517px;
    margin:3px 39px 4px 8px; 
}
.main_list{
    margin:0px 0px 0px 8px;
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