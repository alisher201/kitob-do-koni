<template>
  <div class="container mt-4 px-0">
    <div class="rowData">
      <div class="opportunitiesCol" 
      
      v-for="(item, id) in opportunities" 
      :key="id"
    >
        <div class="row cardData d-flex align-items-center">
          <div class="col-3 p-0">
            <img :src="item.imgs" alt="" />
          </div>
          <div class="col-9">
            <h5 style="font-size: 20px">{{ item.feature }}</h5>
            <p>
              {{ item.featureData }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import delevery from "~/assets/contact/delevry.png";
import gift from "~/assets/contact/gift.png";
import oldBooks from "~/assets/contact/old_books.png";
import audioBooks from "~/assets/contact/audio_book.png";
import nationTrade from "~/assets/contact/nation_trade.png";
import trading from "~/assets/contact/trading.png";
const opportunities = [
  {
    id: 1,
    imgs: delevery,
    feature: "Yetkazib berish",
    featureData:
      "250 000 so'mdan yuqori bo'lgan xaridlar uchun yetkazib berish bepul",
  },
  {
    id: 2,
    imgs: gift,
    feature: "Yetkazib berish",
    featureData:
      "250 000 so'mdan yuqori bo'lgan xaridlar uchun yetkazib berish bepul",
  },
  {
    id: 3,
    imgs: oldBooks,
    feature: "Yetkazib berish",
    featureData:
      "250 000 so'mdan yuqori bo'lgan xaridlar uchun yetkazib berish bepul",
  },
  {
    id: 4,
    imgs: audioBooks,
    feature: "Yetkazib berish",
    featureData:
      "250 000 so'mdan yuqori bo'lgan xaridlar uchun yetkazib berish bepul",
  },
  {
    id: 5,
    imgs: nationTrade,
    feature: "Yetkazib berish",
    featureData:
      "250 000 so'mdan yuqori bo'lgan xaridlar uchun yetkazib berish bepul",
  },
  {
    id: 6,
    imgs: trading,
    feature: "Yetkazib berish",
    featureData:
      "250 000 so'mdan yuqori bo'lgan xaridlar uchun yetkazib berish bepul",
  },
];
</script>
<style scoped>
.cardData {
  height: 124px;
  background: #ebf2fc;
  color: #1c5793;

}
.cardData p {
  font-size: 14px;
}
.cardData img {
  border: 9px solid white;
  border-radius: 50%;
  transform: translate(3.5%);

  /* outline:white 10px solid; */
}
.rowData {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 10px;
    
}
.opportunitiesCol {
    border-radius: 10px;
    overflow-x: hidden;
}
</style>
