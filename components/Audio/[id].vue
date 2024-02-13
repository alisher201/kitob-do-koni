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
            <img src="../../assets/profile/audio.png" alt="" />
            <h2>Malkolm Gloduel</h2>
            <h1>ZUkkolar va landovurlar</h1>

            <!-- <img src="../../assets/profile/ago.png" alt="" />
              <img src="../../assets/profile/agospeed.png" alt="" />
              <img src="../../assets/profile/stop.png" alt="" />
              <img src="../../assets/profile/nuxtspeed.png" alt="" />
              <img src="../../assets/profile/next.png" alt="" />
              <img src="../../assets/profile/sound.png" alt="" />
              <img src="../../assets/profile/soundtable.png" alt="" /> -->
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
import useAudioPlayer from "../Audio/audio.js";

const {
  isPlaying,
  audioSrcs,
  remainingTime,
  minusTime,
  currentTrackIndex,
  volume,
  progress,
  audioDuration,
  speed,
  togglePlayback,
  changeVolume,
  seek,
  changeSpeed,
  skipForward,
  skipBackward,
  playNext,
  playPrevious,
} = useAudioPlayer();

const data = [
  {
    img: img1,
    name: "Atom odatlar (yum...",
    author: "Martimer Alder",
    start: start1,
    foiz: "50%",
    stecer: img3,
  },
  {
    img: img2,
    name: "Kitoblar qanday o’q...",
    author: "Jayms Kir",
    start: start1,
    foiz: "50%",
    stecer: img3,
  },
  {
    img: img4,
    name: "Ruhiyat parhezi",
    author: "Jayms Kir",
    start: start1,
    foiz: "50%",
    stecer: img3,
  },
  {
    img: img5,
    name: "Zukkolar va landov...",
    author: "Malkolm Gladuell",
    start: start1,
    foiz: "50%",
    stecer: img3,
  },
  {
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
.audio-player {
  /* Your styles for the audio player container */
}

.controls {
  padding-top: 20px;
}

.progress-bar {
  padding: 10px 0 15px 0;
}

.controls button {
  /* Your styles for the play/pause button */
}

.controls input[type="range"] {
  /* Your styles for the volume slider */
}

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

.speed-select{
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
