<template>
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

      <div class="input-group" style="width: 479px; height: 44px">
        <input type="text" class="form-control" placeholder="kitob izlash..." />
        <span
          class="input-group-text d-flex justify-content-center align-items-center"
          style="width: 68px"
          ><img src="~/assets/contact/bx_search-alt-2.png" alt=""
        /></span>
      </div>
      <div class="ms-5 karzinka">
        <img src="@/assets/contact/karzinka.png" alt="" />
        <span class="ms-1 forFont">Savatcha</span>
      </div>
      <div class="dataCursor">
        <img src="@/assets/contact/like.png" alt="" />
        <span class="ms-1 forFont">Sevimlilar</span>
      </div>
      <div class="dataCursor">
        <img src="@/assets/contact/user.png" alt="" />
        <span class="ms-1 forFont">Profile</span>
      </div>
    </div>
  </div>

  <div class="collapse colapseContainer" id="collapseExample">
    <div class="" style="min-height: 100vh">
      <HomeCategoriesList />
    </div>
    
  </div>
</template>

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
