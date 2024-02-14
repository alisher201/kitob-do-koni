<template>
  <div class="container px-0 my-3">

    <!-- catoologlar sidebar -->
    <div class="flex">
      <small class="container-item">Bosh sahifa / Katalog /{{$i18n.locale == 'uz' ? store.katalog?.name_oz : store.katalog?.name_ru }}/{{ $i18n.locale == 'uz' ? catologChild?.name_oz : catologChild?.name_ru
      }} </small>
    </div>

    <div class="row mx-0 mt-3">
      <div class="col-4 sideBar p-4">
        <h6><strong>Katalog</strong></h6>
        <p class="ms-2">
          <strong style="font-size: 15px">{{$i18n.locale == 'uz' ? store.katalog?.name_oz : store.katalog?.name_ru }}</strong>
        </p>
        <!-- categorys item name -->
        <p v-for="(item, index) in store.katalog?.childrens?.slice(0, alld) ||
          []" :key="index" class="categoriaData ms-3" @click="activeCatolog(item.id)"
          :class="{ activeCategory: item?.id == catologChild?.id }">
          <!-- {{ item }} -->

          {{ $i18n.locale == 'uz' ? item.name_oz : item.name_ru }}

        </p>


        <!-- category all items -->
        <p v-if="alld == 5" @click="alld = store.katalog?.childrens?.length" class="categoriaAll ms-3">
          Barchasi {{ store.katalog.childrens?.length }}
          <img src="@/assets/contact/arrowDown.png" alt="" />
        </p>
        <p v-else @click="alld = 5" class="categoriaAll ms-3l">yopish</p>
        <hr class="my-4" />
        <h6>

          <strong>{{ $t("home.format") }}</strong>
        </h6>
        <p @click="requestBookType('all')">
          <input type="checkbox" class="form-check-input me-2 ms-1"   v-model="typeBook.all"/>{{ $t("home.kinds") }}

        </p>
        <p @click="requestBookType('ebook')">
          <input type="checkbox" class="form-check-input me-2 ms-1" v-model="typeBook.ebook" />{{ $t("home.elecBook") }}
        </p>
        <p @click="requestBookType('audio')">
          <input type="checkbox" class="form-check-input me-2 ms-1" v-model="typeBook.audio" />{{ $t("home.audioBook") }}
        </p>
        <p @click="requestBookType('paper')">
          <input type="checkbox" class="form-check-input me-2 ms-1" v-model="typeBook.paper" /> paper
        </p>
        <hr class="my-4" />

        <h6>
          <strong>{{ $t("home.price") }}</strong>
        </h6>
        <div class="row">
          <div class="col-6">
            <label class="price">{{ $t("home.from") }}</label>
            <input type="text" class="form-control mb-1" />
          </div>
          <div class="col-6">
            <label class="price">{{ $t("home.upTo") }}</label><input type="text" class="form-control" />
          </div>
        </div>
        <div>
          <!-- <vue-slider/> -->
        </div>
        <hr class="my-4" />
        <h6>
          <strong>{{ $t("home.lang") }}</strong>
        </h6>
        <p>
          <input type="checkbox" class="form-check-input me-2 ms-1" />
          {{ $t("home.allLang") }}
        </p>
        <p>
          <input type="checkbox" class="form-check-input me-2 ms-1" />{{
            $t("home.uzb")
          }}
        </p>
        <p>
          <input type="checkbox" class="form-check-input me-2 ms-1" />English
        </p>
        <p>
          <input type="checkbox" class="form-check-input me-2 ms-1" />Русский
        </p>
      </div>

      <div class="col-8 ps-4 pe-0">
        <div class="d-flex justify-content-between">
          <h6 class="p-0">{{ $t("home.catalog") }}</h6>
          <button class="categoriaAll btn btnColor">
            <!-- {{ $t("home.sorting") }} -->
            <img src="@/assets/contact/arrowDown.png" alt="" />
          </button>
        </div>

        <div class="bookGrid mt-4" v-if="!store.errorCategory">
          <div class="p-0" v-for="(item, index) in store.katalogpic" :key="index" @click="selectBook(item.id)">
            <!-- <div v-for="(item, index) in store.katalogtypep" :key="index">
              <pre>{{ item }}</pre>
            </div> -->
            <div class="bookData">
              <img :src="url + '/' + item?.image" class="categoyImg" />
              <button class="btnBestseller">Bestseller</button>
              <button class="newBook">Yangi</button>
              <img src="../../assets/contact/booklike.png" alt="" class="bookLike" />
              <img src="../../assets/contact/karzinka.png" alt="" class="karzinka" />
              <img src="../../assets/contact/eBook.png" alt="" class="ebook" />

              <img src="../../assets/contact/bookopen.png" alt="" class="bookopen" />
              <img src="../../assets/contact/headphone.png" alt="" class="headphone" />
            </div>
            <div class="ps-2">
              <small class="title">{{ item.name }}</small>
            </div>
            <div class="ps-2">
              <small class="author">{{ item.description }}</small>
            </div>
            <img src="../../assets/contact/Star.png" alt="" />
            <small class="stats ms-2">5,0</small>
            <span class="starsNumbers">(32)</span>
          </div>
        </div>
        <div v-else class="d-flex justify-content-center align-items-center">
          <h1 style="color: red ;">
            {{ store.errorCategory }}
          </h1>
          
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const store = useCategory();
const url = useRuntimeConfig().public.bookUrl;
const alld = ref(5);
const typeBook = ref({
  all: false,
  paper: false,
  ebook: false,
  audio: false
})
// Get ID
const route = useRoute();
let catologChild = ref(null)

const activeCatolog = (id) => {
  if (store.katalog.childrens) {
    let findCatolog = store.katalog.childrens.find(item => item.id == id)
    catologChild.value = findCatolog

  }
}
const requestBookType = (type) => {
  const bookType = typeBook.value;
  
  for (let key in bookType) {
    bookType[key] = (key === type);
  }
  
  store.fetchCategoryType(route.params.id, type)
};

// Get Data from category.js
onMounted(() => {

  
  
  // bitta category ni chaqirish uchun get method
  store.fetchKatalog(route.params.id)
  .then(() => {
    activeCatolog(route.params.id)

  })
    store.fetchKatalogPic(1)

    // kitobni type bo'ycha  so'rov
    requestBookType('all')
});


const selectBook = (id) => {
  const router = useRouter();
  router.push(`/book/${id}`);
};
</script>
<style scoped>
.sideBar {
  height: auto;
  border-radius: 10px;
  background: #fafafa;
}

.container-item {
  cursor: pointer;
}

.sideBar h6 {
  font-size: 18px;
  font-weight: 400;
}

.categoriaData {
  font-size: 14px;
  font-weight: 500;
  color: #35363D;
}
.categoriaData:hover {
cursor: pointer;
}
.categoriaAll {
  font-size: 14px;
  color: #9196ad;
  cursor: pointer;
}

.price {
  color: #8f8e8e;
  font-size: 13px;
}

.btnColor {
  background: #fafafa;
}

.categoyImg {
  width: 100%;
  height: 100%;
  border-radius: 7px;
}

.btnBestseller {
  background: #67c926;
  position: absolute;
  left: -5px;
  top: 10px;
  border: none;
  border-radius: 3px;
  font-size: 12px;
  color: #fff;
  font-weight: 600;
  z-index: 1;
  width: 78px;
  height: 23px;
}

.newBook {
  background: #ff673d;
  position: absolute;
  left: -5px;
  top: 10px;
  border: none;
  border-radius: 3px;
  font-size: 12px;
  color: #fff;
  font-weight: 600;
  width: 49px;
  height: 23px;
}

.bookData {
  position: relative;
  height: 260px;
}

.bookLike {
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  display: none;
}

.karzinka {
  position: absolute;
  right: 10px;
  top: 45px;
  cursor: pointer;
  display: none;
}

.ebook {
  position: absolute;
  right: 10px;
  bottom: 10px;
  cursor: pointer;
  display: none;
}

.bookopen {
  position: absolute;
  right: 40px;
  bottom: 10px;
  cursor: pointer;
  display: none;
}

.headphone {
  position: absolute;
  right: 70px;
  bottom: 10px;
  cursor: pointer;
  display: none;
}

.bookData:hover .bookLike,
.bookData:hover .ebook,
.bookData:hover .bookopen,
.bookData:hover .headphone,
.bookData:hover .karzinka {
  display: block;
}

.bookGrid {
  width: 100%;
  display: grid;
  grid-template-columns: 23.5% 23.5% 23.5% 23.5%;
  gap: 15px;
}

.starsNumbers {
  color: #9196ad;
  font-size: 13px;
}

.title {
  font-weight: 800;
}

.author {
  color: #9196ad;
}

.activeCategory { 
  color: blue !important;
}
</style>


