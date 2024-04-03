<template>
  <div class="container px-0 my-3">
    <!-- catoologlar sidebar -->
    <div class="flex">
      <small class="container-item">
        <span @click="$router.push('/')">Bosh sahifa</span>/Katalog /{{
          $i18n.locale == "uz"
            ? store.katalog?.name_oz
            : store.katalog?.name_ru
        }}/{{
          $i18n.locale == "uz" ? catologChild?.name_oz : catologChild?.name_ru
        }}
      </small>
    </div>

    <div class="row mx-0 mt-3">
      <div class="col-4 sideBar p-4">
        <h6><strong>Katalog</strong></h6>
        <p class="ms-2">
          <strong style="font-size: 15px">{{
            $i18n.locale == "uz"
              ? store.katalog?.name_oz
              : store.katalog?.name_ru
          }}</strong>
        </p>
        <!-- categorys item name -->
        <p
          v-for="(item, index) in store.katalog?.childrens?.slice(0, alld) ||
          []"
          :key="index"
          class="categoriaData ms-3"
          @click="activeCatolog(item.id)"
          :class="{ activeCategory: item?.id == catologChild?.id }"
        >
          <!-- {{ item }} -->

          {{ $i18n.locale == "uz" ? item.name_oz : item.name_ru }}
        </p>
        <!-- category all items -->
        <p
          v-if="alld == 5"
          @click="alld = store.katalog?.childrens?.length"
          class="categoriaAll ms-3"
        >
          Barchasi {{ store.katalog.childrens?.length }}
          <img src="@/assets/contact/arrowDown.png" alt="" />
        </p>
        <p v-else @click="alld = 5" class="categoriaAll ms-3l">yopish</p>
        <hr class="my-4" />
        <h6>
          <strong>{{ $t("home.format") }}</strong>
        </h6>
        <p @click="requestBookType('all')" class="bookTypeRequest">
          <input
            type="checkbox"
            class="form-check-input me-2 ms-1"
            v-model="typeBook.all"
          />{{ $t("home.kinds") }}
        </p>
        <p @click="requestBookType('ebook')" class="bookTypeRequest">
          <input
            type="checkbox"
            class="form-check-input me-2 ms-1"
            v-model="typeBook.ebook"
          />{{ $t("home.elecBook") }}
        </p>
        <p @click="requestBookType('audio')" class="bookTypeRequest">
          <input
            type="checkbox"
            class="form-check-input me-2 ms-1"
            v-model="typeBook.audio"
          />{{ $t("home.audioBook") }}
        </p>
        <p @click="requestBookType('paper')" class="bookTypeRequest">
          <input
            type="checkbox"
            class="form-check-input me-2 ms-1"
            v-model="typeBook.paper"
          />
          paper
        </p>
        <hr class="my-4" />

        <!-- narxlar filteri -->
        <h6>
          <strong>{{ $t("home.price") }}</strong>
        </h6>
        <div class="row">
          <div class="col-6">
            <label class="price">{{ $t("home.from") }}</label>
            <input
              type="text"
              class="form-control mb-1"
              v-model="oBarMinValue"
            />
          </div>
          <div class="col-6">
            <label class="price">{{ $t("home.upTo") }}</label
            ><input type="text" class="form-control" v-model="oBarMaxValue" />
          </div>
        </div>
        <MultiRangeSlider
          baseClassName="multi-range-slider-bar-only"
          :minValue="oBarMinValue"
          :maxValue="oBarMaxValue"
          :max="5000000"
          :min="1000"
          :step="10000"
          :rangeMargin="0"
          @input="update_oBarValues"
        />

        <!-- kitob tili bo'ycha sorov yuborish -->
        <hr class="my-4" />
        <h6>
          <strong>{{ $t("home.lang") }}</strong>
        </h6>

        <p @click="requestLanguageType('all')" class="bookTypeRequest">
          <input
            type="checkbox"
            class="form-check-input me-2 ms-1"
            v-model="languageType.all"
          />
          {{ $t("home.allLang") }}
        </p>
        <p @click="requestLanguageType('uz')" class="bookTypeRequest">
          <input
            type="checkbox"
            class="form-check-input me-2 ms-1"
            v-model="languageType.uz"
          />{{ $t("home.uzb") }}
        </p>
        <p @click="requestLanguageType('en')" class="bookTypeRequest">
          <input
            type="checkbox"
            class="form-check-input me-2 ms-1"
            v-model="languageType.en"
          />English
        </p>
        <p @click="requestLanguageType('ru')" class="bookTypeRequest">
          <input
            type="checkbox"
            class="form-check-input me-2 ms-1"
            v-model="languageType.ru"
          />Русский
        </p>
      </div>

      <div class="col-8 ps-4 pe-0">
        <div class="d-flex justify-content-between">
          <h6 class="p-0">{{ $t("home.catalog") }}</h6>
          <button class="categoriaAll btn btnColor">
            <img src="@/assets/contact/arrowDown.png" alt="" />
          </button>
        </div>

        <div class="bookGrid mt-4" v-if="!store.errorCategory">
          <div
            class="p-0"
            v-for="(item, index) in store.catologType"
            :key="index"
            @click="selectBook(item.id)"
          >
            <!-- <div v-for="(item, index) in store.katalogtypep" :key="index">
              <pre>{{ item }}</pre>
            </div> -->
            <div class="bookData">
              <img :src="url + '/' + item?.image" class="categoyImg" />
              <button
                :class="item.is_bestseller == 1 ? 'btnBestseller' : 'newBook'"
              >
                {{ item.is_bestseller == 1 ? "Bestseller" : "Yangi" }}
              </button>
              <img
                src="../../assets/contact/booklike.png"
                alt=""
                class="bookLike"
              />

              <img
                src="../../assets/contact/karzinka.png"
                alt=""
                class="karzinka"
                @click="basketAdd($event, item.id, item.type.length)"
              />
              <div class="wrapper-icons">
                <img
                  src="../../assets/contact/eBook.png"
                  alt=""
                  class="ebook"
                />
                <img
                  src="../../assets/contact/bookopen.png"
                  alt=""
                  class="bookopen"
                />
                <img
                  src="../../assets/contact/headphone.png"
                  alt=""
                  class="headphone"
                />
              </div>
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
        <div v-else class="d-flex justify-content-center align-items-center  category">
          <h1 style="font-size: xx-large;">
            <!-- {{ store.errorCategory }} -->
            Ushbu kategoriya bo'yicha malumot topilmadi
          </h1>
        </div>

        <div class="mt-5 mb-5">
          <div class="d-flex justify-content-between mb-3">
            <h6 class="p-0">{{ $t("home.recently") }}</h6>
            <div>
              <button class="nextRight me-2" @click="swiper.slidePrev()">
                <img src="@/assets/contact/arrowRight.png" alt="" />
              </button>
              <button class="nextLeft" @click="swiper.slideNext()">
                <img src="@/assets/contact/arrowLeft.png" alt="" />
              </button>
            </div>
          </div>
          <Swiper
            :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]"
            :grid="{ rows: 1, fill: 'row' }"
            :slides-per-view="6"
            :space-between="10"
            :pagination="{ clickable: true }"
            @swiper="onSwiper"
          >
            <!-- <div class="bookGrid mt-3"> -->
            <div v-if="store1.recent && store1.recent.product">
              <SwiperSlide
                class="p-0 dataItem"
                v-for="(item, index) in store.recent"
                :key="index"
              >
                <div class="dataItem">
                  <!-- <img v-if="item.type == 'book'" :src="'https://beta.kytab.uz'+item.product.image" alt="" class="categoyImg" />
            <img v-else :src="'https://kytabshop.al-raqam.com'+item.product.image" alt="" class="categoyImg" /> -->

                  <button class="btnBestseller">Bestseller</button>
                  <button class="newBook">Yangi</button>
                  <img
                    src="../../assets/contact/booklike.png"
                    alt=""
                    class="bookLike"
                  />

                  <img
                    src="../../assets/contact/karzinka.png"
                    alt=""
                    class="karzinka"
                  />
                  <img
                    src="../../assets/contact/eBook.png"
                    alt=""
                    class="ebook"
                  />
                </div>
                <div class="ps-2">
                  <small class="title">{{ item.product?.name }}</small>
                  <pre>
            {{ item.product }}

            </pre
                  >
                </div>
                <div class="ps-2">
                  <small class="author">{{ item.product.author }}</small>
                  <small class="author">{{
                    item.product.description_uz
                  }}</small>
                </div>
                <div>
                  <small v-if="item.product.price" class="price"
                    >{{ item.product.price }} so'm</small
                  >
                  <!-- <small v-else class="price">Tekin</small> -->
                </div>
                <img src="../../assets/contact/Star.png" alt="" />
                <small class="stats ms-2">5,0</small>
                <span class="starsNumbers">(32)</span>
              </SwiperSlide>
            </div>

            <!-- </div> -->
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import MultiRangeSlider from "multi-range-slider-vue";
import "@/node_modules/multi-range-slider-vue/MultiRangeSliderBlack.css";
import "@/node_modules/multi-range-slider-vue/MultiRangeSliderBarOnly.css";
import { useCategory } from "@/store/category";
const store = useCategory();
const store1 = usePayment();
const storeBasket = useBasketStore();
const url = useRuntimeConfig().public.bookUrl;
let lang_book = ref("all");
let type_book = ref("all");
let swiper = null;
const onSwiper = (sw) => {
  swiper = sw;
};

const basketAdd = (e, id, type) => {
  e.stopPropagation();
  storeBasket
    .basketAdd({ product_id: id, type: type ? "book" : "product" })
    .then(() => {
      notify();
    });
};

const notify = () => {
  useNuxtApp().$toast.success("Savatchaga qo'shildi", {
    autoClose: 5000,
    dangerouslyHTMLString: true,
  });
};

const alld = ref(5);
const typeBook = ref({
  all: true,
  paper: false,
  ebook: false,
  audio: false,
});

const languageType = ref({
  all: true,
  uz: false,
  ru: false,
  en: false,
});
let oBarMinValue = ref(1000);
let oBarMaxValue = ref(500000);

// Get ID
const route = useRoute();
const router = useRouter();
let catologChild = ref(null);

const activeCatolog = (id) => {
  if (store.katalog.childrens) {
    let findCatolog = store.katalog.childrens.find((item) => item.id == id);
    catologChild.value = findCatolog;
    router.replace(`/Categories/${findCatolog.id}`);
  }
};

// type book request
const requestBookType = (type) => {
  const bookType = typeBook.value;
  for (let key in bookType) {
    bookType[key] = key === type;
  }
  type_book.value = type;
  store.fetchCategoryType(
    route.params.id,
    type_book.value,
    lang_book.value,
    oBarMinValue.value,
    oBarMaxValue.value
  );
};

// language book request
const requestLanguageType = (type) => {
  const bookType = languageType.value;
  for (let key in bookType) {
    bookType[key] = key === type;
  }

  lang_book.value = type;
  store.fetchCategoryType(
    route.params.id,
    type_book.value,
    lang_book.value,
    oBarMinValue.value,
    oBarMaxValue.value
  );
};

const update_oBarValues = (e) => {
  oBarMinValue.value = e.minValue;
  oBarMaxValue.value = e.maxValue;
  store.fetchCategoryType(
    route.params.id,
    type_book.value,
    lang_book.value,
    oBarMinValue.value,
    oBarMaxValue.value
  );
};

onMounted(() => {
  // bitta category ni chaqirish uchun get method
  store.fetchKatalog(route.params.id).then(() => {
    activeCatolog(route.params.id);
  });
  store.fetchCatgoryBooks(route.params.id);
  store.fetchCategoryType(
    route.params.id,
    type_book.value,
    lang_book.value,
    oBarMinValue.value,
    oBarMaxValue.value
  );
});

const selectBook = (id) => {
  const router = useRouter();
  router.push(`/book/${id}`);
};
</script>
<style scoped>
.wrapper-icons {
  position: absolute;
  display: flex;
  gap: 5px;
  right: 0.625rem;
  bottom: 0.625rem;
}

.sideBar {
  height: auto;
  border-radius: 0.625rem;
  background: #fafafa;
}

.container-item {
  cursor: pointer;
}

.sideBar h6 {
  font-size: 1.125rem;
  font-weight: 400;
}

.categoriaData {
  font-size: 0.875rem;
  font-weight: 500;
  color: #35363d;
}

.categoriaData:hover {
  cursor: pointer;
}

.categoriaAll {
  font-size: 0.875rem;
  color: #9196ad;
  cursor: pointer;
}

.price {
  color: #8f8e8e;
  font-size: 0.8125rem;
}

.btnColor {
  background: #fafafa;
}

.categoyImg {
  width: 100%;
  height: 100%;
  border-radius: 0.4375rem;
}

.btnBestseller {
  background: #67c926;
  position: absolute;
  left: -0.3125rem;
  top: 0.625rem;
  border: none;
  border-radius: 0.1875rem;
  font-size: 0.75rem;
  color: #fff;
  font-weight: 600;
  z-index: 1;
  width: 4.875rem;
  height: 1.4375rem;
}

.newBook {
  background: #ff673d;
  position: absolute;
  left: -0.3125rem;
  top: 0.625rem;
  border: none;
  border-radius: 0.1875rem;
  font-size: 0.75rem;
  color: #fff;
  font-weight: 600;
  width: 3.0625rem;
  height: 1.4375rem;
}

.bookData {
  position: relative;
  height: 16.25rem;
}

.bookLike {
  position: absolute;
  right: 0.625rem;
  top: 0.625rem;
  cursor: pointer;
  display: none;
}

.karzinka {
  position: absolute;
  right: 0.625rem;
  top: 2.8125rem;
  cursor: pointer;
  display: none;
}

.ebook {
  cursor: pointer;
  display: none;
}

.bookopen {
  cursor: pointer;
  display: none;
}


.headphone {
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
  gap: 0.9375rem;
}

.starsNumbers {
  color: #9196ad;
  font-size: 0.8125rem;
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

.bookTypeRequest {
  cursor: pointer;
}

.dataItem {
  box-shadow: 0px 2px 4px 0px #dbdbdb40;
  border-radius: 0 0 7px 7px;
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

.karzinka {
  position: absolute;
  right: 10px;
  top: 45px;
  cursor: pointer;
  display: none;
}

.nextRight {
  width: 30px;
  height: 30px;
  background: #f6f6f6;
  border-radius: 20px 0 0 20px;
  cursor: pointer;
  border: none;
}

.nextLeft {
  width: 30px;
  height: 30px;
  background: #f6f6f6;
  border-radius: 0 20px 20px 0;
  cursor: pointer;
  border: none;
}
.ebook {
  position: absolute;
  right: 10px;
  bottom: 10px;
  cursor: pointer;
  display: none;
}

.bookDataa:hover .bookLike,
.bookDataa:hover .ebook,
.bookDataa:hover .karzinka {
  display: block;
}

.title {
  font-weight: 1000;
  color: black;
}

.author {
  color: #5b5e6d;
  font-weight: 600;
}

.bookLike {
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  display: none;
}

.categoyImg {
  width: 100%;
  height: 100%;
  border-radius: 7px;
}

.aboutMenu div:hover {
  cursor: pointer;
  font-weight: 500;
}

.bookTypeActive {
  border: 1px solid #41a2db !important;
  color: #41a2db !important;
}
.price {
  color: black;
  font-weight: 800;
}
</style>
