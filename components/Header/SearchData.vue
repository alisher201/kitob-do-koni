<template>
  <div>
    <div class="searchData">
  
        <!-- search history -->
      <p class="popularBookSearch">Qidiruv tarixi</p>
      <div v-for="(item, idx) in searchBook" :key="idx" class="my-2 bookList d-flex justify-content-between align-items-center">
        <div> <img src="../../assets/contact/againIcon.png" alt=""><span class="popularBookName ms-2" @click="popularBook(item.name)">{{ item.name }}</span> </div>
        <img src="../../assets/contact/delateSearch.png" alt="">
       
      </div>
      <hr>
      <!-- popular book -->
      <p class="popularBookSearch">Mashhur qidiruvlar</p>
      <div v-for="(item, idx) in store.word  " :key="idx" class="my-2 bookList">
        <img src="../../assets/contact/searchIcon.png" alt=""><span class="popularBookName ms-2" @click="popularBook(item.name)">{{ item.word}}sa</span> 
      </div>
      
    </div>




  </div>
</template>

<script setup>
 const emit = defineEmits(['searchEmit'])

// const searchBook = [
//   { id: 1, name: 'Sharqiy ekspressdagi qotillik' },
//   { id: 2, name: 'Orziqib kutaman ertani' },
//   { id: 3, name: 'Odamlar o’ynaydigan o’yinlar' },
//   { id: 4, name: '"Al-Karnaku" kemasidagi qotillik' }
// ]
const popularBook = (name) => {
  emit('searchEmit', name)
}
const store = useTestTStore();
console.log(store);

onMounted(() => {
    // store.fechSearch()
    store?.fechSearchTop()
    // console.log(store);
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
.bookList:hover .popularBookName{
  cursor: pointer;
}
</style>