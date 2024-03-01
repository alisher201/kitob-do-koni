<template>
  <di class="row mx-0 px-0" style="height: 100vh; overflow: hidden !important; width: 100%;">
    <div class="col-2 chaptres">
      <div>
        <ul>
          <li v-for="(chapter, index) in toc" :key="index" >

            <a href="#" @click.prevent="navigateTo(chapter.href)" class="wrapText"
              :style="{ color: chapter.href == currentHref ? 'red' : 'black' }">
              {{ chapter.label }}
            
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-10 border">
      <div class="row  mx-0 px-0 w" style="border: 1px solid red;">
        <div class="col-1 border mx-0 px-0">
          <button @click="prevPage">Oldingi Sahifa</button>

        </div>
        <div class="col-10">
          <div id="viewer" style="width: 100%; height: 90vh ; border: 1px solid red;"></div>
          <div class="mt-3" :style="{
            height: '5px',
            backgroundColor: 'blue',
            width: progressPercent + '%'
          }"></div>
          <p>{{ progressPercent.toFixed(2) }}%</p>
        </div>
        <div class="col-1 border">
          <button @click="nextPage">Keyingi Sahifa</button>

        </div>

      </div>
    </div>

  </di>
</template>
<script setup>
import ePub from 'epubjs';
const bookURL = 'https://beta.kytab.uz/storage/epub/2023-10/08lxKcMjyIQPN64plbFv.epub'; // Backend'dan keladigan URL
const progress = ref(0);
let progressPercent = ref(0);
const toc = ref([]);
const currentHref = ref('');


const rendition = ref(null);


// Kitobni yuklash va uning tarkibini ishlash uchun asosiy funksiya
function loadBook() {
  book.value = ePub(bookURL);
  rendition.value = book.value.renderTo("viewer", {
    width: "100%",
    height: "100%",
    spread: "always",
  });

  // Kitobning navigatsiyasini yuklab, tarkibni (`toc`) saqlaymiz
  book.value.loaded.navigation.then((navigation) => {
    toc.value = navigation.toc;
  });

  // Kitobning sahifalar sonini hisoblash uchun locations obyektini yaratish
  book.value.ready.then(() => {
    return book.value.locations.generate(1024); // Sahifalar sonini hisoblash uchun 1024px kenglikdan foydalanamiz
  }).then(() => {
    rendition.value.display();
  });


}
const bookPagination = () => {
  // Sahifalash progressini va joriy href'ni kuzatish
  rendition.value.on('relocated', (location) => {
    const currentLocation = rendition.value.currentLocation();
    if (currentLocation && currentLocation.start && currentLocation.end) {
      const startCfi = location.start.cfi;
      
      const progress = book.value.locations.percentageFromCfi(startCfi);
      progressPercent.value = progress * 100; // Progressni foiz sifatida saqlaymiz

      // Joriy bo'limning href'ini yangilash
      const currentSectionIndex = book.value.spine.spineItems.findIndex(item => {
        let string_end = startCfi.indexOf('!')
        // console.log(startCfi);

        return item.cfiBase == startCfi.substring(8, string_end)
      });
      const currentSection = toc.value[currentSectionIndex -1];
      console.log(currentSection);
      if (currentSection && currentSection.href) {
        currentHref.value = currentSection.href;
      } else {
        console.log('currentSetonIndex none');
      }
    }
  });
}















function navigateTo(href) {
  currentHref.value = href; // Joriy bobni yangilash
  rendition.value.display(href);

}





// Keyingi sahifaga o'tish
function nextPage() {
  if (rendition.value) {
    rendition.value.next();
  }
}

// Oldingi sahifaga qaytish
function prevPage() {
  if (rendition.value) {
    rendition.value.prev();
  }
}
onMounted(() => {
  loadBook()
  bookPagination()



});
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.chaptres {
  height: 100vh;
  overflow-y: scroll;

}

.wrapText {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
</style>