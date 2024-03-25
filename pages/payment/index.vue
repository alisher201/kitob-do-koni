<template>
  <div>
    <SeoKit />
    <Header />
    <div class="container mb-5 pb-5 px-0 d-flex flex-column align-items-center " style="position: relative;">
      <div class="cardData">
        <div class="cardImg">
          <div class="cardList">
            <div class="d-flex justify-content-between">
              <p class="cardNumber">{{ $t("home.cardNum") }}</p>
              <img src="../../assets/contact/uzcardlogo.png" alt="" />
            </div>
            <div class="cardCode">  
              <!-- {{ form.card_code }}         -->
              <span >{{form.card_code ? form.card_code.substring(0,4) : '****'}}   </span>
              <span class="ms-2">****</span>
              <span class="ms-2">****</span>
              <span class="ms-2">{{form.card_code ? form.card_code.substring(12,16) : '****'}}</span>
            </div>
            <div class="d-flex justify-content-between">
              <div>
                <p class="cardNumber">{{ $t("home.cardName") }}</p>
                <p class="text-white">
                  <span>###########</span> <span class="ms-2">#######</span>
                </p>
              </div>
              <div>
                <p class="cardNumber">{{ $t("home.term") }}</p>
                <p class="text-white">OO/YY</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p class="fw-bold mt-3">{{ $t("home.amount") }} 165 000 {{ $t("home.basket.sum") }}</p>
          <div>
            <label for="" class="formCard">{{ $t("home.cardNum") }}</label>
            <input type="text" v-model="form.card_code" class="form-control" placeholder="******************" />
          </div>
          <div class="row">
            <div class="col-7">
              <label for="" class="formCard">{{ $t("home.cardName") }} </label>
              <input type="text" v-model="form.card_name" class="form-control" placeholder="Ism Familiya" />
            </div>
            <div class="col-5">
              <label for="" class="formCard">{{ $t("home.period") }}</label>
              <input type="" v-model="form.card_date" class="form-control" placeholder="OO/YY"  v-maska data-maska="##/##"/>
            </div>
          </div>
          <div class="cardPeymentContainer">
            <button @click="send" class="w-100 cardPeyment fw-bold text-white" data-bs-toggle="modal"  data-bs-target="#staticBackdrop">
              {{ $t("home.pay") }}
            </button>
          </div>
        </div>
      </div>
      <div class="statusCard mt-2 d-flex justify-content-between">
        <div class="">
          <p class="">{{ $t("home.remember") }}</p>
          <small>{{ $t("home.agree") }}</small>
        </div>
        <div>
          <div class="form-check form-switch">
            <input class="form-check-input h4" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked
              v-model="status" />
          </div>
        </div>
      </div>
      {{ store.token }}

      <!-- Modal -->
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content " style="background-color: transparent !important; border: none;">
            <div class="modalData">
              <h4>{{ $t("home.confirm") }}</h4>
              <p class="modalContent">{{ $t("home.oneTime") }}</p>
              <div class="d-flex justify-content-between mt-2">
                <p class="modalContent">{{ $t("home.cardNum") }}</p>
                <p class="modalContent">************1694</p>
              </div>
              <div><img src="../../assets/contact/peymentLine.png" alt="" class="w-100"></div>
              <div class="d-flex justify-content-between mt-2">
                <p class="modalContent">{{ $t("home.transaction") }}</p>
                <p class="modalContent">165 000 {{ $t("home.basket.sum") }}</p>
              </div>
              <div class="mt-4"><input type="text" v-model="pay.sms" class="form-control" :placeholder="$t('home.oneTimeCode')" /></div>
              <div class="mt-4">
                <p class="modalContent text-center">{{ $t("home.resend") }}</p>
              </div>
              <div class="mt-4">
                <button class="modalbutton" data-bs-dismiss="modal" type="button" @click="start">Yuborish</button>
              </div>
              <div class="mt-2">
                <button class="peymentcancel text-center" type="button" data-bs-dismiss="modal">{{ $t("home.cancel") }}</button>
              </div>
            </div>
            <!-- <pre>{{ store.exists?.token}}</pre>
            <pre>{{ store.exists }}</pre> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const store = OrderPayment()

definePageMeta({
  layout: "Payment",
});
let status = ref(false)
const submitPeyment = () => {
  let router = useRouter()
  router.push('/payment/confirmation')
}

let form =ref( {
  card_code:null,
  card_name:null,
  card_date:null,
})
let pay = ref({
  sms:null,
})

const send = async() =>{

  let name = form.value.card_name?.toLowerCase()
  let payload = {
    name:name,
    pan:form.value.card_code,
    expiry:form.value.card_date
  }
  let p ={
    pan:form.value.card_code,
    
  }
  
  console.log(payload)
  await store.Order_Exists(p)
  .then(() =>{
    if(store.exists?.token){
        let token = store.exists?.token
      localStorage.setItem('token',token)
      console.log(token,'token') 
      let order = {
        token:localStorage.getItem('token'),
        invoice_id:localStorage.getItem('invoiceId'),
      }
      store.Order_Transaction(order)
    }
    else{
      store.Order_Token(payload)

    .then(() =>{
      let token = store?.token?.token
      localStorage.setItem('token',token)
      console.log(token,'token') 
      let order = {
        token:localStorage.getItem('token'),
        invoice_id:localStorage.getItem('invoiceId'),
      }
      store.Order_Transaction(order)
    })
    }
  })

}
const start = ()=>{
      let message={
        invoice_id : localStorage.getItem('invoiceId'),
        sms:pay.value.sms
      }
      store.Order_Complete(message)
}







</script>
<style scoped>
.cardData {
  width: 524px;
  height: auto;
  border-radius: 20px;
  background: #fafafa;
  padding: 30px;
  margin-top: 30px;
}

.cardImg {
  display: flex;
  align-items: flex-end;
  height: 230px;
  border-radius: 15px;
  background: url("../../assets/contact/cardBbackground.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 15px;
  font-family: "Oxanium";
}

.cardList {
  width: 434px;
  height: 165px;
  border-radius: 10px;
  background: #ffffff24;
  padding: 20px;
}

.cardNumber {
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0.02em;
  color: #c9ecfb;
}

.cardCode {
  font-size: 20px;
  font-weight: 500;
  line-height: 33px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #ffffff;
}

.formCard {
  font-size: 12px;
  letter-spacing: 0.02em;
  color: #35363d;
  margin-bottom: 5px;
}

.form-control {
  color: #767676;
  font-size: 15px;
}

.cardPeyment {
  height: 42px;
  border-radius: 7px;
  border: none;
  background: #9ec1e8;
}

.cardPeymentContainer {
  margin-top: 30px;
}

.statusCard {
  width: 524px;
  color: #35363d;
  font-weight: 600;
  font-size: 15px;
}

.statusCard small {
  font-size: 12px;
  font-weight: 400;
  color: #707070;
}








.modalData {
  width: 524px;
  height: auto;
  padding: 60px 30px;
  background-image: url('../../assets/contact/peymentBacground.png');
  background-size: 100% 100%;
}

.modalData h4 {
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
}

.modalConten {
  font-size: 17px;
  color: #35363D;
  font-weight: 500;

}
.modalbutton{
  width: 100%;
  background-color:blue;
  color:white;
  height: 5vh;
  border:none;
  border-radius: 5px;
}
.peymentcancel {
  color:white;
  width: 100%;
  background-color: red;
  height: 5vh;
  border: none;
  border-radius: 5px;

}
</style>
