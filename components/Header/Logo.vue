<template>
<div class="container  containerLogo" >
  <div class="row d-flex align-items-center border "> 
    <div class="col-2 border px-0">
      <span class=" py-0 pl-5">
        <img src="~/assets/kytabLogo.png" alt="site-logo" title="site-logo" />
      </span>

      <button class="btn btnCategory"><img src="~/assets/contact/category.png" alt=""> Katalog</button>
    </div>
    <div class="col-6"><div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="kitob izlash" />
      <span class="input-group-text">izlash</span>
    </div></div>

    
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
}
.btnCategory {
  background: #EBF2FC;

}
</style>
