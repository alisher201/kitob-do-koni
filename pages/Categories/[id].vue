<template>
  <div class="container px-0 my-3">
    <small
      >Bosh sahifa / Katalog / San'at va Suratkashlik / To'plamlar, kataloglar
      va ko'rgazmalar</small
    >
    <div class="row mx-0 mt-3">
      <div class="col-4 sideBar p-4">
        <h6><strong>Katalog</strong></h6>
        <p class="ms-2">
          <strong style="font-size: 15px">San'at va Suratkashlik</strong>
        </p>
        <p
          v-for="(item, index) in items"
          :key="index"
          class="categoriaData ms-3"
        >
          {{ item.name }}
        </p>
        <p class="categoriaAll ms-3">
          Barchasi 14 <img src="@/assets/contact/arrowDown.png" alt="" />
        </p>
        <hr class="my-4" />
        <h6><strong>Format</strong></h6>
        <p>
          <input type="checkbox" class="form-check-input me-2 ms-1" />Barcha
          turdagi kitoblar
        </p>
        <p>
          <input type="checkbox" class="form-check-input me-2 ms-1" />Elektron
          kitob
        </p>
        <p>
          <input type="checkbox" class="form-check-input me-2 ms-1" />Audio
          kitob
        </p>
        <hr class="my-4" />

        <h6><strong>Narx</strong></h6>
        <div class="row">
          <div class="col-6">
            <label class="price">dan</label>
            <input type="text" class="form-control mb-1" />
          </div>
          <div class="col-6">
            <label class="price">gacha</label
            ><input type="text" class="form-control" />
          </div>
        </div>

        <hr class="my-4" />
        <h6><strong>Til</strong></h6>
        <p>
          <input type="checkbox" class="form-check-input me-2 ms-1" />
          Barcha tildagi kitoblar
        </p>
        <p>
          <input type="checkbox" class="form-check-input me-2 ms-1" />O'zbekcha
        </p>
        <p>
          <input type="checkbox" class="form-check-input me-2 ms-1" />English
        </p>
        <p>
          <input type="checkbox" class="form-check-input me-2 ms-1" />Русский
        </p>
      </div>

      <div class="col-8  ps-4  pe-0">
        <div class=" d-flex justify-content-between">
          <h6 class=" p-0">To'plamlar, kataloglar va ko'rgazmalar</h6>
          <button class="categoriaAll btn btnColor">
            Saralash <img src="@/assets/contact/arrowDown.png" alt="" />
          </button>
        </div>
        <div class=" bookGrid mt-4">
          <div class="p-0" v-for="(item, index) in bookImgs" :key="index" @click="selectBook(item.id)">
            <div class="bookData">
              <img :src="item.imgs" alt="" class="categoyImg" />
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
              <img src="../../assets/contact/eBook.png" alt="" class="ebook" />
            </div>
            <div class="ps-2">
              <small class="title">{{ item.bookTitle }}</small>
            </div>
            <div class="ps-2"><small class="author">{{ item.author }}</small></div>
            <img src="../../assets/contact/Star.png" alt="" />
            <small class="stats ms-2">5,0</small>
            <span class="starsNumbers">(32)</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import bookImg from "../../assets/contact/bookimg.png";
import bookImg1 from "../../assets/contact/bookImg2.png";

const bookImgs = [
  {id:1, imgs: bookImg, bookTitle: "Rebekka", author: "Jon Duglas" },
  {id:2,
    imgs: bookImg1,
    bookTitle: "Kitoblar qanday o'qiladi",
    author: "Sidni Sheldon",
  },
  {id:3,
    imgs: bookImg,
    bookTitle: "Sharqiy ekspressdagi qotillik",
    author: "Agata Kristi",
  },
  {id:4,
    imgs: bookImg1,
    bookTitle: "Sharqiy ekspressdagi qotillik",
    author: "Dafna Dyu Morye",
  },
  { id:5, imgs: bookImg, bookTitle: "Rebekka", author: "Jon Duglas" },
  {id:6,
    imgs: bookImg1,
    bookTitle: "Kitoblar qanday o'qiladi",
    author: "Sidni Sheldon",
  },
];
const items = [
  { id: 1, name: "Arxitektura" },
  { id: 2, name: "Arxitektura" },
  { id: 3, name: "To'plamlar,kataloglar va ko'rgazmalar" },
  { id: 4, name: "Dizayn dekorativ san'at va chizmachilik" },
  { id: 5, name: "Grafik dizayn" },
  { id: 6, name: "Rassomlar" },
];
const selectBook = (id) => {
  const router =  useRouter()
  router.push(`/bookSelect/${id}`)
}
</script>
<style scoped>
.sideBar {
  height: auto;
  border-radius: 10px;
  background: #fafafa;
}
.sideBar h6 {
  font-size: 18px;
  font-weight: 400;
}
.categoriaData {
  font-size: 14px;
}
.categoriaAll {
  font-size: 14px;
  color: #9196ad;
  cursor: pointer;
}
.price {
  color: #8f8e8e;
  font-size: 13px;
}
.btnColor {
  background: #fafafa;
}
.categoyImg {
  width: 100%;
  height: 100%;
  border-radius: 7px;
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
.bookData:hover .bookLike,
.bookData:hover .ebook,
.bookData:hover .karzinka {
  display: block;
}
.bookGrid {
  width: 100%;
  display: grid;
  grid-template-columns: 23.5% 23.5% 23.5% 23.5%;
  gap: 15px;
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
</style>
