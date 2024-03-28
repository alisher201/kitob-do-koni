<template>
  <div>



    <div class="searchData">
      <div v-if="store.searchValue">
        <div v-for="(item, idx) in store.productSearch" :key="idx"
          class="my-2 bookList d-flex justify-content-between align-items-center">
          <div> <img src="../../assets/contact/searchIcon.png"/><span class="popularBookName ms-2"
              @click="popularBook(item.name_uz)">{{ $i18n.locale == 'uz'? item.name_uz : item.name_ru }}  </span> </div>

        </div>
      </div>

      <!-- search history -->
      <div v-else>
        <p class="popularBookSearch">Qidiruv tarixi</p>
        <div v-for="(item, idx) in store.Searchhistory?.result" :key="idx"   
          class="my-2 bookList d-flex justify-content-between align-items-center">
          <div @click="popularBook(item.word)" class="popularBookName w-75"> <img src="../../assets/contact/againIcon.png" alt=""><span class="ms-2"
            >{{ item.word}}</span> </div>
            <div class="w-25 d-flex justify-content-end delateHistory" @click="delateHistory(item.id)">
              <img src="../../assets/contact/delateSearch.png" alt="">


            </div>

        </div>
        <hr>
        <!-- popular book -->
        <!-- {{ store.word }} -->
        <p class="popularBookSearch">Mashhur qidiruvlar</p>
        <div v-for="(item, idx) in store.word.result  " :key="idx" class="my-2 bookList">
          <div class="popularBookName w-100">
            <img src="../../assets/contact/searchIcon.png" alt=""><span class=" ms-2"
              @click="popularBook(item.word)">{{ item.word }}</span>

          </div>
        </div>
      </div>


    </div>




  </div>
</template>

<script setup>
const emit = defineEmits(['searchEmit'])


const popularBook = (name) => {
  emit('searchEmit', name)
}
const store = useTestTStore();
const delateHistory = (id) => {
  store.dealteSearch(id)
  .then(() => {
    store.SearchHistoryBook()
  })

} 

onMounted(() => {
  store.fechSearchTop()
  store.SearchHistoryBook()
});
</script>

<style scoped>
.searchData {
  height: auto;
  border-radius: 7px;
  padding: 14px 18px;
  border: 1px soli red;
  background: #fff;
}

.popularBookSearch {
  font-size: 14px;
  color: #9196AD;
  letter-spacing: 4%;
}

.popularBookName {
  font-size: 15px;
  color: #35363D;
}

.bookList:hover  {
  cursor: pointer;
  background:#F9F9F9 !important ;
}
.delateHistory:hover {
  cursor: pointer;
}
</style>