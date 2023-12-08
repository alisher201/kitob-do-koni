<script setup>
definePageMeta({
  layout: "Payment",
});
let status = ref(false)
const submitPeyment = () => {
    let router = useRouter()
    router.push('/payment/confirmation')
}
</script>

<template>
  <div>
    <SeoKit />
    <Header />
    <div class="container mb-5 pb-5 px-0 d-flex flex-column align-items-center">
      <div class="cardData">
        <div class="cardImg">
          <div class="cardList">
            <div class="d-flex justify-content-between">
              <p class="cardNumber">Karta raqam</p>
              <img src="../../assets/contact/uzcardlogo.png" alt="" />
            </div>
            <div class="cardCode">
              <span>****</span>
              <span class="ms-2">****</span>
              <span class="ms-2">****</span>
              <span class="ms-2">****</span>
            </div>
            <div class="d-flex justify-content-between">
              <div>
                <p class="cardNumber">Karta nomi</p>
                <p class="text-white">
                  <span>###########</span> <span class="ms-2">#######</span>
                </p>
              </div>
              <div>
                <p class="cardNumber">MUDDATI</p>
                <p class="text-white">OO/YY</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p class="fw-bold mt-3">To'lov miqdori: 165 000 so'm</p>
          <div>
            <label for="" class="formCard">Karta raqam</label>
            <input
              type="text"
              class="form-control"
              placeholder="******************"
            />
          </div>
          <div class="row">
            <div class="col-7">
              <label for="" class="formCard">Karta nomi</label>
              <input
                type="text"
                class="form-control"
                placeholder="Ism familiya"
              />
            </div>
            <div class="col-5">
              <label for="" class="formCard">Amal qilish muddati</label>
              <input type="text" class="form-control" placeholder="OO/YY" />
            </div>
          </div>
          <div class="cardPeymentContainer">
            <button class="w-100 cardPeyment fw-bold text-white" @click="submitPeyment">
              To'lov qilish
            </button>
          </div>
        </div>
      </div>
      <div class="statusCard mt-2 d-flex justify-content-between">
        <div class="">
          <p class="">Kartani eslab qolish</p>
          <small>Axborotni saqlash shartlariga roziman</small>
        </div>
        <div>
          <div class="form-check form-switch">
            <input
              class="form-check-input h4"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              checked
              v-model="status"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
  align-items: end;
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
  font-size: 26px;
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
</style>
