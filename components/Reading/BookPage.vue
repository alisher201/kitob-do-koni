<template>
  <section class="">
    <div class="section">
      <div class="container section">
        <div class="section_list">
          <img src="../../assets/profile/back1.png" alt="" />
          <h1>salom</h1>
        </div>
        <div class="section_div d-flex">
          <div>
            <img
              class="mx-3 cursor-pointer"
              @click="toggleDropdown"
              src="../../assets/profile/setting.png"
              alt=""
            />
            <div
              v-show="isDropdownOpen"
              id="myDropdown"
              class="dropdown-content rounded mt-3 mr-2"
            >
              <p>Yorug'lik</p>
              <p>Shrift</p>
              <p>Hajmi</p>
            </div>
          </div>
          <div>
            <img src="../../assets/profile/stecer.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <div class="">
        <div class="p-0">
          <div
            id="carouselExampleDark"
            class="carousel-dark slide carouselSize"
            data-bs-ride="carousel"
          >
            <p class="select">1-Bob</p>
            <h2 class="select_h2">Malkolm Gladuell</h2>
            <h1 class="select_h1">Zukkolar va landovurlar</h1>
            <Swiper
              :modules="[SwiperEffectCreative, SwiperPagination]"
              :slides-per-view="1"
              :pagination="{
                type: 'progressbar',
                containerModifierClass: 'swiper-pagination-',
              }"
              @swiper="onSwiper"
            >
              <SwiperSlide v-for="(slide, idx) in slides" :key="idx">
                <div class="d-flex p-2">
                  <div>
                    <p>{{ slide.text1 }}</p>
                  </div>
                  <div>
                    <p>{{ slide.text2 }}</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div class="swiper-pagination-progressbar"></div>
            <div>
              <button
                class="carousel-control-prev pl-2"
                @click="swiper.slidePrev()"
                type="button"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                @click="swiper.slideNext()"
                type="button"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
let swiper = null;
const slides = [
  {
    text1:
      "Lorem1 ipsum dolor, sit amet consectetur adipisicing elit. Odit fuga aut provident eaque vero tenetur excepturi incidunt a voluptate alias perferendis, quis minus corporis repellat, hic consequuntur. Quisquam earum reiciendis aliquam minima nesciunt sint optio nihil, sunt possimus voluptatibus velit accusantium quia excepturi quam ad expedita repudiandae. Ad sint eligendi dignissimos, repudiandae eos blanditiis alias enim magni exercitationem, ipsa, nam ab necessitatibus aperiam officiis reprehenderit possimus temporibus. Aperiam quidem sint dignissimos eaque architecto amet quo sed, eum cupiditate. Dignissimos ipsa necessitatibus, alias quaerat neque voluptates atque laboriosam nesciunt deleniti natus eaque. Quam voluptatum quisquam saepe doloribus facere porro sint illum.Lorem1 ipsum dolor, sit amet consectetur adipisicing elit. Odit fuga aut provident eaque vero tenetur excepturi incidunt a voluptate alias perferendis, quis minus corporis repellat, hic consequuntur. Quisquam earum reiciendis aliquam minima nesciunt sint optio nihil, sunt possimus voluptatibus velit accusantium quia excepturi quam ad expedita repudiandae. Ad sint eligendi dignissimos, repudiandae eos blanditiis alias enim magni exercitationem, ipsa, nam ab necessitatibus aperiam officiis reprehenderit possimus temporibus. Aperiam quidem sint dignissimos eaque architecto amet quo sed, eum cupiditate. Dignissimos ipsa necessitatibus, alias quaerat neque voluptates atque laboriosam nesciunt deleniti natus eaque. Quam voluptatum quisquam saepe doloribus facere porro sint illum.Lorem1 ipsum dolor, sit amet consectetur adipisicing elit. Odit fuga aut provident eaque vero tenetur excepturi incidunt a voluptate alias perferendis, quis minus corporis repellat, hic consequuntur. Quisquam earum reiciendis aliquam minima nesciunt sint optio nihil, sunt possimus voluptatibus velit accusantium quia excepturi quam ad expedita repudiandae. Ad sint eligendi dignissimos, repudiandae eos blanditiis alias enim magni exercitationem, ipsa, nam ab necessitatibus aperiam officiis reprehenderit possimus temporibus. Aperiam quidem sint dignissimos eaque architecto amet quo sed, eum cupiditate. Dignissimos ipsa necessitatibus, alias quaerat neque voluptates atque laboriosam nesciunt deleniti natus eaque. Quam voluptatum quisquam saepe doloribus facere porro sint illum.Lorem1 ipsum dolor, sit amet consectetur adipisicing elit. Odit fuga aut provident eaque vero tenetur excepturi incidunt a voluptate alias perferendis, quis minus corporis repellat, hic consequuntur.",
    text2:
      "Lorem2 ipsum dolor, sit amet consectetur adipisicing elit. Odit fuga aut provident eaque vero tenetur excepturi incidunt a voluptate alias perferendis, quis minus corporis repellat, hic consequuntur. Quisquam earum reiciendis aliquam minima nesciunt sint optio nihil, sunt possimus voluptatibus velit accusantium quia excepturi quam ad expedita repudiandae. Ad sint eligendi dignissimos, repudiandae eos blanditiis alias enim magni exercitationem, ipsa, nam ab necessitatibus aperiam officiis reprehenderit possimus temporibus. Aperiam quidem sint dignissimos eaque architecto amet quo sed, eum cupiditate. Dignissimos ipsa necessitatibus, alias quaerat neque voluptates atque laboriosam nesciunt deleniti natus eaque. Quam voluptatum quisquam saepe doloribus facere porro sint illum.Lorem1 ipsum dolor, sit amet consectetur adipisicing elit. Odit fuga aut provident eaque vero tenetur excepturi incidunt a voluptate alias perferendis, quis minus corporis repellat, hic consequuntur. Quisquam earum reiciendis aliquam minima nesciunt sint optio nihil, sunt possimus voluptatibus velit accusantium quia excepturi quam ad expedita repudiandae. Ad sint eligendi dignissimos, repudiandae eos blanditiis alias enim magni exercitationem, ipsa, nam ab necessitatibus aperiam officiis reprehenderit possimus temporibus. Aperiam quidem sint dignissimos eaque architecto amet quo sed, eum cupiditate. Dignissimos ipsa necessitatibus, alias quaerat neque voluptates atque laboriosam nesciunt deleniti natus eaque. Quam voluptatum quisquam saepe doloribus facere porro sint illum.Lorem1 ipsum dolor, sit amet consectetur adipisicing elit. Odit fuga aut provident eaque vero tenetur excepturi incidunt a voluptate alias perferendis, quis minus corporis repellat, hic consequuntur. Quisquam earum reiciendis aliquam minima nesciunt sint optio nihil, sunt possimus voluptatibus velit accusantium quia excepturi quam ad expedita repudiandae. Ad sint eligendi dignissimos, repudiandae eos blanditiis alias enim magni exercitationem, ipsa, nam ab necessitatibus aperiam officiis reprehenderit possimus temporibus. Aperiam quidem sint dignissimos eaque architecto amet quo sed, eum cupiditate. Dignissimos ipsa necessitatibus, alias quaerat neque voluptates atque laboriosam nesciunt deleniti natus eaque. Quam voluptatum quisquam saepe doloribus facere porro sint illum.Lorem1 ipsum dolor, sit amet consectetur adipisicing elit. Odit fuga aut provident eaque vero tenetur excepturi incidunt a voluptate alias perferendis, quis minus corporis repellat, hic consequuntur.",
  },
  {
    text1:
      "Lorem1 ipsum dolor, sit amet consectetur adipisicing elit. Odit fuga aut provident eaque vero tenetur excepturi incidunt a voluptate alias perferendis, quis minus corporis repellat, hic consequuntur. Quisquam earum reiciendis aliquam minima nesciunt sint optio nihil, sunt possimus voluptatibus velit accusantium quia excepturi quam ad expedita repudiandae. Ad sint eligendi dignissimos, repudiandae eos blanditiis alias enim magni exercitationem, ipsa, nam ab necessitatibus aperiam officiis reprehenderit possimus temporibus. Aperiam quidem sint dignissimos eaque architecto amet quo sed, eum cupiditate. Dignissimos ipsa necessitatibus, alias quaerat neque voluptates atque laboriosam nesciunt deleniti natus eaque. Quam voluptatum quisquam saepe doloribus facere porro sint illum.Lorem1 ipsum dolor, sit amet consectetur adipisicing elit. Odit fuga aut provident eaque vero tenetur excepturi incidunt a voluptate alias perferendis, quis minus corporis repellat, hic consequuntur. Quisquam earum reiciendis aliquam minima nesciunt sint optio nihil, sunt possimus voluptatibus velit accusantium quia excepturi quam ad expedita repudiandae. Ad sint eligendi dignissimos, repudiandae eos blanditiis alias enim magni exercitationem, ipsa, nam ab necessitatibus aperiam officiis reprehenderit possimus temporibus. Aperiam quidem sint dignissimos eaque architecto amet quo sed, eum cupiditate. Dignissimos ipsa necessitatibus, alias quaerat neque voluptates atque laboriosam nesciunt deleniti natus eaque. Quam voluptatum quisquam saepe doloribus facere porro sint illum.Lorem1 ipsum dolor, sit amet consectetur adipisicing elit. Odit fuga aut provident eaque vero tenetur excepturi incidunt a voluptate alias perferendis, quis minus corporis repellat, hic consequuntur. Quisquam earum reiciendis aliquam minima nesciunt sint optio nihil, sunt possimus voluptatibus velit accusantium quia excepturi quam ad expedita repudiandae. Ad sint eligendi dignissimos, repudiandae eos blanditiis alias enim magni exercitationem, ipsa, nam ab necessitatibus aperiam officiis reprehenderit possimus temporibus. Aperiam quidem sint dignissimos eaque architecto amet quo sed, eum cupiditate. Dignissimos ipsa necessitatibus, alias quaerat neque voluptates atque laboriosam nesciunt deleniti natus eaque. Quam voluptatum quisquam saepe doloribus facere porro sint illum.Lorem1 ipsum dolor, sit amet consectetur adipisicing elit. Odit fuga aut provident eaque vero tenetur excepturi incidunt a voluptate alias perferendis, quis minus corporis repellat, hic consequuntur.",
    text2:
      "Lorem2 ipsum dolor, sit amet consectetur adipisicing elit. Odit fuga aut provident eaque vero tenetur excepturi incidunt a voluptate alias perferendis, quis minus corporis repellat, hic consequuntur. Quisquam earum reiciendis aliquam minima nesciunt sint optio nihil, sunt possimus voluptatibus velit accusantium quia excepturi quam ad expedita repudiandae. Ad sint eligendi dignissimos, repudiandae eos blanditiis alias enim magni exercitationem, ipsa, nam ab necessitatibus aperiam officiis reprehenderit possimus temporibus. Aperiam quidem sint dignissimos eaque architecto amet quo sed, eum cupiditate. Dignissimos ipsa necessitatibus, alias quaerat neque voluptates atque laboriosam nesciunt deleniti natus eaque. Quam voluptatum quisquam saepe doloribus facere porro sint illum.Lorem1 ipsum dolor, sit amet consectetur adipisicing elit. Odit fuga aut provident eaque vero tenetur excepturi incidunt a voluptate alias perferendis, quis minus corporis repellat, hic consequuntur. Quisquam earum reiciendis aliquam minima nesciunt sint optio nihil, sunt possimus voluptatibus velit accusantium quia excepturi quam ad expedita repudiandae. Ad sint eligendi dignissimos, repudiandae eos blanditiis alias enim magni exercitationem, ipsa, nam ab necessitatibus aperiam officiis reprehenderit possimus temporibus. Aperiam quidem sint dignissimos eaque architecto amet quo sed, eum cupiditate. Dignissimos ipsa necessitatibus, alias quaerat neque voluptates atque laboriosam nesciunt deleniti natus eaque. Quam voluptatum quisquam saepe doloribus facere porro sint illum.Lorem1 ipsum dolor, sit amet consectetur adipisicing elit. Odit fuga aut provident eaque vero tenetur excepturi incidunt a voluptate alias perferendis, quis minus corporis repellat, hic consequuntur. Quisquam earum reiciendis aliquam minima nesciunt sint optio nihil, sunt possimus voluptatibus velit accusantium quia excepturi quam ad expedita repudiandae. Ad sint eligendi dignissimos, repudiandae eos blanditiis alias enim magni exercitationem, ipsa, nam ab necessitatibus aperiam officiis reprehenderit possimus temporibus. Aperiam quidem sint dignissimos eaque architecto amet quo sed, eum cupiditate. Dignissimos ipsa necessitatibus, alias quaerat neque voluptates atque laboriosam nesciunt deleniti natus eaque. Quam voluptatum quisquam saepe doloribus facere porro sint illum.Lorem1 ipsum dolor, sit amet consectetur adipisicing elit. Odit fuga aut provident eaque vero tenetur excepturi incidunt a voluptate alias perferendis, quis minus corporis repellat, hic consequuntur.",
  },
  {
    text1:
      "Lorem1 ipsum dolor, sit amet consectetur adipisicing elit. Odit fuga aut provident eaque vero tenetur excepturi incidunt a voluptate alias perferendis, quis minus corporis repellat, hic consequuntur. Quisquam earum reiciendis aliquam minima nesciunt sint optio nihil, sunt possimus voluptatibus velit accusantium quia excepturi quam ad expedita repudiandae. Ad sint eligendi dignissimos, repudiandae eos blanditiis alias enim magni exercitationem, ipsa, nam ab necessitatibus aperiam officiis reprehenderit possimus temporibus. Aperiam quidem sint dignissimos eaque architecto amet quo sed, eum cupiditate. Dignissimos ipsa necessitatibus, alias quaerat neque voluptates atque laboriosam nesciunt deleniti natus eaque. Quam voluptatum quisquam saepe doloribus facere porro sint illum.Lorem1 ipsum dolor, sit amet consectetur adipisicing elit. Odit fuga aut provident eaque vero tenetur excepturi incidunt a voluptate alias perferendis, quis minus corporis repellat, hic consequuntur. Quisquam earum reiciendis aliquam minima nesciunt sint optio nihil, sunt possimus voluptatibus velit accusantium quia excepturi quam ad expedita repudiandae. Ad sint eligendi dignissimos, repudiandae eos blanditiis alias enim magni exercitationem, ipsa, nam ab necessitatibus aperiam officiis reprehenderit possimus temporibus. Aperiam quidem sint dignissimos eaque architecto amet quo sed, eum cupiditate. Dignissimos ipsa necessitatibus, alias quaerat neque voluptates atque laboriosam nesciunt deleniti natus eaque. Quam voluptatum quisquam saepe doloribus facere porro sint illum.Lorem1 ipsum dolor, sit amet consectetur adipisicing elit. Odit fuga aut provident eaque vero tenetur excepturi incidunt a voluptate alias perferendis, quis minus corporis repellat, hic consequuntur. Quisquam earum reiciendis aliquam minima nesciunt sint optio nihil, sunt possimus voluptatibus velit accusantium quia excepturi quam ad expedita repudiandae. Ad sint eligendi dignissimos, repudiandae eos blanditiis alias enim magni exercitationem, ipsa, nam ab necessitatibus aperiam officiis reprehenderit possimus temporibus. Aperiam quidem sint dignissimos eaque architecto amet quo sed, eum cupiditate. Dignissimos ipsa necessitatibus, alias quaerat neque voluptates atque laboriosam nesciunt deleniti natus eaque. Quam voluptatum quisquam saepe doloribus facere porro sint illum.Lorem1 ipsum dolor, sit amet consectetur adipisicing elit. Odit fuga aut provident eaque vero tenetur excepturi incidunt a voluptate alias perferendis, quis minus corporis repellat, hic consequuntur.",
    text2:
      "Lorem2 ipsum dolor, sit amet consectetur adipisicing elit. Odit fuga aut provident eaque vero tenetur excepturi incidunt a voluptate alias perferendis, quis minus corporis repellat, hic consequuntur. Quisquam earum reiciendis aliquam minima nesciunt sint optio nihil, sunt possimus voluptatibus velit accusantium quia excepturi quam ad expedita repudiandae. Ad sint eligendi dignissimos, repudiandae eos blanditiis alias enim magni exercitationem, ipsa, nam ab necessitatibus aperiam officiis reprehenderit possimus temporibus. Aperiam quidem sint dignissimos eaque architecto amet quo sed, eum cupiditate. Dignissimos ipsa necessitatibus, alias quaerat neque voluptates atque laboriosam nesciunt deleniti natus eaque. Quam voluptatum quisquam saepe doloribus facere porro sint illum.Lorem1 ipsum dolor, sit amet consectetur adipisicing elit. Odit fuga aut provident eaque vero tenetur excepturi incidunt a voluptate alias perferendis, quis minus corporis repellat, hic consequuntur. Quisquam earum reiciendis aliquam minima nesciunt sint optio nihil, sunt possimus voluptatibus velit accusantium quia excepturi quam ad expedita repudiandae. Ad sint eligendi dignissimos, repudiandae eos blanditiis alias enim magni exercitationem, ipsa, nam ab necessitatibus aperiam officiis reprehenderit possimus temporibus. Aperiam quidem sint dignissimos eaque architecto amet quo sed, eum cupiditate. Dignissimos ipsa necessitatibus, alias quaerat neque voluptates atque laboriosam nesciunt deleniti natus eaque. Quam voluptatum quisquam saepe doloribus facere porro sint illum.Lorem1 ipsum dolor, sit amet consectetur adipisicing elit. Odit fuga aut provident eaque vero tenetur excepturi incidunt a voluptate alias perferendis, quis minus corporis repellat, hic consequuntur. Quisquam earum reiciendis aliquam minima nesciunt sint optio nihil, sunt possimus voluptatibus velit accusantium quia excepturi quam ad expedita repudiandae. Ad sint eligendi dignissimos, repudiandae eos blanditiis alias enim magni exercitationem, ipsa, nam ab necessitatibus aperiam officiis reprehenderit possimus temporibus. Aperiam quidem sint dignissimos eaque architecto amet quo sed, eum cupiditate. Dignissimos ipsa necessitatibus, alias quaerat neque voluptates atque laboriosam nesciunt deleniti natus eaque. Quam voluptatum quisquam saepe doloribus facere porro sint illum.Lorem1 ipsum dolor, sit amet consectetur adipisicing elit. Odit fuga aut provident eaque vero tenetur excepturi incidunt a voluptate alias perferendis, quis minus corporis repellat, hic consequuntur.",
  },
  {
    text1:
      "Lorem3 ipsum dolor, sit amet consectetur adipisicing elit. Odit fuga aut provident eaque vero tenetur excepturi incidunt a voluptate alias perferendis, quis minus corporis repellat, hic consequuntur. Quisquam earum reiciendis aliquam minima nesciunt sint optio nihil, sunt possimus voluptatibus velit accusantium quia excepturi quam ad expedita repudiandae. Ad sint eligendi dignissimos, repudiandae eos blanditiis alias enim magni exercitationem, ipsa, nam ab necessitatibus aperiam officiis reprehenderit possimus temporibus. Aperiam quidem sint dignissimos eaque architecto amet quo sed, eum cupiditate. Dignissimos ipsa necessitatibus, alias quaerat neque voluptates atque laboriosam nesciunt deleniti natus eaque. Quam voluptatum quisquam saepe doloribus facere porro sint illum.",
    text2:
      "Lorem4 ipsum dolor, sit amet consectetur adipisicing elit. Odit fuga aut provident eaque vero tenetur excepturi incidunt a voluptate alias perferendis, quis minus corporis repellat, hic consequuntur. Quisquam earum reiciendis aliquam minima nesciunt sint optio nihil, sunt possimus voluptatibus velit accusantium quia excepturi quam ad expedita repudiandae. Ad sint eligendi dignissimos, repudiandae eos blanditiis alias enim magni exercitationem, ipsa, nam ab necessitatibus aperiam officiis reprehenderit possimus temporibus. Aperiam quidem sint dignissimos eaque architecto amet quo sed, eum cupiditate. Dignissimos ipsa necessitatibus, alias quaerat neque voluptates atque laboriosam nesciunt deleniti natus eaque. Quam voluptatum quisquam saepe doloribus facere porro sint illum.",
  },
];
const onSwiper = (sw) => {
  swiper = sw;
};
</script>
<style>
.dropdown-content {
  position: absolute;
  background-color: #ffffff;
  min-width: 160px;
  
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.dropdown-content p {
  color: black;
  /* padding: 12px 16px; */
  text-decoration: none;
  display: block;
}
.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
  background-color: #007bff; /* Adjust the color as needed */
}

.swiper-pagination-progressbar {
  margin-top: 745px;
}
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
.section {
  background-color: #1c5793;
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: space-between;
}
.section_list {
  display: flex;
}
.section_list img {
  width: 20px;
  height: 20px;
  top: 12px;
  left: 121px;
  padding: 3.75px, 6.63px, 3.25px, 6.88px;
  margin: 12px 2px 10px 0px;
}
.section_list h1 {
  width: 311px;
  height: 22px;
  top: 10px;
  left: 143px;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
  margin: 10px 0px 10px 0px;
}
.section_div {
  margin-top: 6px;
}
.slect {
  width: 55px;
  height: 19px;
  top: 62px;
  left: 121px;
  font-family: Palatino;
  font-size: 17px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0.02em;
  text-align: left;
  margin: 20px 1264px 12px 121px;
}
.select_h2 {
  width: 185px;
  height: 24px;
  top: 93px;
  left: 121px;
  font-family: Palatino;
  font-size: 22px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #767676;
}
.select_h1 {
  width: 274px;
  height: 26px;
  top: 119px;
  left: 121px;
  font-family: Palatino;
  font-size: 24px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #35363d;
}
</style>