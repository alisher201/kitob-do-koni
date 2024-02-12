<template>
  <div>

    <div style="position: absolute; background: #31313159; width: 100%; height: 130vh; z-index: 4; "
      :style="{ display: inputFocus ? 'block' : 'none' }" @click="focusNone">
    </div>
    <div class="containerLogo d-flex align-items-center">
      <div class="container d-flex align-items-center justify-content-between px-0">
        <span class="py-0 pl-5">
          <img src="~/assets/kytabLogo.png" alt="site-logo" title="site-logo" />
        </span>

        <button class="btn btnCategory ms-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample"
          aria-expanded="false" aria-controls="collapseExample">
          <img src="~/assets/contact/category.png" alt="" /> Katalog
        </button>
        <!-- {{ inputFocus }}
        {{ searchList }} -->
        <div style="position: relative; z-index: 4;">
          <div class="input-group" style="width: 479px">


            <input type="text" @change="result" v-model="searchbooks" class="form-control" style="height: 44px"
              placeholder="kitob izlash..." @focus="BookSearch" @keydown.enter="searchProduct" />


            <span class="input-group-text d-flex justify-content-center align-items-center"
              style="width: 68px; height: 44px" @click="searchProduct"><img src="~/assets/contact/bx_search-alt-2.png"
                alt="" /></span>
          </div>
          <div class="mt-2" style="position: absolute; z-index: 999; width: 100%;" v-if="inputFocus && searchList">
            <HeaderSearchData @searchEmit="selectData" />
          </div>

        </div>


        <div class="ms-5 karzinka" @click="$router.push('/basket')">
          <img src="@/assets/contact/karzinka.png" alt="" />
          <span class="ms-1 forFont">{{ $t('header.basket') }}</span>
        </div>
        <div class="dataCursor" @click="$router.push('/favourite')">
          <img src="@/assets/contact/like.png" alt="" />
          <span class="ms-1 forFont">{{ $t('header.favorites') }}</span>
        </div>
        <div class="dataCursor" @click="profile">
          <img src="@/assets/contact/user.png" alt="" />
          <span class="ms-1 forFont">{{ $t('header.profile') }}</span>
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
const router = useRouter()
const searchbooks = ref(null)
let inputFocus = ref(false)
const store = useTestTStore();
let searchList = ref(true)



const BookSearch = () => {
  document.body.style.overflow = 'hidden'
  inputFocus.value = true
  store.searchValue = null
  store.searchValue = searchbooks.value
}


const selectData = (data) => {
  // store.serchResult = null
  searchbooks.value = data
  store.searchValue = null

  searchProduct()


}
const profile = () => {
  let user = false
  if (user) {
    router.push('/profile')
  }
  else {
    router.push('/register')
  }
}

watch(searchbooks, (newVal) => {
  // store.searchValue = searchbooks.value
  sendRequest();


});

// Bekintga so'rovni yuborish funktsiyasi
const sendRequest = () => {
  // store.fechSearchTop()

  store.searchData(searchbooks.value)

    .then(() => {
      // console.log(store.productSearch.result.length > 0 ? true : false);
      // store.serchResult = res
      if (store.productSearch.result.length == 0) {
        // searchList.value = false
        searchList.value = false
        store.searchValue = searchbooks.value
        console.log('gag');

      }
      else {
        store.searchValue = searchbooks.value
        searchList.value = true


        if (!searchbooks.value) {
          store.productSearch = null


        }


      }

    })


};
const searchProduct = () => {
  focusNone()
  if (searchbooks.value?.length > 3) {
    // qidruvlarni tarixia uchun qidirilgan productlarni  post qiib becendga jo'natish
    store.createHistoryBook({ word: searchbooks.value })
    // book apisidan ma'lumot izlash
    store.fetchBookSearch(searchbooks.value)
      .then(() => {
        // product apisidan ma'lumotlar izlash 
        store.searchProductData(searchbooks.value)

          .then(() => {
            if (store.productSearch?.result) {
              // store.serchResult = null
              searchList.value = false
              store.searchValue = null
              // store.serchResult = res
              // console.log('dfadfsa');
              router.push('/search')
            }
          })

      })



  }


}
const focusNone = () => {
  document.body.style.overflow = 'visible'
  inputFocus.value = false
}


onMounted(() => {

})
</script> 

<style scoped>
/* @media only screen and (max-width: 768px) {
  .navbar-brand {
    margin-left: 50px;
  }
} */
.containerLogo {
  height: 90px;
  border-bottom: 1px solid #d1d1d1;
}

.btnCategory {
  background: #ebf2fc;
  height: 44px;
}

.forFont {
  font-size: 14px;
}

.dataCursor {
  cursor: pointer;
  padding-left: 8px;
  border-left: 1px solid #d1d1d1;
}

.karzinka {
  cursor: pointer;
}

::placeholder {
  font-size: 15px;
}

.colapseContainer {
  position: absolute;
  z-index: 999;
  background: #fff;
  width: 100%;
}
</style>
