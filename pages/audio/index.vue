<template>
  <div>
    <div class="audio">
      <div class="flex">
        <div class="container">
          <img src="../../assets/profile/back1.png" alt="" />
          <h2 class="audio_h2">Malkolm Gladuell “ Zukkolar va landovurlar”</h2>
        </div>
      </div>
      <div class="container">
        <div class="wrapper">
          <div class="wrapper_ul">
            <img :src="urlimg + audioData?.book?.image" alt="" />
            <h2>Malkolm Gloduel</h2>
            <h1>{{ audioData?.book?.name }}</h1>
            <div class="audio-player">
              <div class="controls">
                <div class="remainingTime">
                  <div class="remaining">{{ remainingTime }}</div>
                  <div class="remaining">{{ minusTime }}</div>
                </div>
                <div class="progress-bar">
                  <input
                    type="range"
                    v-model="progress"
                    @input="seek"
                    min="0"
                    max="100"
                  />
                </div>
                <div class="speed-wrapper">
                  <div class="speed-control">
                    <select
                      class="speed-selected"
                      v-model="speed"
                      @change="changeSpeed"
                    >
                      <option class="speed-select" value="0.5">
                        Speed: 0.5x
                      </option>
                      <option class="speed-select" value="0.75">
                        Speed: 0.75x
                      </option>
                      <option class="speed-select" value="1">Speed: 1x</option>
                      <option class="speed-select" value="1.25">
                        Speed: 1.25x
                      </option>
                      <option class="speed-select" value="1.5">
                        Speed: 1.5x
                      </option>
                    </select>
                  </div>
                  <div class="play-control">
                    <img
                      @click="playPrevious"
                      class="audio-img"
                      src="../../assets/profile/ago.png"
                      alt=""
                    />
                    <img
                      @click="skipBackward"
                      class="audio-img"
                      src="../../assets/profile/agospeed.png"
                      alt=""
                    />
                    <button @click="togglePlayback">
                      {{ isPlaying ? "Pause" : "Play" }}
                    </button>
                    <img
                      @click="skipForward"
                      class="audio-img"
                      src="../../assets/profile/nuxtspeed.png"
                      alt=""
                    />
                    <img
                      @click="playNext"
                      class="audio-img"
                      src="../../assets/profile/next.png"
                      alt=""
                    />
                  </div>
                  <div class="sound-control">
                    <img src="../../assets/profile/sound.png" alt="" />
                    <input
                      type="range"
                      v-model="volume"
                      @input="changeVolume"
                      min="0"
                      max="100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ul">
            <div class="list" v-for="(item, ind) in store.books" :key="ind">
              <img class="img" :src="urlimg + '/' + item.book.image" alt="" />
              <div class="list_item">
                <h1>{{ item.book.name }}</h1>
                <p>{{ urlimg + "/" + item.file_path }}</p>
                <div class="list_img">
                  <!-- <p class="p">{{ item.foiz }}</p> -->
                  <!-- <img :src="item.stecer" alt="" /> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";

const store = ProfileHistory();
const urlimg = useRuntimeConfig().public.bookUrl;
import { useRoute } from "vue-router";
const router = useRoute();

const audioData = ref("");
const audioSrcs = ref([]);

// watch(audioData, (newValue) => {
//   if (newValue.file_path) {
//     audioSrcs.value = [urlimg + newValue.file_path];
//   }
// });

let audio = null;
const isPlaying = ref(false);
const remainingTime = ref("00:00:00");
const minusTime = ref("-00:00:00");
const currentTrackIndex = ref(0);
const volume = ref(50);
const progress = ref(0);
const audioDuration = ref(0);
const speed = ref("1");

onMounted(() => {
  const storedAudioData = JSON.parse(localStorage.getItem("audioData"));
  if (storedAudioData) {
    audioData.value = storedAudioData;
    audioSrcs.value.push(urlimg + storedAudioData.file_path);
    console.log(storedAudioData);
  }
  audio = new Audio();
  audio.autoplay = false;
  audio.addEventListener("timeupdate", updateProgress);

  if (audioSrcs.value.length > 0) {
    loadAudio();
  }
});

onBeforeUnmount(() => {
  if (audio) {
    audio.pause();
    audio.removeEventListener("timeupdate", updateProgress);
    audio = null;
  }
});

// functions

const togglePlayback = () => {
  if (isPlaying.value) {
    pauseAudio();
  } else {
    playAudio();
  }
};

const playAudio = () => {
  if (audio) {
    audio.play();
    isPlaying.value = true;
  }
};

const pauseAudio = () => {
  if (audio) {
    audio.pause();
    isPlaying.value = false;
  }
};

const changeVolume = () => {
  audio.volume = volume.value / 100;
};

const updateProgress = () => {
  if (audio) {
    progress.value = (audio.currentTime / audio.duration) * 100 || 0;

    const remainingSeconds = audio.currentTime;
    if (remainingSeconds <= 0) {
      remainingTime.value = `00:00:00`;
    } else {
      const hours = Math.floor(remainingSeconds / 3600);
      const minutes = Math.floor((remainingSeconds % 3600) / 60);
      const seconds = Math.floor(remainingSeconds % 60);
      remainingTime.value = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }

    const remainingMinus = audio.duration - audio.currentTime;
    if (isNaN(audio.duration) || remainingMinus <= 0) {
      minusTime.value = `-00:00:00`;
    } else {
      const hours = Math.floor(remainingMinus / 3600);
      const minutes = Math.floor((remainingMinus % 3600) / 60);
      const seconds = Math.floor(remainingMinus % 60);
      minusTime.value = `-${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }

    if (progress.value >= 100) {
      isPlaying.value = false;
    }
  }
};

const seek = () => {
  if (audio) {
    const seekTime = (progress.value / 100) * audio.duration;
    audio.currentTime = seekTime;
  }
};

const changeSpeed = () => {
  if (audio) {
    audio.playbackRate = parseFloat(speed.value);
  }
};

const skipForward = () => {
  if (audio) {
    const newPosition = Math.min(audio.currentTime + 10, audio.duration);
    audio.currentTime = newPosition;
  }
};

const skipBackward = () => {
  if (audio) {
    const newPosition = Math.max(audio.currentTime - 10, 0);
    audio.currentTime = newPosition;
  }
};

const loadAudio = () => {
  if (audio && audioSrcs.value.length > 0) {
    audio.src = audioSrcs.value[currentTrackIndex.value];
    audio.load();
    audio.addEventListener("loadedmetadata", () => {
      audioDuration.value = audio.duration;
    });
  }
};

const playNext = () => {
  if (audio) {
    currentTrackIndex.value =
      (currentTrackIndex.value + 1) % audioSrcs.value.length;
    loadAudio();
    playAudio();
  }
};

const playPrevious = () => {
  if (audio) {
    currentTrackIndex.value =
      (currentTrackIndex.value - 1 + audioSrcs.value.length) %
      audioSrcs.value.length;
    loadAudio();
    playAudio();
  }
};
</script>

<style lang="scss" scoped>
// .audio-player {

// }

.controls {
  padding-top: 20px;
}

.progress-bar {
  padding: 10px 0 15px 0;
}

// .controls button {
// }

// .controls input[type="range"] {
// }

.audio-img {
  cursor: pointer;
}

.remainingTime {
  display: flex;
  justify-content: space-between;
}

.progress-bar input[type="range"] {
  width: 100%;
}

.play-control {
  display: flex;
  align-items: center;
  gap: 10px;
}

.sound-control {
  display: flex;
  align-items: center;
  gap: 10px;
}

.speed-selected {
  color: #41a2db;
  border: 1px solid #e1e3eb;
  border-radius: 8px;
  padding: 10px;
}

.speed-select {
  color: #bcbcbc;
}

.speed-wrapper {
  display: flex;
  justify-content: space-between;
}

.flex {
  width: 100%;
  background: #1c5793;
}

.flex .container {
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
.container {
  margin-bottom: 50px;
}
.wrapper_ul {
  display: flex;
  flex-direction: column;
  border: 2px solid #f0f0f0;
  border-radius: 10px;
  max-width: 660px;
  width: 100%;
  padding: 30px;
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

.wrapper {
  display: flex;
  justify-content: center;
  gap: 30px;
}
.wrapper_list button {
  margin: 5px 0px 0px 5px;
}
.wrapper_list {
  width: 100%;
  display: flex;
  gap: 20px;
  height: 40px;
}
.ul {
  border: 2px solid #f0f0f0;
  border-radius: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.list {
  display: flex;
  width: 510px;
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
  width: 40px;
}
</style>
