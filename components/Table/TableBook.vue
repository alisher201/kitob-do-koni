<template>
    <div>
        <div style="background-color:white;">
            <div class="wrapper">
                <div class="main" v-for="(item, index) in store.books.result?.ebooks" :key="index">
                    <div class=""  @click="readingLInk(item.file_path)">
                        <img :src="' https://beta.kytab.uz' + item.book.image" alt="">
                        <h2>{{ item.book.name }}</h2>
                        
                        <p v-for="(itm,index ) in  item.book.author" :key="index" class="">{{ itm.fio }}</p>
                        <div>
                        <p v-if="(item.book.number_of_pages )">{{ item.book.number_of_pages }} bet</p>
                        <p v-else></p>

                        </div>
                        <img class="main_img" :src="item.start" alt="">
                        <div class="main_list">
                            <p class="main_list_p">{{ item.foiz }}</p>
                            <img class="main_list_img" style="height:2px;margin-top:8px" :src="item.stecer" alt="">
                        </div>
                    </div>

                </div>
            </div>
            <!-- <pre style="">{{ store.books.result }}</pre> -->
        </div>
    </div>
</template>

<script setup>
const store = ProfileHistory()
const router = useRouter();

const readingLInk = (item) => {
    let data = JSON.stringify(item)
    localStorage.setItem('epubUrl', data)
    router.push('/reading')
}

onMounted(() => {
    store.Book()
})

</script>

<style lang="scss" scoped>
.nuxt-link-custom {
  text-decoration: none;
  text-underline-offset:none
}
.wrapper{
    display: flex;
    background-color:#FAFAFA;
    // background-color:red;
    height: 100%;
}
.main{
    width:11.375rem;
    height: 18rem;
    top: 14.5rem;
    // left: 29.9375rem;
    border-radius: .625rem;
    background-color:#FAFAFA;
    // background-color: red;
    margin-left:1.875rem;
}
.main_card{
    width: 1.875rem;
    height: 1.875rem;
    background-color: blue;

}
.main_card_p{
    margin-top:1.375rem;
    width: 9.375rem;
    color: black;
}
img{
    width: 11.375rem;
    height: 13.375rem;
}

.main_list {
    display: flex;
}

h2 {
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
    // margin:.375rem .4375rem .1875rem .5rem; 
}
.main_p{
    width: 9.375rem;
    height: 1.125rem;
    top: 35.625rem;
    // left: 32.3125rem;
    font-family: Manrope;
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0.02em;
    text-align: left;
    // color:#9196AD;
    color: #35363D;
    margin:0rem 0rem .9375rem 0rem;
}

.main_img {
    width: 66px;
    height: 16px;
    top: 592px;
    left: 517px;
    margin: 3px 39px 4px 8px;
}

.main_list {
    margin: 0px 0px 0px 8px;
}

.main_list_p {
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

.main_list_img {
    width: 100px;
    height: 3px;
    top: 619px;
    left: 549px;
    border-radius: 2px;

}
</style>