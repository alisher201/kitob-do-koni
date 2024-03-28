<template>
  <div>
    <div class="d-flex">
      <div class="border starcount">
        <div class="mt-4 d-flex flex-column align-items-center">
          <h1 class="starNumber">{{ Props.ratings }}</h1>
          <div>
            <!-- ummumiy  rating soni -->
            <span v-for="(item, index) in stars" :key="index">
              <img :src="item.img" alt="" v-if="item.id <= Props.ratings" />
              <img :src="item.img2" alt="" v-if="item.id > Props.ratings" />
            </span>
          </div>

          <!-- umumi ovozlar soni -->
          <p class="mt-2">{{ $t("home.votes") }} {{ Props.comments.length }}</p>
        </div>

        <hr class="mb-0" />

        <!-- rating belgilash -->
        <div class="p-3">
          <span>{{ $t("home.rate") }}</span>
          <span v-for="(item, index) in stars" :key="index" class="rate ms-2">
            <img
              :src="item.img"
              alt=""
              v-if="item.id <= commitData.rating"
              @click="commitData.rating = item.id"
            />
            <img
              :src="item.img2"
              alt=""
              v-if="item.id > commitData.rating"
              @click="commitData.rating = item.id"
            />
          </span>

          <!-- comment qoldirish -->
          <div>
            <textarea
              name=""
              id=""
              rows="6"
              class="rateComments mt-3 w-100"
              :placeholder="$t('home.think')"
              v-model="commitData.comment"
            ></textarea>
          </div>

          <!-- commentni yuborish yoki bekor qilish tugmasi -->
          <div class="d-flex mt-2">
            <div class="w-50 pe-1">
              <button
                class="w-100 clearBtn"
                @click="clearData"
                :disabled="!commitData.comment && !commitData.rating"
              >
                {{ $t("home.clear") }}
              </button>
            </div>
            <div class="w-50 ps-2">
              <button
                class="w-100 submitData"
                :disabled="!commitData.comment || !commitData.rating"
                @click="sendCommit"
              >
                {{ $t("home.sending") }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="comentsData">
        <h5 class="">{{ $t("home.numComments") }} 1257</h5>
        <div class="mt-3" v-for="(items, index) in Props.comments" :key="index">
          <div class="d-flex">
            <div class="main_img">
              <img
                v-if="items.user?.photo"
                :src="url + '/' + items.user?.photo"
                alt=""
                class="commentImg"
              />
              <h1 v-else style="color: #fff; font-weight: 700">
                {{
                  items.user?.name
                    ? items.user?.name.substring(0, 1).toUpperCase()
                    : items.user?.full_name.substring(0, 1).toUpperCase()
                }}
              </h1>
            </div>
            <!-- <pre>{{ items.comment}}</pre> -->
            <div class="px-4">
              <span
                >{{
                  items.user?.name ? items.user?.name : items.user?.full_name
                }}
                <br />
                <span
                  v-for="(item, index) in stars"
                  :key="index"
                  class="comentsList"
                >
                  <img :src="item.img" alt="" v-if="item.id <= items.rating" />

                  <img :src="item.img2" alt="" v-if="item.id > items.rating" />
                </span>
              </span>
              <div class="commentsText mt-3">
                <span
                  v-if="items && items.comment && items.comment.length <= more"
                >
                  {{ items.comment }}
                </span>
                <span v-else>
                  <span v-if="typeof items.comment === 'string'">
                    {{
                      moreCheck
                        ? items.comment
                        : items.comment.substring(0, more)
                    }}
                  </span>
                  <small
                    @click="toggleMore"
                    style="
                      color: #307cce;
                      padding-left: 5px;
                      font-weight: 600;
                      cursor: pointer;
                    "
                  >
                    {{ moreCheck ? "Kamroq o'qish" : "Ko'proq o'qish..." }}
                  </small>
                </span>
              </div>

              <div class="d-flex justify-content-between mt-4">
                <p class="small">{{ extractCreatedAt(items.created_at) }}</p>
                <img src="@/assets/contact/comments.png" alt="" />
              </div>
              <img src="@/assets/contact/Lines.png" alt="" class="w-100 mt-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import star from "@/assets/contact/starActive.png";
import star2 from "@/assets/contact/starIs_active.png";

const url = useRuntimeConfig().public.bookUrl;

const Props = defineProps({
  comments: {
    type: Array,
    require: true,
  },
  ratings: String,
  commitCount: Number,
  is_books: Boolean,
});
const route = useRoute();
const store = usePayment();
const emit = defineEmits(["fetchBookOne"]);
const stars = [
  { id: 1, img: star, img2: star2 },
  { id: 2, img: star, img2: star2 },
  { id: 3, img: star, img2: star2 },
  { id: 4, img: star, img2: star2 },
  { id: 5, img: star, img2: star2 },
];

const commitData = ref({
  rating: null,
  comment: null,
  product_id: route.params.id,
  type: Props.is_books ? "book" : "other",
});

let more = ref(130);
let moreCheck = ref(false);

const toggleMore = () => {
  moreCheck.value = !moreCheck.value;
  if (!moreCheck.value) {
    more.value = 130;
  }
};

const clearData = () => {
  commitData.value.rating = null;
  commitData.value.comment = null;
};
const sendCommit = () => {
  if (commitData.value.rating && commitData.value.comment) {
    store.create_commit(commitData.value).then(() => {
      emit("fetchBookOne");

      clearData();
    });
  }
};

function extractCreatedAt(createdAt) {
  const dateParts = createdAt.split('T')[0];
  return dateParts;
}

onMounted(() => {
  // store.create_commit({ rating: 5, commit: 'lorem' })
});
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
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #307cce;
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

.main_img h1 {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: #307cce;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.7rem;
}
</style>
