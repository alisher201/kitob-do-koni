<template>
  <div>
    <div class="d-flex">
      <div class="border starcount">
        <div class="mt-4 d-flex flex-column align-items-center">
          <h1 class="starNumber">4.4</h1>
          <div>
            <span v-for="(item, index) in stars" :key="index">
              <img :src="item.img" alt="" v-if="item.id <= starCount" />
              <img :src="item.img2" alt="" v-if="item.id > starCount" />
            </span>
          </div>
          <p class="mt-2">{{ $t("home.votes") }} 23</p>
        </div>
        <hr class="mb-0" />
        <div class="p-3">
          <span>{{ $t("home.rate") }}</span>
          <span v-for="(item, index) in stars" :key="index" class="rate ms-2">
            <img
              :src="item.img"
              alt=""
              v-if="item.id <= starRate"
              @click="starRate = item.id"
            />
            <img
              :src="item.img2"
              alt=""
              v-if="item.id > starRate"
              @click="starRate = item.id"
            />
          </span>
          <div>
            <textarea
              name=""
              id=""
              rows="6"
              class="rateComments mt-3 w-100"
              :placeholder="$t('home.think')"
              v-model="comments"
            ></textarea>
          </div>
          <div class="d-flex mt-2">
            <div class="w-50 pe-1">
              <button class="w-100 clearBtn" @click="clearData">
                {{ $t("home.clear") }}
              </button>
            </div>
            <div class="w-50 ps-2">
              <button class="w-100 submitData">{{ $t("home.sending") }}</button>
            </div>
          </div>
        </div>
      </div>
      <div class="comentsData">
        <h5 class="">{{ $t("home.numComments") }} 1257</h5>
        <div class="mt-3" v-for="(items, index) in userData" :key="index">
          <div class="d-flex">
            <div>
              <img
                :src="items.userImg"
                alt=""
                class="commentImg"
              />
            </div>
            <div class="px-4">
              <span
                >{{ items.userName }} <br />
                <span
                  v-for="(item, index) in stars"
                  :key="index"
                  class="comentsList"
                >
                  <img :src="item.img" alt="" v-if="item.id <= items.starNumber" />
                  <img :src="item.img2" alt="" v-if="item.id > items.starNumber" />
                </span>
              </span>
              <div class="commentsText mt-3">
                <span v-if="items && items.comments && items.comments.length <= more"
                  >{{ items.comments }}</span>
                  <span v-else>
                    {{ items.comments.substring(0, more) }}...
                    <small @click="more = 1000000" style="color: #307CCE; font-weight: 600; cursor: pointer;">Ko'proq o'qish</small>
                  </span>
              </div>
              <div class="d-flex justify-content-between mt-4">
                <p class="small">{{ items.date }}</p>
                <img src="../../assets/contact/comments.png" alt="" />
              </div>
              <img
                src="../../assets/contact/Line 18.png"
                alt=""
                class="w-100 mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import star from "../../assets/contact/starActive.png";
import star2 from "../../assets/contact/starIs_active.png";
import userImg from "../../assets/contact/Ellipse 2636.png";
const stars = [
  { id: 1, img: star, img2: star2 },
  { id: 2, img: star, img2: star2 },
  { id: 3, img: star, img2: star2 },
  { id: 4, img: star, img2: star2 },
  { id: 5, img: star, img2: star2 },
];
const userData = [
  {
    id: 1,
    userImg: userImg,
    userName: "Samanndar Jo'rayev",
    comments:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odio aliquam quidem optio officia atque. Odit accusantium quia",
      date: '28.04.2022',
      starNumber: 4
  },
  {
    id: 1,
    userImg: userImg,
    userName: "Samanndar Jo'rayev",

    comments:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odio aliquam quidem optio officia atque. Odit accusantium quia",
      date: '28.04.2022',
      starNumber: 2
  },
  {
    id: 1,
    userImg: userImg,
    userName: "Samanndar Jo'rayev",

    comments:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odio aliquam quidem optio officia atque. Odit accusantium quia",
      date: '28.04.2022',
      starNumber: 5
  },
  {
    id: 1,
    userImg: userImg,
    userName: "Samanndar Jo'rayev",

    comments:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odio aliquam quidem optio officia atque. Odit accusantium quia",
      date: '28.04.2022',
      starNumber: 3
  },
  {
    id: 1,
    userImg: userImg,
    userName: "Samanndar Jo'rayev",

    comments:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odio aliquam quidem optio officia atque. Odit accusantium quia Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odio aliquam quidem optio officia atque. Odit",
      date: '28.04.2022',
      starNumber: 2
  },
  {
    id: 1,
    userImg: userImg,
    userName: "Samanndar Jo'rayev",

    comments:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odio aliquam quidem optio officia atque. Odit accusantium quia",
      date: '28.04.2022',
      starNumber: 5
  },
  {
    id: 1,
    userImg: userImg,
    userName: "Samanndar Jo'rayev",

    comments:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odio aliquam quidem optio officia atque. Odit accusantium quia",
      date: '28.04.2022',
      starNumber: 1
  },
];
let starCount = ref(4.4);
let starRate = ref(null);
let comments = ref(null);
let more = ref(130)
const clearData = () => {
  starRate.value = null;
  comments.value = null;
};
</script>
<style>
.starcount {
  width: 30%;
  height: 456px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
}
.starNumber {
  font-weight: 700;
  color: #35363d;
}
.starImg {
  width: 28px;
  height: 28px;
}
.rate img {
  width: 24px;
  height: 24px;
}
.rateComments {
  resize: none;
  border: none;
  outline: none;
  border-radius: 6px;
  padding: 10px;
}
.rateComments::placeholder {
  font-size: 15px;
  color: #bababa;
  font-weight: 700;
}
.clearBtn {
  background: #f0f0f0;
  font-size: 15px;
  font-weight: 600;
  color: #717686;
  border: none;
  height: 40px;
  border-radius: 6px;
  letter-spacing: 1px;
}
.submitData {
  background: #307cce;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  height: 40px;
  border-radius: 6px;
  letter-spacing: 1px;
}
.comentsData {
  margin: 0 40px;
  width: 70%;
}
.comentsData h5 {
  font-weight: 600;
}
.commentImg {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
.comentsList img {
  width: 18px;
  height: 18px;
}
.commentsText {
  width: 85%;
  color: #838998;
  font-size: 14px;
}
</style>
