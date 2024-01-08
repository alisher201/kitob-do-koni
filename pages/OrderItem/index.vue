<template>
  <div>
    <div class="container mb-5 pb-5 px-0">
      <h4 class="mt-4" style="font-weight: 700">{{ $t("home.processing") }}</h4>

      <div class="d-flex justify-content-between">
        <div class="OrderProcessing">
          <div class="d-flex">
            <div class="processingNumber">1</div>
            <p class="yourData ms-2">{{ $t("home.yourInfo") }}</p>
          </div>

          <div class="processingData mt-3">
            <div>
              <label for="" class="processingLabel mb-1"
                >{{ $t("home.surname") }}<span>*</span></label
              >
              <input
                type="text"
                class="form-control"
                :placeholder="$t('home.entersurname')"
              />
            </div>
            <div>
              <label for="" class="processingLabel mb-1"
                >{{ $t("home.name") }}<span>*</span></label
              >
              <input
                type="text"
                class="form-control"
                :placeholder="$t('home.entername')"
              />
            </div>
            <div>
              <label for="" class="processingLabel mb-1"
                >{{ $t("home.phone") }}<span>*</span></label
              >
              <input
                type="text"
                class="form-control"
                :placeholder="$t('home.enternum')"
              />
            </div>
            <div>
              <label for="" class="processingLabel mb-1"
                >{{ $t("home.city") }}<span>*</span></label
              >
              <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div>
              <label for="" class="processingLabel mb-1"
                >{{ $t("home.district") }}<span>*</span></label
              >
              <select class="form-select">
                <option selected><small>Open this select menu</small></option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div>
              <label for="" class="processingLabel mb-1"
                >{{ $t("home.address") }}<span>*</span></label
              >
              <input
                type="text"
                class="form-control"
                :placeholder="$t('home.enteraddress')"
              />
            </div>
          </div>
          <div class="mt-3">
            <label for="" class="processingLabel mb-1">{{ $t("home.courier") }}</label>
            <input
              type="text"
              class="form-control"
            />
          </div>
        </div>
        <!-- buyurtma haqida -->
        <div class="yourOrderContainer">
          <p class="yourOrder">{{ $t("home.basket.order") }}</p>
          <div class="d-flex justify-content-between orderAbout">
            <p>{{ $t("home.basket.books") }} (3)</p>
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
            <small>{{ $t("home.code") }}</small>
            <div class="d-flex justify-content-between mt-2">
              <input
                type="text"
                :placeholder=" $t('home.enterCode')"
                class="orderPromokod"
              />

              <button class="submitProma">{{ $t("home.apply") }}</button>
            </div>
            <button class="w-100 sendOrder mt-3" @click="payment">
              {{ $t("home.processing") }}
            </button>
          </div>
        </div>
      </div>

      <!-- to'lov turi -->
      <div class="paymentType">
        <div class="d-flex">
          <div class="processingNumber">2</div>
          <p class="yourData ms-2">{{ $t("home.payment") }}</p>
        </div>
        <p class="bycard">{{ $t("home.card") }}</p>
        <div class="peymentCards">
          <div
            class="peymentCard d-flex"
            v-for="(item, idx) in peymentType"
            :key="idx"
            :style="{ gridArea: `cardItem${idx + 1}` }"
          >
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              :value="idx"
              v-model="peyment"
            />
            <div
              class="d-flex justify-content-center align-items-center w-100"
              for="flexRadioDefault1"
            >
              <img :src="item.imgs" alt="" />
            </div>
          </div>
          <div class="" style="grid-area: line">
            <img src="../../assets/contact/Line 17.png" alt="" class="w-100" />
          </div>
          <div class="" style="grid-area: linee">
            <img src="../../assets/contact/Line 17.png" alt="" class="w-100" />
          </div>
        </div>
        <div>
          <small style="font-weight: 600"
            >{{ $t("home.cash") }}</small
          >
        </div>
        <div class="peymentCard d-flex mt-3">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            value="cash"
            v-model="peyment"
          />

          <div
            class="d-flex justify-content-center align-items-center w-100"
            for="flexRadioDefault1"
          >
            <img src="../../assets/contact/cash.png" alt="" />
          </div>
        </div>
      </div>
      <div class="delevryAdress">
        <div class="d-flex">
          <div class="processingNumber">3</div>
          <p class="yourData ms-2">{{ $t("home.deliverTime") }}</p>
        </div>

        <div class="deliverGrid ">
          <div class="deliver d-flex" v-for="(item, idx) in delevirey">
            <input class="form-check-input" type="radio" name="deliver" :value="idx" v-model="delevireyAdress"/>
            <div class="ps-2">
              <small>{{ item.delevireyData }}</small>
            </div>
            <div class="d-flex align-items-center"><img :src="item.delevireyImg" alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import click from "~/assets/contact/click.png";
import humo from "@/assets/contact/humo.png";
import mastercard from "@/assets/contact/mastercard.png";
import oson from "@/assets/contact/oson.png";
import payme from "@/assets/contact/payme.png";
import paynet from "@/assets/contact/paynet.png";
import uzcard from "@/assets/contact/click.png";
import visa from "@/assets/contact/visa.png";
import uzum from "@/assets/contact/uzum.png";
import stanart from "../../assets/contact/standart.png";
import regions from "../../assets/contact/regions.png";
import express from "../../assets/contact/express.png";
let peyment = ref(null);
let delevireyAdress = ref(null)
const peymentType = [
  { imgs: payme },
  { imgs: click },
  { imgs: uzum },
  // { imgs: paynet },
  { imgs: oson },
  { imgs: uzcard },
  { imgs: humo },
  { imgs: mastercard },
  // { imgs: visa },
];
const delevirey = [
  {
    delevireyImg: stanart,
    delevireyData: "Standart - 16 000 so'm 1-5 ish kunida",
  },
  {
    delevireyImg: regions,
    delevireyData: "Viloyatlarga- 44 000 so'm 1-7 ish kunida",
  },
  {
    delevireyImg: express,
    delevireyData: "Express - 55 000 so'm 1-3 soatgacha",
  },
];
const payment = () => {
  const router = useRouter()
  router.push('/Payment')

}
</script>
<style>
.OrderProcessing {
  background-color: #fafafa;
  width: 73%;
  height: 328px;
  border-radius: 10px;
  padding: 20px 30px;
}
.yourOrderContainer {
  width: 25%;
  height: 355px;
  background-color: #fafafa;
  border-radius: 10px;
  padding: 18px 16px;
}
.paymentType {
  width: 73%;
  height: 438px;
  background-color: #fafafa;
  border-radius: 10px;
  padding: 20px 30px;
}
.processingNumber {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #307cce;
  border-radius: 50%;
  color: #fff;
  font-weight: 700;
}
.yourData {
  color: #307cce;
  font-size: 17px;
  font-weight: 600;
}
.processingData {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 20px;
}
.form-control::placeholder {
  font-size: 14px;
  color: #767676;
}
.processingLabel {
  color: #767676;
  font-size: 13px;
  font-weight: 500;
}
.processingLabel span {
  color: #ff0000;
  font-weight: 900;
  margin-left: 2px;
}
.form-select {
  font-size: 14px;
  height: 40px;
}
.form-control {
  font-size: 14px;
  height: 40px;
}
.yourOrder {
  color: #35363d;
  font-weight: 600;
}
.orderAbout {
  color: #9196ad;
  font-size: 15px;
}
.orderTotal {
  font-weight: 600;
}
.orderPromokod {
  width: 160px;
  height: 40px;
  border-radius: 7px;
  border: 1px solid #dcdce1;
  outline: none;
  font-size: 14px;
}
.submitProma {
  width: 87px;
  height: 40px;
  border-radius: 7px;
  border: none;
  background: #9ec1e8;
  color: #fff;
  font-size: 14px;
}
.sendOrder {
  background: #9ec1e8;
  color: #fff;
  font-size: 15px;
  height: 40px;
  border: none;
  border-radius: 7px;
  font-weight: 600;
}
.bycard {
  font-weight: 600;
  margin: 20px 0 16px 0;
}
.peymentCard {
  width: 130px;
  height: 60px;
  border-radius: 7px;
  background: #fff;
  padding: 6px;
}
.peymentCards {
  display: grid;
  grid-template-areas:
    "cardItem1 cardItem2 cardItem3 cardItem4 cardItem5"
    "line line line line line"
    "cardItem6 cardItem7 auto auto auto"
    "linee linee linee linee linee";
  row-gap: 14px;
}
.delevryAdress {
  width: 73%;
  height: 156px;
  background: #fafafa;
  border-radius: 10px;
  margin-top: 10px;
  padding: 20px 30px;
}
.deliverGrid {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 20px;
  margin-top: 20px;
}
.deliver {
  height: 60px;
  border-radius: 6px;
  background: #fff;
  padding: 6px;
}
</style>
