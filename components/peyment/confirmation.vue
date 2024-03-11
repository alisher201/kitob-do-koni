<template>
  <div>
    <div class="w-100 d-flex justify-content-center  align-items-center modalContainer">
      <div class="modalData">   
        <h4>Tranzaksiyani tasdiqlash</h4>
        <p class="modalContent">Telefon raqamingizga bir martalik kod yuborildi</p>
        <div class="d-flex justify-content-between mt-2">
          <p class="modalContent">Karta raqami</p>
          <p class="modalContent">************1694</p>
        </div>
        <div><img src="../../assets/contact/peymentLine.png" alt="" class="w-100"></div>
        <div class="d-flex justify-content-between mt-2">
          <p class="modalContent">Tranzaksiya summasi</p>
          <p class="modalContent">165 000 so’m</p>
        </div>
        <div class="mt-4"><input type="text" class="form-control" placeholder="Bir martalik kod" /></div>
        <div class="mt-4">
          <p class="modalContent text-center">40 soniya dan so’ng takroran yuborish</p>
        </div>
        <div class="mt-4">
          <p class="peymentcancel text-center">Bekor qilish</p>
        </div>

      </div>
    </div>


  </div>
</template>
<script setup>


</script>
<style scoped>
.modalContainer {
  background-color: #31313159;
  position: absolute;
  top: 0;
  left: 0;
  height: 140vh;
  z-index: 999;

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

.peymentcancel {
  color: #727171;
}
</style>