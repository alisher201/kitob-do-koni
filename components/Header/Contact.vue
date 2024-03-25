<template>
  <div>
    <div class="contacts d-flex justify-content-center text-white">
      <div class="row row-cols-2 d-flex align-items-center container px-0">
        <div class="col px-0">+998901237590</div>
        <div class="col px-0 d-flex justify-content-end">
          <div class="col-5 d-flex justify-content-between">
            
            <div class="d-flex align-items-center">
              <label for="locale-select" class="me-1">
                <img src="~assets/contact/solar_global-bold.png" alt=""
              /></label>
              <select
                id="locale-select"
                v-model="$i18n.locale"
                @change="changeLanuage"
              >
                <option value="uz">O'zbek</option>
                <option value="ru">
                  Ruscha
                </option>
              </select>
            </div>

            <a href="#">
              <img src="~/assets/contact/ri_facebook-fill.png" alt=""
            /></a>
            <a href="#"> <img src="~/assets/contact/youtube.png" alt="" /></a>
            <a href="#"> <img src="~/assets/contact/telegram.png" alt="" /></a>
            <a href="#"> <img src="~/assets/contact/instagram.png" alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const changeLanuage = (e) => {
  localStorage.setItem("language", e.target.value);
};
</script>

<style>
.contacts {
  width: 100%;
  height: 40px;
  background: #1c5793;
}
select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    background: none;
    outline: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
}
select option {
    color: #000;
    cursor: pointer;
   
}


</style>
