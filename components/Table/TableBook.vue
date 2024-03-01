<template>
    <div>

        <div style="background-color:white;">
            <div class="wrapper">
                <div class="main" v-for="(item, index) in store.books.result" :key="index"
                    @click="$router.push('/reading/' + item.book.id)">
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
import img1 from '../../assets/profile/AtomOdatlari.png';
import img3 from '../../assets/profile/foiz.png';
import start1 from '../../assets/profile/start.png';
import img2 from '../../assets/profile/Kitoblar.png'
import img4 from '../../assets/profile/Ruxiyat.png'
import img5 from '../../assets/profile/Zukkolar.png'
import img6 from '../../assets/profile/Raqamlar.png'
const data = [
    {
        img: img1,
        name: 'Atom odatlar (yum...',
        author: 'Martimer Alder',
        start: start1,
        foiz: '50%',
        stecer: img3
    },
    {
        img: img2,
        name: 'Kitoblar qanday o’q...',
        author: 'Jayms Kir',
        start: start1,
        foiz: '50%',
        stecer: img3
    },
    {
        img: img4,
        name: 'Ruhiyat parhezi',
        author: 'Jayms Kir',
        start: start1,
        foiz: '50%',
        stecer: img3
    },
    {
        img: img5,
        name: 'Zukkolar va landov...',
        author: 'Malkolm Gladuell',
        start: start1,
        foiz: '50%',
        stecer: img3
    },
    {
        img: img6,
        name: 'Raqamlar uchun ya...',
        author: 'Barbara Oukli',
        start: start1,
        foiz: '50%',
        stecer: img3
    },
]
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    background-color: #FAFAFA;
}

.main {
    width: 52.5rem;
    height: 19.25rem;
    top: 14.5rem;
    // left: 29.9375rem;
    border-radius: .625rem;
    // background-color:#FAFAFA;
    background-color: red;
    margin-left: 1.875rem;
}

img {
    width: 3.125rem;
    height: 3.125rem;
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
    color: #35363D;
    margin: .375rem .4375rem .1875rem .5rem;
}

.main_p {
    width: 6.5625rem;
    height: 1.125rem;
    top: 35.625rem;
    left: 32.3125rem;
    font-family: Manrope;
    font-size: .8125rem;
    font-weight: 400;
    line-height: 1.125rem;
    letter-spacing: 0.02em;
    text-align: left;
    color: #9196AD;
    margin: .1875rem 2.4375rem .25rem .5rem;
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