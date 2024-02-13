<template>
  <div>
    <div class="container px-0 mt-4">
      <!-- populr book -->
      <p style="font-size: 18px; color: #35363d">
        {{ $t("home.favorites.interested") }}
      </p>

      <div class="bookGrid mt-4">
        <div
          class="p-0 booksList"
          v-for="(item, index) in bookImgs"
          :key="index"
          @click="selectBook(item.id)"
        >
          <div class="bookData">
            <img :src="item.imgs" alt="" class="categoyImg" />
            <button class="btnBestseller">Bestseller</button>
            <button class="newBook">Yangi</button>
            <div class="likeBox" @click="favourite(index)">
              <img
                src="../../assets/contact/booklike.png"
                alt=""
                class="bookLike"
              />
              <img
                src="../../assets/contact/bookLike2.png"
                alt=""
                class="bookLike2"
                id="bookLike2"
              />
            </div>
            <img
              src="../../assets/contact/karzinka.png"
              alt=""
              class="karzinka"
            />
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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import bookImg from "../../assets/contact/bookimg.png";
import bookImg1 from "../../assets/contact/bookImg2.png";

const selectBook = () => {};

const bookImgs = [
  {
    id: 1,
    imgs: bookImg,
    bookTitle: "Rebekka",
    author: "Jon Duglas",
    like: true,
  },
  {
    id: 2,
    imgs: bookImg1,
    bookTitle: "Kitoblar qanday o'qiladi",
    author: "Sidni Sheldon",
    like: true,
  },
  {
    id: 3,
    imgs: bookImg,
    bookTitle: "Sharqiy ekspressdagi qotillik",
    author: "Agata Kristi",
    like: true,
  },
  {
    id: 4,
    imgs: bookImg1,
    bookTitle: "Sharqiy ekspressdagi qotillik",
    author: "Dafna Dyu Morye",
    like: true,
  },
  {
    id: 5,
    imgs: bookImg,
    bookTitle: "Rebekka",
    author: "Jon Duglas",
    like: true,
  },
  {
    id: 6,
    imgs: bookImg1,
    bookTitle: "Kitoblar qanday o'qiladi",
    author: "Sidni Sheldon",
    like: true,
  },
];

const favourite = (index) => {
  let likeDislike = (bookImgs[index].like = !bookImgs[index].like);

  if (likeDislike == false) {
    bookLike2[index].style.width = "0";
  }
};
</script>

<style scoped>
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
.bookGrid {
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
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
.booksList {
  margin-bottom: 100px;
}
.booksList:hover {
  box-shadow: 0px 2px 4px 0px #dbdbdb40;
  border-radius: 7px;
}
</style>
