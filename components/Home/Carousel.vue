<template>
  <section class="container mt-5">
    fffff
    <div class="row ">
      <div class="col-8 p-0">
        <div
          id="carouselExampleDark"
          class="carousel carousel-dark slide carouselSize"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <img src="~/assets/jum1.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src="~/assets/jum2.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img
                src="~/assets/carousel1.png"
                class="d-block w-100"
                alt="..."
              />
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
        <div class="">
          <img src="~/assets/jumaMuborak.png" alt="" class="advertisement">
        </div>
        <div class="mt-3">
          <img src="~/assets/jumaMuborak.png" alt="" class="advertisement"/>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const store = useTestTStore()


onMounted(() => {
  console.log('jjjjjj');

})
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
.advertisement {width: 100%;
  height: 142px;
  border-radius: 12px;
}
</style>
