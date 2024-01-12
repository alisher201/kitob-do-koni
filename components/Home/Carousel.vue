<template>
  <section class="container mt-5">
    <div class="row">
      <div class="col-8 p-0">
        <div
          id="carouselExampleDark"
          class="carousel carousel-dark slide carouselSize"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div v-for="(img, index) in store.baner" :key="index" class="carousel-item" :class="{ active: index === 0 }">
              <!-- {{img}} -->
              <img :src="url +'/' + img.banner" class="d-block w-100" :alt="img.alternative_text" />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
<div class="col-4">
  <div>
    <img :src="url + '/' + store.banner[0].banner" alt="" class="advertisement" />
  </div>
  <div class="mt-3">                            
    <img src="~/assets/jumaMuborak.png" alt="" class="advertisement" />
  </div>
</div>

    </div>
  </section>
  <!-- {{ store.baner }} -->
</template>
<script setup>
import { useRuntimeConfig } from "nuxt/app";
const url= useRuntimeConfig().public.siteUrl
const store = useTestTStore();

onMounted(() => {
  store.fechBanner();
  console.log(url);
});
</script>

<style>
.img-fluid {
  min-width: 800px !important;
}

.carousel-indicators button {
  background-color: white;
  height: 20px;
  width: 20px;
  border-radius: 30px;
  border: 0.6px solid rgb(129, 127, 127);
}

.carousel-indicators > .active {
  background: #e0f0f8;
}

.carouselSize img {
  /* width: 700px !important; */
  height: 300px;
  border-radius: 10px;
}
.advertisement {
  width: 100%;
  height: 142px;
  border-radius: 12px;
}
</style>
