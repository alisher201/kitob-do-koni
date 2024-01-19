<template>
  <div>
    <div style="position: absolute; background: #31313159; width: 100%; height: 130vh; z-index: 4; "
    :style="{ display: inputFocus ? 'block' : 'none' }">
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
      <div style="position: relative; z-index: 4;">
        <div class="input-group" style="width: 479px">
          <input type="text" v-model="searchbooks" class="form-control" style="height: 44px" :placeholder="$t('header.search')"
            @focus="BookSearch" @blur="inputBlur" />
          <span class="input-group-text d-flex justify-content-center align-items-center"
            style="width: 68px; height: 44px"><img src="~/assets/contact/bx_search-alt-2.png" alt="" /></span>

        </div>
        <div class="mt-2" style="position: absolute; z-index: 999; width: 100%;" v-if="inputFocus">
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
const inputFocus = ref(false)
 const store = useTestTStore();


const BookSearch = () => {
  document.body.style.overflow = 'hidden'
  inputFocus.value = true
}
const inputBlur = () => {
  setTimeout(() => {
    document.body.style.overflow = 'visible'
    inputFocus.value = false

  }, 1000);

}

const selectData = (data) => {
  searchbooks.value = data
  router.push('/SearchBook')

}
const profile = () => {
  let user = false
if(user) {
  router.push('/profile')
}
else {
  router.push('/register')
}
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
