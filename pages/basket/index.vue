<template>
  <div>
    <div class="container px-0">
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
        <img src="../../assets/contact/basketEmpty.png" alt="" />
        <h4 style="font-weight: 600">Savatcha bo’sh</h4>
        <small>
          <small style="color: #1c5793"> " Bosh sahifa "</small>
          <small style="color: #9196ad">bo'limiga qarang</small>
        </small>
      </div>
      <div v-else>
        <div class="mt-4 mb-3">
          <span class="basketTitle"> </span>
          <small class="basketCount"
            >{{ basketLength }} {{ $t("home.basket.product") }}</small
          >
        </div>
        <div class="row mb-5">
          <div class="col-9">
            <div class="d-flex justify-content-between mb-3">
              <div class="d-flex align-items-center">
                <input
                  type="checkbox"
                  class="basketCheck"
                  v-model="checkAll"
                  @click="selectAll"
                />

                <span class="ms-2">{{ $t("home.basket.select") }}</span>
              </div>
              <div>
                <p @click="deleteAll" class="remove">{{ $t("home.basket.delete") }}</p>
              </div>
            </div>
            
            <div
              class="d-flex mt-4"
              v-for="(item, idx) in store.basket"
              :key="idx"
            >
              <div class="me-3 d-flex align-items-center">
                <input
                  type="checkbox"
                  class="basketCheck"
                  v-model="item.product.is_check"
                />
              </div>
              
              <div class="basketProduts">
                <div class="d-flex justify-content-between">
                  <div class="d-flex">
                    <div>
                      <img
                        :src="urlimg + '/' + item.product.image"
                        alt=""
                        class="basketImg"
                      />
                    </div>
                    
                    <div class="ms-4 ps-2">
                      <p class="bookTitle">{{ item.product.name }}</p>
                      <p class="bookAuthor">{{ item.product.author }}</p>
                      <p class="bookPrice">{{ item.product.price }}</p>
                      <div class="basket">
                        <button
                          class="btn border px-3"
                          v-for="(itm, index) in item.product.types"
                          :key="index"
                          @click="bookTypeadd(itm.id,itm.type)"
                          :class="{'active' : item.product.bookTypeId == itm.id}"
                         
                        >
                          {{ itm.type}}
                          
                        </button>
                      
                      </div>
                    </div>
                  </div>

                  <div class="d-flex flex-column justify-content-between">
                    <div>
                      <div class="d-flex">
                        <div
                          class="basketLike"
                          @click="
                            addFavourite(
                              idx,
                              item.product.id,
                              item.product.type,
                            )
                          "
                        >
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            xmlns="http://www.w3.org/2000/svg"
                            :style="{
                              fill: item.favorite ? '#FF673D' : 'white',
                            }"
                          >
                            <path
                              d="M20.2996 8.10005C20.2996 5.44938 18.0607 3.30005 15.2991 3.30005C13.2351 3.30005 11.4623 4.50112 10.6996 6.21525C9.93694 4.50112 8.16414 3.30005 6.09908 3.30005C3.33961 3.30005 1.09961 5.44938 1.09961 8.10005C1.09961 15.8014 10.6996 20.9 10.6996 20.9C10.6996 20.9 20.2996 15.8014 20.2996 8.10005Z"
                              :style="{
                                stroke: item.favorite ? '#FF673D' : '#307CCE',
                              }"
                              stroke-width="1.3"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <div
                          class="basketdelate"
                          @click="deleteBasket(item.id)"
                        >
                          <img
                            class="imgDelate"
                            src="../../assets/contact/basketdelate.png"
                            alt=""
                          />
                          <img
                            class="basketDelateHover"
                            src="../../assets/contact/basketDelateHover.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div class="productCount"  >
                      <button 
                        class="btn"
                        @click="productRemove(idx)"
                        :disabled="item.product.count == 1  || types == 'audio' && item.product.type == 'book' || types == 'ebook' && item.product.type == 'book'"

                      >
                        <img src="../../assets/contact/minus.png" alt="" />
                      </button>
                      {{ item.product.count }}
                      <button 
                        class="btn"
                        @click="productAdd(idx)"
                        :disabled="item.product.count == item.product.quantity || types == 'audio' && item.product.type == 'book' || types == 'ebook' && item.product.type == 'book'"
                      >
                        <img src="../../assets/contact/plyus.png" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Order Data -->
          <div class="col-3">
            <div class="yourOrderContainer mt-5">
              <p class="yourOrder">{{ $t("home.basket.order") }}</p>
              <div class="d-flex justify-content-between orderAbout">
                <p>{{ $t("home.basket.books") }} ({{ sum }})</p>
                <p>{{ totalPrice }} {{ $t("home.basket.sum") }}</p>
              </div>
              <div class="d-flex justify-content-between orderAbout my-1">
                <p>{{ $t("home.basket.delivery") }}</p>
                <p>20.000 {{ $t("home.basket.sum") }}</p>
              </div>

              <div class="d-flex justify-content-between orderAbout">
                <p>{{ $t("home.basket.discount") }}</p>
                <p>0 {{ $t("home.basket.sum") }}</p>
              </div>
              <hr />

              <div class="d-flex justify-content-between orderTotal">
                <p>{{ $t("home.basket.total") }}</p>
                <p>{{ totalPrice + 20000 }} {{ $t("home.basket.sum") }}</p>
              </div>
              <div class="mt-2">
                <button @click="send" class="w-100 sendOrder mt-3">
                  {{ $t("home.basket.shopping") }}
                </button>
              </div>
            </div>
          </div>
          <!-- <pre>{{ store.basket }}</pre> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const urlimg = useRuntimeConfig().public.bookUrl;
const store = useBasketStore();
const bookType = ref(null)
let types=ref('audio')
let empty = ref(0);
let checkAll = ref(true);
let sum = ref(0);
let totalSum = ref(null);
let totalPrice = ref(0);
let basketLength = ref(0);
const cont = ref(1);

let data = []
// data = store.basket.filter((i)=> i.product.type)
const send = () => {
  let array = [];
  let bask = []
  array = store.basket.filter((i) => i.product.is_check);
  array.forEach(item => {
    let product = {
      bookTypeId: item.product.bookTypeId,
      productId: item.product_id,
      productType:item.product.type,
      quantity: item.product.count
    }
    bask.push(product)
  })
  console.log(bask,'bask');
  let basket_string = JSON.stringify(bask);

  localStorage.setItem("Product", basket_string);

  console.log(array);
};

const addFavourite = (idx, id, type) => {
  store.basket[idx].favorite = !store.basket[idx].favorite;
  if (store.basket[idx].favorite == true) {
    store.addFavourite({
      product_id: id,
      type: type,
    });
  } else {
    store.favouriteDelete(id, type)
  }
};

const selectAll = () => {
  for (let i = 0; i < store.basket.length; i++) {
    if (checkAll == true) {
      store.basket[i].product.is_check = !checkAll.value;
    } else {
      store.basket[i].product.is_check = !checkAll.value;
    }
  }
};

const select = (check) => {
  const allChecked = check.every((item) => item.product.is_check === true);
  checkAll.value = allChecked;
};

const filterItems = (products) => {
  const checkedItems = products.filter(
    (item) => item.product.is_check === true
  );
  sum = checkedItems.length;
};

const calulatorProduct = (arry) => {
  let sum = 0;
  let priceSum = 0;
  arry.forEach((product, index) => {
    if (product.product.is_check == true) {
      sum += product.product.count;
      priceSum += product.product.totalPrice;


    }
  });
  totalSum.value = sum;
  totalPrice.value = priceSum;
};

const refresh = () => {
  store.basketGet().then(() => {
    basketLength.value = store.basket.length;
    basketLength.value === 0 ? (empty.value = 1) : (empty.value = 2);
    store.basket.forEach((item, idx) => {
      item.product.is_check = true;
      item.product.count = 1;
      
      item.product.totalPrice = item.product.price;
      if(item.product.types) {
        item.product.bookTypeId=item.product.types[0].id

      }
    });
  });
};
const deleteAll = () => {
  store.removeCarts().then(() => {
    refresh()
  })
};

const productAdd = (idx) => {

  store.basket[idx].product.count++;

  store.basket[idx].product.totalPrice =
    store.basket[idx].product.count * store.basket[idx].product.price;

  store.basket[idx].product.is_check = true;
};

const productRemove = (idx) => {
  store.basket[idx].product.count--;

  store.basket[idx].product.totalPrice =
    store.basket[idx].product.count * store.basket[idx].product.price;

  store.basket[idx].product.is_check = true;
};

const deleteBasket = (id) => {
  store.basketDelete(id).then(() => {
    refresh();
  });
};

// functions

watch(
  store,
  (newVal) => {
    calulatorProduct(newVal.basket);
    select(newVal.basket);
    filterItems(newVal.basket);
  },
  { deep: true }
);

onMounted(() => {
  if (store.basket) {
    calulatorProduct(store.basket);
  }
  refresh();
});
const bookTypeadd = (id,type) => {
  store.basket.forEach(item => {
    item.product.bookTypeId = id
   
    types = type
    console.log(types);
  } )
};
</script>

<style scoped>
.active {
  border: 1px solid #41a2db !important;
  color: #41a2db !important;
}
.btn {
  border: none;
}

.mb-5 {
  justify-content: space-between;
}

.col-9 {
  width: 65%;
}

.basketTitle {
  font-weight: 700;
  color: #35363d;
  font-size: 20px;
}

.basketCount {
  color: #9196ad;
  font-style: 14px;
}

.basketCheck {
  width: 18px;
  height: 18px;
}

.remove {
  font-size: 15px;
  color: #f83333;
  font-weight: 600;
  cursor: pointer;
}

.basketProduts {
  width: 810px;
  height: 168px;
  border-radius: 12px;
  background: #fafafa;
  padding: 24px;
}

.yourOrderContainer {
  width: 100%;
  height: auto;
  background-color: #fafafa;
  border-radius: 10px;
  padding: 18px 16px;
}

.yourOrder {
  color: #35363d;
  font-weight: 600;
}

.orderAbout {
  color: #9196ad;
  font-size: 15px;
}

.sendOrder {
  background: #307cce;
  color: #fff;
  font-size: 15px;
  height: 40px;
  border: none;
  border-radius: 7px;
  font-weight: 600;
}

.bookTitle {
  font-weight: 600;
  font-size: 17px;
  letter-spacing: 4%;
  color: #35363d;
}

.bookAuthor {
  color: #35363d;
}

.bookPrice {
  color: #ff673d;
}

.basketImg {
  width: 86px;
  height: 120px;
  border-radius: 3px;
}

.basketDelateHover {
  display: none;
}

.basketLike {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 5px;
  width: 32px;
  height: 32px;
  margin-right: 8px;
  cursor: pointer;
}

.basketdelate {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 5px;
  width: 32px;
  height: 32px;
  cursor: pointer;
}

.basketdelate:hover > .imgDelate {
  display: none;
}

.basketdelate:hover > .basketDelateHover {
  display: block;
}

.productCount {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 135px;
  height: 42px;
  border-radius: 7px;
  background: #fff;
  padding: 0 8px;
}
.basket {
  display: flex;
  gap: 10px;
}
</style>
