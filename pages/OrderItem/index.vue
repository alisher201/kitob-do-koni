<template>
  <div>
    <!-- <pre>
    {{ store.forget }}

    </pre> -->
    <div class="container mb-5 pb-5 px-0">
      <h4 class="mt-4" style="font-weight: 700">{{ $t("home.processing") }}</h4>
      <div class="d-flex justify-content-between">
        <div class="OrderProcessing">
          <div class="d-flex">
            <div class="processingNumber">1</div>
            <p class="yourData ms-2">{{ $t("home.yourInfo") }}</p>
          </div>
          <div class="processingData mt-3">
            <div v-if="usertype == 'guest'">
              <label for="" class="processingLabel mb-1"
                >{{ $t("home.surname") }}<span>*</span></label
              >
              <input
                v-model="Payment.full_name"
                type="text"
                class="form-control"
                :placeholder="$t('home.entersurname')"
              />
              <span v-if="emailError" style="color: red" name="full_name">{{
                emailError.message
              }}</span>
            </div>
            <div v-if="usertype == 'guest'">
              <label for="" class="processingLabel mb-1"
                >{{ $t("home.phone") }}<span>*</span></label
              >
              <input
                v-model="Payment.phone"
                type="text"
                class="form-control"
                :placeholder="$t('home.enternum')"
              />
              <span v-if="errorTel" style="color: red">{{
                errorTel.message
              }}</span>
            </div>

            <div>
              <label for="" class="processingLabel mb-1"
                >{{ $t("home.city") }}<span>*</span></label
              >
              <select
                v-model="Payment.deliver"
                class="form-select"
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <span v-if="emailError" style="color: red" name="full_name">{{
                emailError.message
              }}</span>
            </div>
            <div>
              <label for="" class="processingLabel mb-1"
                >{{ $t("home.district") }}<span>*</span></label
              >
              <select v-model="Payment.district" class="form-select">
                <option selected><small>Open this select menu</small></option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <span v-if="emailError" style="color: red" name="full_name">{{
                emailError.message
              }}</span>
            </div>
            <div>
              <label for="" class="processingLabel mb-1"
                >{{ $t("home.address") }}<span>*</span></label
              >
              <input
                v-model="Payment.address"
                type="text"
                class="form-control"
                :placeholder="$t('home.enteraddress')"
              />
              <span v-if="emailError" style="color: red" name="full_name">{{
                emailError.message
              }}</span>
            </div>
          </div>
          <!-- <div class="mt-3">
            <label for="" class="processingLabel mb-1">{{ $t("home.courier") }}</label>
            <input v-model="Payment.comment" type="text" class="form-control"/>
          </div> -->
        </div>
        <!-- buyurtma haqida -->
        <div class="yourOrderContainer">
          <p class="yourOrder">{{ $t("home.basket.order") }}</p>
          <div class="d-flex justify-content-between orderAbout">
            <p>{{ $t("home.basket.books") }} (1)</p>
            <p id="myParagraph">{{ price }} {{ $t("home.basket.sum") }}</p>
          </div>

          <div class="d-flex justify-content-between orderAbout my-1">
            <p>{{ $t("home.basket.delivery") }}</p>
            <p>{{ delevireyAdress }} {{ $t("home.basket.sum") }}</p>
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
                :placeholder="$t('home.enterCode')"
                class="orderPromokod"
              />
              <button class="submitProma">{{ $t("home.apply") }}</button>
            </div>
            <div v-if="usertype == 'guest'">
              <button
                class="w-100 cardPeyment fw-bold text-white sendOrder mt-3"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                type="button"
                @click="send"
              >
                {{ $t("home.processing") }}
              </button>
            </div>
            <div v-else>
              <button
                class="w-100 cardPeyment fw-bold text-white sendOrder mt-3"
                type="button"
                @click="send"
              >
                {{ $t("home.processing") }}
              </button>
            </div>
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
            @click="Payment.card = item.name"
          >
            <!-- <p>{{ Payment.card }}</p> -->
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              :value="item.name"
              v-model="Payment.card"
            />
            <div
              class="d-flex justify-content-center align-items-center w-100"
              for="flexRadioDefault1"
            >
              <img :src="item.imgs" alt="" />
            </div>
          </div>
          <div class="" style="grid-area: linee"></div>
        </div>
        <div>
          <small style="font-weight: 600">{{ $t("home.cash") }}</small>
        </div>
        <div class="peymentCard d-flex mt-3">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            value="cash"
            v-model="Payment.card"
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

        <div class="deliverGrid">
          <div
            class="deliver d-flex"
            v-for="(item, idx) in store.delivery"
            :key="idx"
          >
            <input
              class="form-check-input"
              type="radio"
              name="deliver"
              :value="idx"
              @click="method"
              :v-model="(Payment.deliveryMethod = item.code)"
              id="flexRadioDefault1"
            />
            <div class="ps-2" for="flexRadioDefault1">
              <small>{{ item.name }}</small>
              <p style="width: 120px">{{ item.price }} so'm</p>
            </div>

            <div class="align-items-center" style="width: 200px; height: 200px">
              <img
                :src="'https://kytabshop.al-raqam.com' + item.image"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <!-- <pre>{{store?.invoic_id?.invoice_id}}</pre>     -->
      <!-- <pre>{{ store?.delivery }}</pre>
      <pre>{{ typeof usertype }}</pre> -->
      <div>
        <div
          class="modal fade"
          id="staticBackdrop"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div
              class="modal-content"
              style="background-color: transparent !important; border: none"
            >
              <div class="modalData">
                <h4>{{ $t("home.confirm") }}</h4>
                <p class="modalContent">{{ $t("home.oneTime") }}</p>
                <div class="d-flex justify-content-between mt-2"></div>
                <div>
                  <img
                    src="../../assets/contact/peymentLine.png"
                    alt=""
                    class="w-100"
                  />
                </div>
                <div class="mt-4">
                  <input
                    v-model="Payment.sms"
                    type="text"
                    class="form-control"
                    :placeholder="$t('home.oneTimeCode')"
                  />
                </div>
                <div class="mt-4">
                  <p class="modalContent text-center">
                    {{ $t("home.resend") }}
                  </p>
                </div>
                <div class="mt-4">
                  <button
                    class="modalbutton"
                    type="button"
                    data-bs-dismiss="modal"
                    @click="start"
                  >
                    Yuborish
                  </button>
                </div>
                <div class="mt-2">
                  <button
                    class="peymentcancel text-center"
                    type="button"
                    data-bs-dismiss="modal"
                  >
                    {{ $t("home.cancel") }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import click from "~/assets/contact/click.png";
// import humo from "@/assets/contact/humo.png";
// import mastercard from "@/assets/contact/mastercard.png";
// import oson from "@/assets/contact/oson.png";
import payme from "@/assets/contact/payme.png";
// import paynet from "@/assets/contact/paynet.png";
// import uzcard from "@/assets/contact/click.png";
// import visa from "@/assets/contact/visa.png";
// import uzum from "@/assets/contact/uzum.png";
// import stanart from "../../assets/contact/standart.png";
// import regions from "../../assets/contact/regions.png";
// import express from "../../assets/contact/express.png";
const content = ref(null)
const router = useRouter()
let url = useRuntimeConfig().public.bookUrl
definePageMeta({
  layout: "OrderItem",
});
let Payment = ref({
  full_name:null,
  phone:null,
  deliver:null,
  district:null,
  address:null,
  comment:null,
  card:null,
  deliveryMethod:null,
  sms:null,
})
const usertype = ref(null)
// console.log(Payment); 
console.log(Payment.value.deliveryMethod,'deliver');
const price = ref(null)

console.log();
const store = OrderPayment()
onMounted(()=>{
  store.Order_delivery()
   usertype.value  = localStorage.getItem("type") 
})
const start=()=>{
  let guest = {
    phone:Payment.value.phone,
    code:Payment.value.sms
  }
      store.Order_Forget(guest)
      .then(()=>{
          localStorage.setItem('jwtToken',store.forget.token);
          localStorage.setItem('efreshToken',store.forget.refresh_token);
          localStorage.setItem('type', store.forget.user_data.type)
          localStorage.setItem("phone", store.forget.user_data.phone)

          al()
          console.log('al ishladi')
      });
      
 }
const send = async() => {
  let pay = {
    full_name:Payment.value.full_name,
    phone:Payment.value.phone,
  }
  console.log(usertype.value,'usertype');
  if(usertype.value == "guest"){
    await store.Order_check(pay)

  }
  else{
    console.log('al ishladi');
   al() 
  } 
}
const al = ()=>{
  
  let check = Payment.value.deliver + " " + Payment.value.district + " " + Payment.value.address
    let deliveryMethodd =  Payment.value.deliveryMethod
    let delivery = deliveryMethodd?.toLowerCase()
    let product = localStorage.getItem("Product")
    let products = JSON.parse(product)
    let payload = {
      deliveryAddress:check,
      paymentMethod  : Payment.value.card,
      deliveryMethod : delivery,
    
      productList :products
      
    
    }
    if(Payment.value.card == 'cash'){
        console.log("buyurtmangiz jo'natildi");
        // console.log(Payment.value.card,'card');
        //  console.log(Payment.value.deliveryMethod,'deliver');
          store.Order_Payment(payload)
          console.log('cash ishladi')
          
    }
    else{
      console.log(Payment.value.card,'payment');
       store.Order_Payment(payload)
      .then(()=>{
        let invoice_id = store?.invoic_id?.invoice_id
        localStorage.setItem("invoiceId",invoice_id)
      
      })
      router.push('/payment')
    
  }
}

const peymentType = [
  { imgs: payme ,name:'card'},
  { imgs: click ,name:'card'},
  // { imgs: uzum },
  // { imgs: paynet },
  // { imgs: oson },
  // { imgs: uzcard },
  // { imgs: humo },
  // { imgs: mastercard },
  // { imgs: visa },
];

// const emailError = ref(null);

// // const full_name = ref(null)
// const errorTel = ref(null)
// // const delevireyAdress = ref(null)



// watch(Payment.value.full_name, (newVAlue) => {
//   emailError.value = isEmpty(newVAlue, "string");
// }, { deep: true });

// watch(Payment.value.phone, (newValue) => {errorTel.value = !isEmpty(newValue, "Telifon nomeri").item ? isEmpty(newValue, "Telifon nomeri")
//     : validateLength(newValue, 12, 12, "telfon nomeri");
// }, { deep: true });


// watch(Payment.value.deliver, (newVAlue) => {
//   emailError.value = isEmpty(newVAlue, "string");
// }, { deep: true });
// watch(Payment.value.district, (newVAlue) => {
//   emailError.value = isEmpty(newVAlue, "string");
// }, { deep: true });

// watch(Payment.value.address, (newVAlue) => {
//   emailError.value = isEmpty(newVAlue, "string");
// }, { deep: true });

// watch(Payment.value.card, (newVAlue) => {
//   emailError.value = isEmpty(newVAlue, "string");
// }, { deep: true });

// watch(Payment.value.deliveryMethod, (newVAlue) => {
//   emailError.value = isEmpty(newVAlue, "string");
// }, { deep: true });



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
.modalData {
  width: 524px;
  height: auto;
  padding: 60px 30px;
  background-image: url("../../assets/contact/peymentBacground.png");
  background-size: 100% 100%;
}

.modalData h4 {
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
}
.modalConten {
  font-size: 17px;
  color: #35363d;
  font-weight: 500;
}

.modalbutton {
  width: 100%;
  background-color: blue;
  color: white;
  height: 5vh;
  border: none;
  border-radius: 5px;
}
.peymentcancel {
  color: white;
  width: 100%;
  background-color: red;
  height: 5vh;
  border: none;
  border-radius: 5px;
}
</style>
