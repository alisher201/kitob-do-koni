<template>
  <div>
    <div class="container px-0">
      <div v-if="empty" class="d-flex align-items-center flex-column my-5">
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
          <small class="basketCount">3 {{ $t("home.basket.product") }}</small>
        </div>

        <div class="row mb-5">
          <div class="col-9">
            <div class="d-flex justify-content-between mb-3">
              <div class="d-flex align-items-center">
                <input type="checkbox" class="basketCheck" />
                <span class="ms-2">{{ $t("home.basket.select") }}</span>
              </div>
              <div>
                <p class="remove">{{ $t("home.basket.delete") }}</p>
              </div>
            </div>


            <div class="d-flex mt-4" v-for="(item, idx) in basketProduct">
              <div class="me-3 d-flex align-items-center">
                <input type="checkbox" class="basketCheck" />
              </div>
              <div class="basketProduts">
                <div class="d-flex justify-content-between">
                  <div class="d-flex">
                    <div><img :src="item.Img" alt="" class="basketImg" /></div>
                    <div class="ms-4 ps-2">
                      <p class="bookTitle">{{ item.bookName }}</p>
                      <p class="bookAuthor">{{ item.bookAuthor }}</p>
                      <p class="bookPrice">{{ item.bookPrice }}</p>
                    </div>
                  </div>
                  <div class="d-flex flex-column justify-content-between">
                    <div>
                      <div class="d-flex">
                        <div class="basketLike">
                          <img
                            src="../../assets/contact/basketLike.png"
                            alt=""
                          />
                        </div>


                      </div>
                    </div>
                    <div class="productCount">
                      <button class="btn" @click="item.count--" :disabled="item.count == 1">
                        <img src="../../assets/contact/minus.png" alt="" />
                      </button>
                      {{ item.count }}
                      <button class="btn" @click="item.count++" :disabled="item.count == 10">
                        <img
                          src="../../assets/contact/plyus.png"
                          alt=""
                        />
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
                <p>{{ $t("home.basket.books") }} ({{ totalSum}})</p>
                <p>128.000 {{ $t("home.basket.sum") }}</p>
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
                <p>148000 {{ $t("home.basket.sum") }}</p>
              </div>
              <div class="mt-2">
                <button class="w-100 sendOrder mt-3">
                  {{ $t("home.basket.shopping") }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import bookImg from "../../assets/contact/savat.png";

const basketProduct = ref([
  {
    Img: bookImg,
    bookName: "Qo'lingdan kelsa, mahv et",
    bookAuthor: "Jeyms Patterson",
    bookPrice: "4400",
    count: 1,
  },
  {
    Img: bookImg,
    bookName: "Qo'lingdan kelsa, mahv et",
    bookAuthor: "Jeyms Patterson",
    bookPrice: "4400",
    count: 1,
  },
  {
    Img: bookImg,
    bookName: "Qo'lingdan kelsa, mahv et",
    bookAuthor: "Jeyms Patterson",
    bookPrice: "4400",
    count: 1,
  },
  {
    Img: bookImg,
    bookName: "Qo'lingdan kelsa, mahv et",
    bookAuthor: "Jeyms Patterson",
    bookPrice: "4400",
    count: 1,
  },
]);

let totalSum = ref(null)




const calulatorProduct = (arry) => {
  let sum =  0
  
  arry.forEach((product, index) => {
        sum += product.count
    
      });
      totalSum.value = sum
      console.log(totalSum.value);

}

watch(basketProduct, (newVal, oldVal) => {
  calulatorProduct(newVal)
  
    }, { deep: true })


    onMounted(() => {
      calulatorProduct(basketProduct.value)

})
const empty = ref(false);
</script>

<style scoped>

.btn {
  border: none;
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
</style>
