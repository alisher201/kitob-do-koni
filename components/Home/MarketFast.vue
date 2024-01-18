<script setup>
import bookImg from "../../assets/contact/bookimg.png";
import bookImg1 from "../../assets/contact/bookImg2.png";

const bookImgs = [
  {
    id: 1,
    imgs: bookImg,
    bookTitle: "Rebekka",
    author: "Jon Duglas",
    like: false,
  },
  {
    id: 2,
    imgs: bookImg1,
    bookTitle: "Kitoblar qanday o'qiladi",
    author: "Sidni Sheldon",
    like: false,
  },
  {
    id: 3,
    imgs: bookImg,
    bookTitle: "Sharqiy ekspressdagi qotillik",
    author: "Agata Kristi",
    like: false,
  },
  {
    id: 4,
    imgs: bookImg1,
    bookTitle: "Sharqiy ekspressdagi qotillik",
    author: "Dafna Dyu Morye",
    like: false,
  },
  {
    id: 5,
    imgs: bookImg,
    bookTitle: "Rebekka",
    author: "Jon Duglas",
    like: false,
  },
  {
    id: 6,
    imgs: bookImg1,
    bookTitle: "Kitoblar qanday o'qiladi",
    author: "Sidni Sheldon",
    like: false,
  },
  {
    id: 6,
    imgs: bookImg1,
    bookTitle: "Kitoblar qanday o'qiladi",
    author: "Sidni Sheldon",
    like: false,
  },
  {
    id: 6,
    imgs: bookImg1,
    bookTitle: "Kitoblar qanday o'qiladi",
    author: "Sidni Sheldon",
    like: false,
  },
  {
    id: 6,
    imgs: bookImg1,
    bookTitle: "Kitoblar qanday o'qiladi",
    author: "Sidni Sheldon",
    like: false,
  },
];

const favourite = (idx) => {
  let likeDislike = (bookImgs[idx].like = !bookImgs[idx].like);

  if (likeDislike == true) {
    bookLike[idx].style.width = "0";
  } else {
    bookLike[idx].style.width = "";
  }
};

let swiper = null;

const onSwiper = (sw) => {
  swiper = sw;
};
</script>

<template>
  <div>
    <div class="container px-0 mt-5">
      <div class="d-flex justify-content-between">
        <h4 class="bestText">Bozori chaqqon</h4>
        <div>
          <button class="nextRight me-2" @click="swiper.slideNext()">
            <img src="@/assets/contact/arrowRight.png" alt="" />
          </button>
          <button class="nextLeft" @click="swiper.slidePrev()">
            <img src="@/assets/contact/arrowLeft.png" alt="" />
          </button>
        </div>

        <!-- <div>        
        <button @click="swiper.slideNext()">Next</button>
    <button @click="swiper.slidePrev()">Previous</button></div> -->
      </div>

      <Swiper
        :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]"
        :grid="{ rows: 1, fill: 'row' }"
        :slides-per-view="6"
        :space-between="10"
        :pagination="{ clickable: true }"
        @swiper="onSwiper"
      >
        <SwiperSlide v-for="(item, idx) in bookImgs" :key="idx">
          <div class="bookData">
            <img :src="item.imgs" alt="" class="categoyImg" />
            <button class="btnBestseller">Bestseller</button>
            <button class="newBook">Yangi</button>
            <div class="likeBox" @click="favourite(idx)">
              <img
                src="../../assets/contact/bookLike2.png"
                alt=""
                class="bookLike2"
              />
              <img
                src="../../assets/contact/booklike.png"
                alt=""
                class="bookLike"
                id="bookLike"
              />
            </div>
            <!-- <img
              src="../../assets/contact/karzinka.png"
              alt=""
              class="karzinka"
            /> -->
            <img src="../../assets/contact/eBook.png" alt="" class="ebook" />

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
          <div class="ps-2">
            <small class="title">{{ item.bookTitle }}</small>
          </div>
          <div class="ps-2">
            <small class="author">{{ item.author }}</small>
          </div>
          <img src="../../assets/contact/Star.png" alt="" />
          <small class="stats ms-2">5,0</small>
          <span class="starsNumbers">(32)</span>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<style scoped>
/* .swiper-slide {
} */

.bestText {
  font-size: 22px;
  font-weight: 700;
}

/* .swiper-wrapper {
  min-width: 100vh;
  width: 100vh;
} */

.swiper {
  height: 332px;
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
.bookLike2 {
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
.bookData:hover .bookLike2,
.bookData:hover .ebook,
.bookData:hover .bookopen,
.bookData:hover .headphone,
.bookData:hover .karzinka {
  display: block;
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
.categoyImg {
  width: 100%;
  height: 100%;
  border-radius: 7px;
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
</style>
