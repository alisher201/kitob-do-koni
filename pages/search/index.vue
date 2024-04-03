<template>
    <div>        
      <div class="container">
        <div class="bookGrid mt-4 row" >
          <div class="p-0 booksList col-10 col-md-5" v-for="(item,index) in store.productSearch" :key="index" @click="selectBook(item.id)">
            <div class="bookData">
              <img class="bookData_img" :src="'https://kytabshop.al-raqam.com'+'/'+item.image" alt="" aria-placeholder="s">
              <button class="btnBestseller">Bestseller</button>
              <button class="newBook">Yangi</button>
              <img src="../../assets/contact/booklike.png" alt="" class="bookLike" />
              <img src="../../assets/contact/karzinka.png" alt="" class="karzinka" />
              <img src="../../assets/contact/eBook.png" alt="" class="ebook" />
            </div>
            <div class="ps-2">
              <small class="title">{{ item.name_uz }}</small>
            </div>
            <div class="auth">
              <small class="author">{{ item.author }}</small>
            </div>
            <p>{{ item.price }} narxi</p>
            <p>{{ item.quantity }} marta sotib olingan</p>
            <p>{{ item.description_uz }}</p>
            <img src="../../assets/contact/Star.png" alt="" />
            <small class="stats ms-2">5,0</small>
            <span class="starsNumbers">(32)</span>
          </div>
          <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolorum molestias dolorem adipisci aliquam repudiandae asperiores facilis praesentium! Accusamus reprehenderit aut ducimus, quas voluptas dolorem, necessitatibus voluptatem deserunt, ab nemo placeat. Officiis fugit quas inventore molestias magni! Obcaecati a animi soluta architecto quos magni repellat mollitia neque ducimus ipsam corporis amet repudiandae dignissimos veniam rem, hic incidunt harum voluptatem, ea quibusdam nisi perferendis eveniet quis? Consequuntur id eos expedita cumque ipsam quidem harum reprehenderit, quas necessitatibus? Quo quis obcaecati, nulla quidem fuga sint commodi incidunt! Ipsa amet velit, obcaecati repudiandae corrupti quia aut consectetur officia, hic rerum voluptatem, doloremque architecto. -->
        </div>
        
      </div>
    </div>
</template>

<script setup>
const store = useTestTStore();

</script>

<style scoped>

.col-md-5 {
  width: 100%;
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
  /* border: solid 2px green; */
  border-radius: 5px;
  height: 260px;
}
.bookData_img{
  width: 250px;
  height: 250px;
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
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 6 equal-width columns */
  grid-gap: 15px; /* Gap between grid items */
  /* grid-template-rows:2; */

  /* column-gap: 50px; */
}
.starsNumbers {
  color: #9196ad;
  font-size: 13px;
}

.title {
  width: 100px;
  font-weight: 800;
}
.auth{
  width: 10rem;
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