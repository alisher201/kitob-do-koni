<template>
    <div>

        <div style="background-color:white;">
            <div class="wrapper">
                <div class="main" v-for="(item, index) in store.books.result" :key="index"
                    @click="readingLInk(item)">
                    <div class="">
                        <img :src="' https://beta.kytab.uz' + item.book.image" alt="">
                        <h2>{{ item.book.name }}</h2>
                        <p class="main_p">{{ item.book.author.fio }}</p>
                        <img class="main_img" :src="item.start" alt="">
                        <div class="main_list">
                            <p class="main_list_p">{{ item.foiz }}</p>
                            <img class="main_list_img" style="height:.125rem;margin-top:.5rem" :src="item.stecer" alt="">
                        </div>
                    </div>

                </div>
            </div>
            <pre style="">{{ store.books.result[0].file_path }}</pre>
        </div>
    </div>
</template>

<script setup>
const store = ProfileHistory()

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

.main_list {
    display: flex;
}

h2 {
    width: 8.1875rem;
    height: 1.125rem;
    top: 34.3125rem;
    left: 32.3125rem;
    font-family: Manrope;
    font-size: .875rem;
    font-weight: 600;
    line-height: 1.125rem;
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
    font-size: .8125rem;
    font-weight: 400;
    line-height: 1.125rem;
    letter-spacing: 0.02em;
    text-align: left;
    // color:#9196AD;
    color: #35363D;
    margin:0px 0px 15px 0px;
}

.main_img {
    width: 4.125rem;
    height: 1rem;
    top: 37rem;
    left: 32.3125rem;
    margin: .1875rem 2.4375rem .25rem .5rem;
}

.main_list {
    margin: 0rem 0rem 0rem .5rem;
}

.main_list_p {
    width: 1.6875rem;
    height: 1rem;
    top: 38.25rem;
    left: 32.3125rem;
    font-family: Manrope;
    font-size: .75rem;
    font-weight: 500;
    line-height: 1rem;
    letter-spacing: 0.04em;
    text-align: left;
    content: 50%;
    color: #9196AD;

}

.main_list_img {
    width: 6.25rem;
    height: .1875rem;
    top: 38.6875rem;
    left: 34.3125rem;
    border-radius: .125rem;

}
</style>