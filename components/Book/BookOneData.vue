<script setup>
import bookImg from "../../assets/contact/bookimg.png";
import bookImg1 from "../../assets/contact/bookImg2.png";



const bookcontent = ref(null)
const bookImgs = [
  { imgs: bookImg, bookTitle: "Rebekka", author: "Jon Duglas" },
  {
    imgs: bookImg1,
    bookTitle: "Kitoblar qanday o'qiladi",
    author: "Sidni Sheldon",
  },
  {
    imgs: bookImg,
    bookTitle: "Sharqiy ekspressdagi qotillik",
    author: "Agata Kristi",
  },
  {
    imgs: bookImg1,
    bookTitle: "Sharqiy ekspressdagi qotillik",
    author: "Dafna Dyu Morye",
  },
  { imgs: bookImg, bookTitle: "Rebekka", author: "Jon Duglas" },
  {
    imgs: bookImg1,
    bookTitle: "Kitoblar qanday o'qiladi",
    author: "Sidni Sheldon",
  },

];

const orderItem = () => {
  const router = useRouter()
  router.push('/OrderItem')

}
onMounted(() => {
  bookcontent.value = 1;
})</script>

<template>
  <div class="container mb-5 pb-5 px-0">
    <div class="my-3"><small class="mt-5">
      Bosh sahifa / Katalog / San'at va Suratkashlik / Atom odatlari (Jeyms
      Klir)
    </small></div>
    

    <div class="row">
      <div class="col-4 ">
        <div class="bookimg border">
          <img src="@/assets/contact/oneBook.png" alt="" />
        </div>

        <div class="showImgs">
          <div class="showImg">
            <img src="../../assets/contact/image 1962.png" alt="" />
          </div>
          <div class="showImg">
            <img src="../../assets/contact/image 1962.png" alt="" />
          </div>
          <div class="showImg">
            <img src="../../assets/contact/image 1962.png" alt="" />
          </div>
          <div class="showImg">
            <img src="../../assets/contact/image 1962.png" alt="" />
          </div>
        </div>
      </div>
      <div class="col-8">
        <div class="row">
          <div class="col-8">
            <p class="bookAuthor">Jocelin R. Deneweth</p>

            <h3 class="bookTitle">Lady of darkness of the  </h3>
          </div>
          <div class="col-4 d-flex align-items-center justify-content-end pe-0">
            <img
              src="../../assets/contact/oneBookLIke.png"
              alt=""
              class="me-2"
            />
            <img src="../../assets/contact/download.png" alt="" />
          </div>
        </div>
        <div class="d-flex align-items-center">
          <p class="d-flex align-items-center">
            <img src="../../assets/contact/Star.png" alt="" class=""
          /></p>

          <p class="star">5,0</p> <small class="statCount">(123)</small>
          <p class="mx-2">|</p>
          <p><img src="../../assets/contact/chat.png" alt="" /></p>
          <p class="commentCount">127</p>
          <p class="statCount small ">отзывов</p>
        </div>
        <div>
          <span class="statCount">narxi:</span>
          <div class="mb-3">
            <span class="bookPrice">165000 so'm</span>
            <small class="discount ms-3"><del>185 000 so'm</del></small>
          </div>
        </div>

        <div class="row">
          <div class="col-6">
            <!-- booktype -->

            <div class="d-flex justify-content-between">
              <button class="booktype btn border px-3">
                <img src="@/assets/contact/book-open.png" alt="" /><small
                  class="ms-2"
                  >Book</small
                >
              </button>
              <button class="btn border px-4 booktype">
                <img src="@/assets/contact/headphones.png" alt="" /><small
                  class="ms-2"
                  >Audio</small
                >
              </button>
              <button class="btn border px-3 booktype">
                <img src="@/assets/contact/ebookk.png" alt="" /><small
                  class="ms-2"
                  >eBook</small
                >
              </button>
            </div>
            <!-- fragment -->
            <div class="mt-2 row">
              <div class="col-6">
                <button class="btn border w-100 fragment">
                  <img src="@/assets/contact/book-open2.png" alt="" /> Fragment
                  o'qish
                </button>
              </div>
              <div class="col-6">
                <button class="btn border w-100 fragment">
                  <img src="@/assets/contact/headphones2.png" alt="" /> Audio
                  eshitish
                </button>
              </div>
            </div>

            <button class="w-100 basket mt-2">Savatga qo'shish</button>
            <button class="w-100 buy mt-2" @click="orderItem">Tezkor sotib olish</button>
          </div>
        </div>
      </div>
    </div>
    <div class="bookData">
      <div class="aboutMenu d-flex">
      
        
        <div class="" :class="{'aboutBook' : bookcontent == 1}" @click="bookcontent = 1">M'alumot</div>
      <div class="ms-3" :class="{'aboutBook' : bookcontent == 2}" @click="bookcontent = 2">Tarkib</div>
      <div class="ms-3" :class="{'aboutBook' : bookcontent == 3}" @click="bookcontent = 3">Sharhlar</div>
      </div>
      <hr class="mt-0">
      <div v-show="bookcontent == 1"><BookAbaut/></div>
      <div v-show="bookcontent ==2">
        <h1>ma'lumot yo'q</h1>
      </div>
     
      <div class="comments" v-if="bookcontent == 3">
        <BookComments/>
      </div>
      
    </div>

    <div class=" mt-5">
        <div class=" d-flex justify-content-between">
          <h6 class=" p-0">Yaqinda ko'rilgan mahsulotlar</h6>
          <div>
            <button class="nextRight me-2">
             <img src="@/assets/contact/arrowRight.png" alt="" />
          </button>
          <button class="nextLeft">
             <img src="@/assets/contact/arrowLeft.png" alt="" />
          </button>
          </div>
        
        </div>
        <div class=" bookGrid mt-3">
          <div class="p-0 dataItem" v-for="(item, index) in bookImgs" :key="index">
            <div class="bookDataa">
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
</template>


<style scoped>
.bookimg {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  background: #e6e8ec66;
  border-radius: 15px;
  /* margin-left: 10px; */
}
.bookimg img {
  width: 168px;
  height: 278px;
}
.bookAuthor {
  color: #959cac;
  font-size: 15px;
}
.bookTitle {
  min-height: 67px;
}
.star {
  color: #ec6934;
  font-weight: 500;
  font-size: 18px;
}
.statCount {
  color: #9196ad;
}
.commentCount {
  color: #35363d;
  font-weight: 600;
  font-size: 18px;
}
.bookPrice {
  color: #35363d;
  font-size: 22px;
  font-weight: 600;
}
.discount {
  color: #9196ad;
}
.booktype {
  width: 112px;
}
.fragment {
  font-size: 15px;
  background: #f0f0f0;
  height: 46px;
}
.basket {
  background: #67c926;
  color: #fff;
  border-radius: 6px;
  border: none;
  padding: 10px 0;
  font-weight: 600;
}
.buy {
  background: #307cce;
  border-radius: 6px;
  border: none;
  padding: 10px 0;
  color: #fff;
  font-weight: 600;
}
.showImg {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f6f7;
  height: 80px;
  border-radius: 8px;
}
.showImg img {
  width: 40px;
  height: 64px;
}
.showImgs {
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 10px;
  margin-top: 20px;
}
.bookData {
  /* width: 1198px; */
  height: auto;
  background: #FAFAFA;
  margin-top: 40px;
  border-radius: 10px;

}
.aboutBook {
  border-bottom: 2px solid #307cce;
  padding-bottom: 8px;
  color: #307cce;
}
.aboutMenu {

  padding: 32px 32px 0 32px;
}

.comments {
  padding: 0 32px 32px 32px;

}
.nextRight {
  width: 30px;
  height: 30px;
  background: #F6F6F6;
  border-radius: 20px  0  0 20px;
  cursor: pointer;
  border: none;
}
.nextLeft {
  width: 30px;
  height: 30px;
  background: #F6F6F6;
  border-radius: 0  20px 20px 0 ;
  cursor: pointer;
  border: none;
}
.bookGrid {
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto ;
  gap: 10px;
}
.bookDataa {
  position: relative;
  height: 260px;
}
.dataItem {
  box-shadow: 0px 2px 4px 0px #DBDBDB40;
  border-radius: 0 0 7px 7px;


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
.bookDataa:hover .bookLike,
.bookDataa:hover .ebook,
.bookDataa:hover .karzinka {
  display: block;
}
.title {
  font-weight: 800;
}
.author {
  color: #9196ad;
}
.bookLike {
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  display: none;
}
.categoyImg {
  width: 100%;
  height: 100%;
  border-radius: 7px;
}
.aboutMenu div:hover {
  cursor: pointer;
  font-weight: 500;

}
</style>
