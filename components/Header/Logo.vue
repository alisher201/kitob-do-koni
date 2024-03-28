<template>
  <div>
    <div
      style="
        position: absolute;
        background: #31313159;
        width: 100%;
        height: 130vh;
        z-index: 4;
      "
      :style="{ display: inputFocus ? 'block' : 'none' }"
      @click="focusNone"
    ></div>
    <div class="containerLogo d-flex align-items-center">
      <div
        class="container d-flex align-items-center justify-content-between px-0"
      >
        <span class="py-0 pl-5">
          <img src="~/assets/kytabLogo.png" alt="site-logo" title="site-logo" />
        </span>

        <button
          class="btn btnCategory ms-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <img src="~/assets/contact/category.png" alt="" /> Katalog
        </button>
        
        <!-- {{ inputFocus }}
        {{ searchList }} -->
        <div style="position: relative; z-index: 4">
          <div class="input-group" style="width: 479px">
            <input
              type="text"
              @change="result"
              v-model="searchbooks"
              class="form-control"
              style="height: 44px"
              placeholder="kitob izlash..."
              @focus="BookSearch"
              @keydown.enter="searchProduct"
            />

            <span
              class="input-group-text d-flex justify-content-center align-items-center"
              style="width: 68px; height: 44px"
              @click="searchProduct"
              ><img src="~/assets/contact/bx_search-alt-2.png" alt=""
            /></span>
          </div>
          <div
            class="mt-2"
            style="position: absolute; z-index: 999; width: 100%"
            v-if="inputFocus && searchList"
          >
            <HeaderSearchData @searchEmit="selectData" />
          </div>
        </div>

        <div class="ms-5 karzinka" @click="router.push('/basket')">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" id="karzinka">
            <path
              d="M13.655 8.61538V4.46154C13.655 3.54348 13.2903 2.66303 12.6411 2.01386C11.9919 1.3647 11.1115 1 10.1934 1C9.27536 1 8.39491 1.3647 7.74574 2.01386C7.09658 2.66303 6.73188 3.54348 6.73188 4.46154V8.61538M17.2143 6.77569L18.3802 17.8526C18.4448 18.4665 17.9648 19 17.3473 19H3.03957C2.89392 19.0002 2.74986 18.9697 2.61676 18.9105C2.48365 18.8514 2.36448 18.7649 2.26698 18.6567C2.16948 18.5485 2.09583 18.421 2.05082 18.2824C2.00582 18.1439 1.99045 17.9975 2.00573 17.8526L3.1725 6.77569C3.19941 6.52052 3.31984 6.28434 3.51058 6.1127C3.70131 5.94106 3.94883 5.84611 4.20542 5.84615H16.1814C16.7131 5.84615 17.159 6.24769 17.2143 6.77569ZM7.07804 8.61538C7.07804 8.70719 7.04157 8.79524 6.97665 8.86015C6.91173 8.92507 6.82369 8.96154 6.73188 8.96154C6.64008 8.96154 6.55203 8.92507 6.48711 8.86015C6.4222 8.79524 6.38573 8.70719 6.38573 8.61538C6.38573 8.52358 6.4222 8.43553 6.48711 8.37062C6.55203 8.3057 6.64008 8.26923 6.73188 8.26923C6.82369 8.26923 6.91173 8.3057 6.97665 8.37062C7.04157 8.43553 7.07804 8.52358 7.07804 8.61538ZM14.0011 8.61538C14.0011 8.70719 13.9646 8.79524 13.8997 8.86015C13.8348 8.92507 13.7468 8.96154 13.655 8.96154C13.5632 8.96154 13.4751 8.92507 13.4102 8.86015C13.3453 8.79524 13.3088 8.70719 13.3088 8.61538C13.3088 8.52358 13.3453 8.43553 13.4102 8.37062C13.4751 8.3057 13.5632 8.26923 13.655 8.26923C13.7468 8.26923 13.8348 8.3057 13.8997 8.37062C13.9646 8.43553 14.0011 8.52358 14.0011 8.61538Z"
              stroke="#35363D" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"
            class="karzinka2" id="karzinka2">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M6.24958 5V5.625H4.59374C3.79374 5.625 3.12374 6.22833 3.03958 7.02417L1.98708 17.0242C1.96418 17.242 1.98733 17.4621 2.05501 17.6704C2.12268 17.8787 2.23338 18.0704 2.37993 18.2331C2.52647 18.3958 2.70558 18.5259 2.90564 18.615C3.10571 18.704 3.32226 18.75 3.54124 18.75H16.4579C16.6769 18.75 16.8934 18.704 17.0935 18.615C17.2936 18.5259 17.4727 18.3958 17.6192 18.2331C17.7658 18.0704 17.8765 17.8787 17.9441 17.6704C18.0118 17.4621 18.035 17.242 18.0121 17.0242L16.9596 7.02417C16.9192 6.64012 16.7381 6.28463 16.4511 6.02626C16.1641 5.76789 15.7916 5.62494 15.4054 5.625H13.7496V5C13.7496 4.00544 13.3545 3.05161 12.6512 2.34835C11.948 1.64509 10.9941 1.25 9.99957 1.25C9.00501 1.25 8.05119 1.64509 7.34793 2.34835C6.64466 3.05161 6.24958 4.00544 6.24958 5ZM9.99957 2.5C9.33653 2.5 8.70065 2.76339 8.23181 3.23223C7.76297 3.70107 7.49958 4.33696 7.49958 5V5.625H12.4996V5C12.4996 4.33696 12.2362 3.70107 11.7673 3.23223C11.2985 2.76339 10.6626 2.5 9.99957 2.5ZM7.49958 9.375C7.49958 10.038 7.76297 10.6739 8.23181 11.1428C8.70065 11.6116 9.33653 11.875 9.99957 11.875C10.6626 11.875 11.2985 11.6116 11.7673 11.1428C12.2362 10.6739 12.4996 10.038 12.4996 9.375V8.75C12.4996 8.58424 12.5654 8.42527 12.6826 8.30806C12.7998 8.19085 12.9588 8.125 13.1246 8.125C13.2903 8.125 13.4493 8.19085 13.5665 8.30806C13.6837 8.42527 13.7496 8.58424 13.7496 8.75V9.375C13.7496 10.3696 13.3545 11.3234 12.6512 12.0266C11.948 12.7299 10.9941 13.125 9.99957 13.125C9.00501 13.125 8.05119 12.7299 7.34793 12.0266C6.64466 11.3234 6.24958 10.3696 6.24958 9.375V8.75C6.24958 8.58424 6.31542 8.42527 6.43263 8.30806C6.54984 8.19085 6.70882 8.125 6.87458 8.125C7.04034 8.125 7.19931 8.19085 7.31652 8.30806C7.43373 8.42527 7.49958 8.58424 7.49958 8.75V9.375Z"
              fill="#35363D" />
          </svg>
          <span class="ms-1 forFont">{{ $t("header.basket") }}</span>
        </div>
        <div  style="background-color:red; border-radius:  50%;padding: 5px;  width: 25px; height: 25px; display: flex; justify-content: center; align-items: center;">
          <p style="color:white; font-size: 14px;">
            {{ basketLength }}

          </p>
        </div>
        <div class="dataCursor" @click="router.push('/favourite')">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"
            id="dataCursor">
            <path
              d="M18.4545 7.36364C18.4545 4.95394 16.4192 3 13.9086 3C12.0322 3 10.4206 4.09188 9.72727 5.65018C9.03394 4.09188 7.4223 3 5.54497 3C3.03636 3 1 4.95394 1 7.36364C1 14.3648 9.72727 19 9.72727 19C9.72727 19 18.4545 14.3648 18.4545 7.36364Z"
              stroke="#35363D" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span class="ms-1 forFont">{{ $t("header.favorites") }}</span>
        </div>
        <div  style="background-color:red; border-radius:  50%; padding: 5px; width: 25px; height: 25px; display: flex; justify-content: center; align-items: center;">
          <p style="color:white; font-size: 14px;">
            {{ likeLength }}
          </p>
        </div>
        <div class="dataCursor" @click="profile">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"
            id="dataProfile">
            <path
              d="M13.7504 5.26923C13.7504 6.13628 13.408 6.96782 12.7984 7.58092C12.1888 8.19402 11.3621 8.53846 10.5 8.53846C9.63793 8.53846 8.81117 8.19402 8.2016 7.58092C7.59202 6.96782 7.24957 6.13628 7.24957 5.26923C7.24957 4.40217 7.59202 3.57063 8.2016 2.95753C8.81117 2.34444 9.63793 2 10.5 2C11.3621 2 12.1888 2.34444 12.7984 2.95753C13.408 3.57063 13.7504 4.40217 13.7504 5.26923ZM4 17.5772C4.02785 15.8618 4.72492 14.2262 5.94088 13.023C7.15684 11.8198 8.79425 11.1455 10.5 11.1455C12.2058 11.1455 13.8432 11.8198 15.0591 13.023C16.2751 14.2262 16.9721 15.8618 17 17.5772C14.9608 18.5177 12.7434 19.003 10.5 19C8.18049 19 5.97886 18.4909 4 17.5772Z"
              stroke="#35363D" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span class="ms-1 forFont">{{ $t("header.profile") }}</span>
        </div>
      </div>
    </div>

    <div class="collapse colapseContainer" id="collapseExample">
      <div class="" style="min-height: 100vh">
        <HomeCategoriesList />
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
const searchbooks = ref(null);
const watchedValue = ref();
let inputFocus = ref(false);
const store = useTestTStore();
let searchList = ref(true);
const basketStore = useBasketStore();
const basketLength = ref(0)
const likeLength = ref(0)

const BookSearch = () => {
  document.body.style.overflow = "hidden";
  inputFocus.value = true;
  store.searchValue = null;
  store.searchValue = searchbooks.value;
};

const selectData = (data) => {
  // store.serchResult = null
  searchbooks.value = data;
  store.searchValue = null;

  searchProduct();
};
const profile = () => {
  let get = localStorage.getItem("type");
  if (get == "client") {
    router.push("/profile");
  } else {
    router.push("/login");
  }
};

watch(searchbooks, (newVal) => {

  sendRequest();

});

// Bekintga so'rovni yuborish funktsiyasi
const sendRequest = () => {
  // store.fechSearchTop()

  store.fetchBookSearch(searchbooks.value)
  store.productSearch = []
  store
    .fetchProductSearch(searchbooks.value)

    .then(() => {
      store
        .fetchProductSearch(searchbooks.value).then(() => {
          if (store.productSearch.length == 0) {
        // searchList.value = false
        searchList.value = false;
        store.searchValue = searchbooks.value;
      } else {
        store.searchValue = searchbooks.value;
        searchList.value = true;

        if (!searchbooks.value) {
          store.productSearch = [];
        }
      }
          
        })
      
   

    })


};
const searchProduct = () => {
  focusNone();
  if (searchbooks.value?.length > 3) {
    // qidruvlarni tarixia uchun qidirilgan productlarni  post qiib becendga jo'natish
    store.createHistoryBook({ word: searchbooks.value });
    // book apisidan ma'lumot izlash
    store.fetchBookSearch(searchbooks.value).then(() => {
      // product apisidan ma'lumotlar izlash
      store
        .fetchProductSearch(searchbooks.value)

        .then(() => {
          if (store.productSearch) {
            // store.serchResult = null
            searchList.value = false;
            store.searchValue = [];
            // store.serchResult = res
            // console.log('dfadfsa');
            router.push("/search");
          }
        });
    });
  }
};
const focusNone = () => {
  document.body.style.overflow = "visible";
  inputFocus.value = false;
};

onMounted(() => {
  const jwtToken = localStorage.getItem('jwtToken')
  if(!jwtToken) {
    store.uuIdPost({
      uuid: String(new Date().getTime()),
      model: navigator.userAgent,
    });
  }
  basketStore.basketGet().then(() => {
    if (basketStore.basket) {
      basketLength.value = basketStore.basket.length;
    }
  });
  
  basketStore.favourite().then(() => {
    if (basketStore.like) {
      likeLength.value = basketStore.like.length;
    }
  });
});

watch(() => basketStore.basket, (newBasket, oldBasket) => {
  if (newBasket) {
    basketLength.value = newBasket.length;
  }
});

watch(() => basketStore.like, (newLike, oldLike) => {
  if (newLike) {
    likeLength.value = newLike.length;
  }
});
</script>

<style scoped>
.active {
  fill: #35363d;
}

.karzinka2 {
  display: none;
}

.containerLogo {
  height: 90px;
  border-bottom: 1px solid #d1d1d1;
}

.btnCategory {
  background: #ebf2fc;
  height: 44px;
}

.forFont {
  color: #35363d;
  font-size: 14px;
}

.dataCursor {
  cursor: pointer;
  padding-left: 8px;
  border-left: 1px solid #d1d1d1;
  display: flex;
  align-items: center;
  gap: 6px;
}

.karzinka {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
}
</style>
