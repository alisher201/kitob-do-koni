<template>
    <div>        
        <div class="container px-0">
            <div class="text-center my-5" >
                  <div class="main_product col-4">
                    <div class=" product " v-for="(item,index) in store.serchResult?.result" :key="index">
                   
                      <div class="product_list">
                          <img class="" :src="'https://kytabshop.al-raqam.com'+'/'+item.image" alt="" aria-placeholder="s">
                      </div>
                      <div class="">
                        <p>{{ item.name_uz }}</p>   
                      </div>
                      <p class="">{{ item.price }} narxi</p>
                      <p>{{ item.quantity }} marta sotib olingan</p>
                      <p >{{ item.description_uz  }}</p>
                    </div>
                  </div>
               
                <!-- <pre>{{ store.bookSearchdata }}</pre> -->
                <div class="main_product col-4">
                    <div class=" product" v-for="(item,index) in store.bookSearchdata?.result" :key="index">
                      <div class="product_list">
                         <img class="" :src="'https://kytabshop.al-raqam.com'+'/'+item.image" alt="" aria-placeholder="s">
                      </div>
                      <div class="">
                        <p >{{ item.name_uz }}</p>   
                      </div>
                        <p>{{ item.price }} narxi</p>
                        <p>{{ item.quantity }} marta sotib olingan</p>
                        <p>{{ item.description_uz  }}</p>
                    </div>
                  </div>

            </div>
            <hr>


            <!-- populr book -->
            <p styl5e="font-size: 18px; color:#35363D ;">Sizni qiziqtirishi mumkin</p>



            <div class=" bookGrid mt-4">
          <div class="p-0 booksList" v-for="(item, index) in bookImgs" :key="index" @click="selectBook(item.id)">
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
</template>

<script setup>

import bookImg from "../../assets/contact/bookimg.png";
import bookImg1 from "../../assets/contact/bookImg2.png";


const store = useTestTStore()

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
  {id:7,
    imgs: bookImg1,
    bookTitle: "Kitoblar qanday o'qiladi",
    author: "Sidni Sheldon",
  },
];



// onMounted(() => {
//     a.value = 6



// })


</script>

<style scoped>
.notFound {
    font-size: 24px;
    font-weight: 700;
    color: #35363D;
}
.request {
    color: #9196AD;
    font-size: 14px;
    font-weight: 400;

}
.main_product{
  display: grid;
  gap:5px;
  grid-template-columns: auto auto auto auto auto auto;
  
}
.product{
  
  width:34vh;
  gap: 5px;
  background-color: rgb(59, 196, 206);
  border-radius: 9px;
  
}
.product_list  img {
  /* width: 34vh; */
  border-radius: 9px;
  width: 100%;
  height: 100%;
}
.product p {
  font-size: 1.3rem;
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
    box-shadow: 0px 2px 4px 0px #DBDBDB40;
    border-radius: 7px;

}


</style>