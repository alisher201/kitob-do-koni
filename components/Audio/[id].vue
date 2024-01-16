<template>
  <div>
    <div class="audio">
      <div class="container flex">
        <img src="../../assets/profile/back1.png" alt="" />
        <h2 class="audio_h2">Malkolm Gladuell “ Zukkolar va landovurlar”</h2>
      </div>
      <div class="container d-flex">
        <div class="wrapper">
          <div class="wrapper_ul">
            <img src="../../assets/profile/audio.png" alt="" />
            <h2>Malkolm Gloduel</h2>
            <h1>ZUkkolar va landovurlar</h1>
            <div class="wrapper_list">
              <div class="dropdown">
                <button
                  type="button"
                  class="dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  speed 1.0x
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Speed 0.5x</a></li>
                  <li><a class="dropdown-item" href="#">Speed 0.75x</a></li>
                  <li><a class="dropdown-item" href="#">Speed 1.0x</a></li>
                  <li><a class="dropdown-item" href="#">Speed 1.25x</a></li>
                  <li><a class="dropdown-item" href="#">Speed 1.5x</a></li>

                </ul>
              </div>
              <img class="wrapper_list_1" src="../../assets/profile/ago.png" alt="" />
              <img  class="wrapper_list_2" src="../../assets/profile/agospeed.png" alt="" />
              <img  class="wrapper_list_3" src="../../assets/profile/stop.png" alt="" />
              <img  class="wrapper_list_4" src="../../assets/profile/nuxtspeed.png" alt="" />
              <img  class="wrapper_list_5" src="../../assets/profile/next.png" alt="" />
              <img  class="wrapper_list_6" src="../../assets/profile/sound.png" alt="" />
              <img  class="wrapper_list_7" src="../../assets/profile/soundtable.png" alt="" />
            </div>
          </div>
        </div>
        <div class="ul">
          <div class="list" v-for="(item, ind) in data" :key="ind">
            <img class="img" :src="item.img" alt="" />
            <div class="list_item">
              <h1>{{ item.name }}</h1>
              <p>{{ item.author }}</p>
              <div class="list_img">
                <p class="p">{{ item.foiz }}</p>
                <img :src="item.stecer" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import img1 from "../../assets/profile/AtomOdatlari.png";
import img3 from "../../assets/profile/foiz.png";
import start1 from "../../assets/profile/start.png";
import img2 from "../../assets/profile/Kitoblar.png";
import img4 from "../../assets/profile/Ruxiyat.png";
import img5 from "../../assets/profile/Zukkolar.png";
import img6 from "../../assets/profile/Raqamlar.png";
const data = [
  {
    id:1,
    img: img1,
    name: "Atom odatlar (yum...",
    author: "Martimer Alder",
    start: start1,
    foiz: "50%",
    stecer: img3,
  },
  {
    id:2,
    img: img2,
    name: "Kitoblar qanday o’q...",
    author: "Jayms Kir",
    start: start1,
    foiz: "50%",
    stecer: img3,
  },
  {
    id:3,
    img: img4,
    name: "Ruhiyat parhezi",
    author: "Jayms Kir",
    start: start1,
    foiz: "50%",
    stecer: img3,
  },
  {
    id:4,
    img: img5,
    name: "Zukkolar va landov...",
    author: "Malkolm Gladuell",
    start: start1,
    foiz: "50%",
    stecer: img3,
  },
  {
    id:5,
    img: img6,
    name: "Raqamlar uchun ya...",
    author: "Barbara Oukli",
    start: start1,
    foiz: "50%",
    stecer: img3,
  },
];
</script>

<style lang="scss" scoped>
.audio {
  width: 100%;
  height: 42px;
  background-color: #1c5793;
}
.flex {
  display: flex;
}
.flex img {
  width: 20px;
  height: 20px;
  top: 12px;
  left: 121px;
  padding: 3.75px, 6.63px, 3.25px, 6.88px;
  margin: 12px 2px 10px 0px;
}
.audio_h2 {
  width: 311px;
  //   height: 22px;
  top: 10px;
  left: 143px;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
  margin: 11px 0px 10px 0px;
}
.wrapper {
  //   background-color: blue;
  background-color: #f0f0f0;
  border-radius: 10px;
  width: 50%;
  margin: 30px 0px 0px;
  height: 698px;
}
.wrapper_ul {
  padding: 26px;
}
.wrapper h2 {
  width: 185px;
  height: 24px;
  top: 607px;
  left: 151px;
  font-family: Palatino;
  font-size: 22px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.02em;
  text-align: left;
  margin: 20px 442px 10px 0px;
  color: #767676;
}
.wrapper h1 {
  width: 274px;
  height: 26px;
  top: 641px;
  left: 151px;
  font-family: Palatino;
  font-size: 24px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0.02em;
  text-align: left;
}
.wrapper_list button {
  margin: 5px 0px 0px 5px;
}
.wrapper_list {
  width: 100%;
    // background-color: red;
  display: flex;
  gap: 20px;
  height: 40px;
  align-items: center;
  margin: 40px 0px 0px 0px;
}
.wrapper_list_1{
    width: 45px;
    height: 45px;
    top: 822px;
    left: 331px;
    padding: 15px, 14px, 14px, 16px;
    border-radius: 60px;
    background-color: #FAFAFA;
}
.wrapper_list_2{
    width: 45px;
    height: 45px;
    top: 777px;
    left: 353px;
    padding: 11px, 10px, 10px, 11px;
    border-radius: 60px;
    background-color:#FAFAFA;
}
.wrapper_list_3{
    width: 60px;
    height: 60px;
    top: 770px;
    left: 420px;
    padding: 18px, 18px, 18px, 18px;
    border-radius: 60px;
    background-color:#41A2DB
}
.wrapper_list_4{
    width: 45px;
    height: 45px;
    top: 777px;
    left: 547px;
    padding: 11px, 10px, 10px, 11px;
    border-radius: 60px;
    background-color:#FAFAFA
}
.wrapper_list_5{
    width: 45px;
    height: 45px;
    top: 777px;
    left: 569px;
    padding: 15px, 14px, 14px, 16px;
    border-radius: 60px;
}
.wrapper_list_6{
    width: 24px;
    height: 24px;
    top: 788px;
    left: 639px;

}
.wrapper_list{
    width: 70px;
    height: 30px;
    top: 785px;
    left: 678px;

}
.ul {
  width: 50%;
  height: 698px;
  top: 72px;
  left: 808px;
  margin: 30px;
  background-color: #f0f0f0;
  border-radius: 10px;
}
.list {
  display: flex;
  // background-color: red;
  height: 130px;
  width: 500px;
  padding: 15px;
}
.img {
  width: 80px;
  height: 100px;
  top: 102px;
  left: 838px;
  border-radius: 3px;
  margin: 0px 10px 20px 0px;
}
.list_item h1 {
  width: 258px;
  height: 23px;
  top: 106px;
  left: 909px;
  font-family: Manrope;
  font-size: 17px;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #35363d;
}
.list_item p {
  // width: 100% ;
  height: 20px;
  top: 131px;
  left: 909px;
  font-family: Manrope;
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #9196ad;
}
.list_img {
  display: flex;
}
.list_img img {
  height: 4px;
  margin: 10px 50px 0px 0px;
  width: 100px;
}
.p {
  // background-color: #1c5793;
  width: 40px;
}
</style>