<template>
  <div>
    <div class="container px-0 mt-4">
      <!-- populr book -->
      <p style="font-size: 18px; color: #35363d">
        {{ $t("home.favorites.interested") }}
      </p>
      <div
        v-if="empty == 0"
        class="d-flex align-items-center flex-column my-5"
        style="height: 500px; justify-content: center"
      >
        <div class="d-flex align-items-center">
          <strong role="status">Loading...</strong>
          <div class="spinner-border ms-auto" aria-hidden="true"></div>
        </div>
      </div>
      <div
        v-else-if="empty == 1"
        class="d-flex align-items-center flex-column my-5"
      >
        <img src="../../assets/contact/emptyFavourite.png" alt="" />
        <h4 style="font-weight: 600">
          Sevimli kitoblaringiz shu yerda bo'ladi
        </h4>
        <small>
          <small style="color: #1c5793"> " Bosh sahifa "</small>
          <small style="color: #9196ad">bo'limiga qarang</small>
        </small>
      </div>
      <div class="bookGrid mt-4" v-else>
        <div class="p-0 booksList" v-for="(item, idx) in store.like" :key="idx">
          <div class="bookData">
            <img
              :src="urlimg + '/' + item?.product?.image"
              alt=""
              class="categoyImg"
            />
            <button class="btnBestseller">Bestseller</button>
            <button class="newBook">Yangi</button>
            <div class="likeBox" @click="favourite(item.product_id, item.type)">
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
              @click="addBasket($event, item.product_id, item.type)"
            />
            <div class="wrapper-icons">
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
          </div>
          <div class="ps-2">
            <small class="title">{{ item?.product?.name }}</small>
          </div>
          <div class="ps-2">
            <small class="author">{{ item?.product?.author }}</small>
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
const store = useBasketStore();
const urlimg = useRuntimeConfig().public.bookUrl;

let likeLength = ref(0);
let empty = ref(0);

const refresh = () => {
  store.favourite().then(() => {
    likeLength.value = store.like.length;
    likeLength.value == 0 ? (empty.value = 1) : (empty.value = 2);
  });
};

const addBasket = (e, id, bookId) => {
  e.stopPropagation();
  store
    .basketAdd({ product_id: id, type: bookId ? "book" : "other" })
    .then(() => {
      notify();
    });
};

const notify = () => {
  useNuxtApp().$toast.success("Savatchaga qo'shildi", {
    autoClose: 5000,
    dangerouslyHTMLString: true,
  });
};

const favourite = (id, type) => {
  // store.basket[idx].favorite = !store.basket[idx].favorite;

  // if (store.basket[idx].favorite == false) {
  //   bookLike2[idx].style.width = "0";
  // }
  store.favouriteDelete(id, type).then(() => {
    refresh();
  });
};

onMounted(() => {
  refresh();
});
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
.wrapper-icons {
  position: absolute;
  display: flex;
  gap: 5px;
  right: 0.625rem;
  bottom: 0.625rem;
}
.ebook {
  cursor: pointer;
  display: none;
}

.bookopen {
  cursor: pointer;
  display: none;
}

.headphone {
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
  display: flex;
  flex-wrap: wrap;
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
  max-width: 200px;
  width: 100%;
}
.booksList:hover {
  box-shadow: 0px 2px 4px 0px #dbdbdb40;
  border-radius: 7px;
}
</style>
