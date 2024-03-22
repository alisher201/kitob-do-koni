<template>
  <div class="row mx-0 px-0" style="height: 100vh; overflow: hidden !important; width: 100%;">
    <div class="col-2 chaptres" :class="skin == 1 ? 'chaptresbarSepia' : skin == 2 ? 'ChaptersbarDark' : ''">
      <div>
        <ul>
          <li v-for="(chapter, index) in toc" :key="index" class="chaptresList">
          

            <a href="#" @click.prevent="navigateTo(chapter.href)" class="wrapText"
              :style="{ color: chapter.href == currentHref ? 'blue' : colorDate }">
              {{ chapter.label }} 

            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-10" :class="skin == 1 ? 'sepia' : skin == 2 ? 'dark' : ''">
      <div class="row  mx-0 px-0">
        <div class="col-1 mx-0 px-0  prevPage" @click="prevPage">
          <div class="settingsCol">
            <img src="../../assets/contact/Frame.png" alt="" class="settingImg" @click="openSettings($event)">
            <div class="settingsData" v-show="settingsOpen">
              <!-- <div class="d-flex"> -->
              <p @click="$event.stopPropagation(), skin = 0, colorDate = '#000'" class="">White</p>
              <p @click="$event.stopPropagation(), skin = 1, colorDate = '#fff'">Sepia</p>
              <!-- <p @click="$event.stopPropagation(), skin = 2, colorDate = '#fff'">Black</p> -->
              <!-- </div> -->

            </div>

          </div>


          <img src="../../assets/contact/arrowRight.png" alt="" class="prevRightImg">

        </div>
        <div class="col-10">
          <div id="viewer" style="width: 100%; height: 90vh; color: #fff;"></div>
          <div class="mt-3" :style="{
      height: '5px',
      backgroundColor: 'blue',
      width: progressPercent + '%'
    }">
          </div>
          <p>{{ progressPercent.toFixed(0) }}%</p>
        </div>
        <div class="col-1  nextPage">
          <div class="exit" @click="back.back(-1)">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              style="fill: #828384;transform: 2;">
              <path
                d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z">
              </path>
            </svg>
          </div>
          <div class="left" @click="nextPage">
            <img src="../../assets/contact/arrowLeft.png" alt="">
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
import ePub from 'epubjs';



let bookURL = null; // Backend'dan keladigan URL
const progress = ref(0);
let progressPercent = ref(0);
const toc = ref([]);
const currentHref = ref('');
const rendition = ref(null);
const skin = ref(1);
const colorDate = ref('white');
const settingsOpen = ref(false);
const back = useRouter()
const route = useRoute()
const store = useTestTStore()
const urlEpub = useRuntimeConfig().public.bookUrl




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
  })



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
      const currentSection = toc.value[currentSectionIndex - 1];
      if (currentSection && currentSection.href) {
        currentHref.value = currentSection.href;
      } else {
        return
      }
    }
  });
}


function navigateTo(href) {
  currentHref.value = href; // Joriy bobni yangilash
  rendition.value.display(href);

}





// Sahifani yopish
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
const openSettings = (e) => {
  e.stopPropagation()
  settingsOpen.value = !settingsOpen.value
}
onMounted(() => {
  // console.log(JSON.parse(localStorage.getItem('epubUrl')));
bookURL = urlEpub + JSON.parse(localStorage.getItem('epubUrl'))
  loadBook()
    bookPagination()
  // store.epubFetch(bookURL).then((res) => {
  //   loadBook(res)
  //   bookPagination()
  //   console.log(res);
  // })



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

::selection {
  color: red;
  background-color: none;
}

.wrapText {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-decoration: none;

}

.chaptresList {
  list-style-type: none;
  padding: 3px 0;
  border-bottom: 1px solid lightgrey;
  cursor: pointer;
}

.prevPage {
  cursor: pointer;
  position: relative;
}

.prevRightImg {
  position: absolute;
  top: 50%;
  right: 50%;
  width: 35px;
}

.nextPage {
  cursor: pointer;
  position: relative;
  padding-top: 30px;
}

.nextPage img {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 35px;
}

.settingImg {
  position: relative;
  left: 15%;
  top: 15px;
}

.settingsCol {
  height: 40px;
  /* position: relative; */
}

.sepia {
  background: #F4EACD;
}

.dark {
  background: #1B1F2A;
}

.ChaptersbarDark {
  background: #2C3142;
  padding: 3px 0;
}

.chaptresbarSepia {
  background: #111111;
  padding: 3px 0;

}

.settingsData {
  width: 110px;
  height: 60px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;
  padding: 0px;
  box-shadow:
    0 0 0 2px rgb(255, 255, 255),
    4px 4px 4px #2C3142;
  transition: 2s;
  border-radius: 5px;
}

.settingsData p {
  display: flex;
  height: 100%;
  align-items: center;
  padding-top: 20px;
  color: #a6a6a6;
  font-family: "Times New Roman", Times, serif;
}

.settingsData p:hover {
  color: black;
}

.left {
  width: 100%;
  height: 100%;
}

.exit {
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
}
</style>