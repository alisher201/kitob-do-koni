// audioPlayer.js
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default function useAudioPlayer() {
  const isPlaying = ref(false);
  const audioSrcs = ref([
    // Array of audio sources
    "http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3",
  ]);
  const remainingTime = ref("00:00:00");
  const minusTime = ref("-00:00:00");
  const currentTrackIndex = ref(0); // Current index of the audio track
  const volume = ref(50);
  let audio = null;
  const progress = ref(0);
  const audioDuration = ref(0);
  const speed = ref("1");

  const togglePlayback = () => {
    if (isPlaying.value) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  const playAudio = () => {
    // Play audio
    audio.play();
    isPlaying.value = true;
  };

  const pauseAudio = () => {
    // Pause audio
    audio.pause();
    isPlaying.value = false;
  };

  const changeVolume = () => {
    // Change volume
    audio.volume = volume.value / 100;
  };

  const updateProgress = () => {
    progress.value = (audio.currentTime / audio.duration) * 100 || 0;

    const remainingSeconds = audio.currentTime;
    if (remainingSeconds <= 0) {
      remainingTime.value = `00:00:00`; // Audio finished
    } else {
      const hours = Math.floor(remainingSeconds / 3600);
      const minutes = Math.floor((remainingSeconds % 3600) / 60);
      const seconds = Math.floor(remainingSeconds % 60);
      remainingTime.value = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }
    
    const remainingMinus = audio.duration - audio.currentTime;
    if (remainingMinus <= 0) {
      minusTime.value = `-00:00:00`; // Audio finished
    } else {
      const hours = Math.floor(remainingMinus / 3600);
      const minutes = Math.floor((remainingMinus % 3600) / 60);
      const seconds = Math.floor(remainingMinus % 60);
      minusTime.value = `-${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }

    if (progress.value >= 100) {
      isPlaying.value = false; // Stop playback
    }
  };

  const seek = () => {
    // Seek to the specified position
    const seekTime = (progress.value / 100) * audio.duration;
    audio.currentTime = seekTime;
  };

  const changeSpeed = () => {
    // Change playback speed
    audio.playbackRate = parseFloat(speed.value);
  };

  const skipForward = () => {
    // Calculate the new playback position
    const newPosition = Math.min(audio.currentTime + 10, audio.duration);
    // Set the new playback position
    audio.currentTime = newPosition;
  };

  const skipBackward = () => {
    // Calculate the new playback position
    const newPosition = Math.max(audio.currentTime - 10, 0);
    // Set the new playback position
    audio.currentTime = newPosition;
  };

  const loadAudio = () => {
    // Update the audio source based on the current track index
    audio.src = audioSrcs.value[currentTrackIndex.value];
    // Load the new audio source
    audio.load();
    // Update the audio duration when the new audio is loaded
    audio.addEventListener("loadedmetadata", () => {
      audioDuration.value = audio.duration;
    });
  };

  const playNext = () => {
    // Increment the current track index
    currentTrackIndex.value = (currentTrackIndex.value + 1) % audioSrcs.value.length;
    // Load and play the next audio track
    loadAudio();
    playAudio();
  };

  const playPrevious = () => {
    // Decrement the current track index
    currentTrackIndex.value = (currentTrackIndex.value - 1 + audioSrcs.value.length) % audioSrcs.value.length;
    // Load and play the previous audio track
    loadAudio();
    playAudio();
  };

  onMounted(() => {
    // Create an audio element
    audio = new Audio();
    // Set the initial audio source
    audio.src = audioSrcs.value[currentTrackIndex.value];
    // Ensure autoplay is disabled
    audio.autoplay = false;
    // Update progress bar
    audio.addEventListener("timeupdate", updateProgress);
    // Get duration of the audio
    audio.addEventListener("loadedmetadata", () => {
      audioDuration.value = audio.duration;
    });
  });

  onBeforeUnmount(() => {
    // Clean up audio element
    if (audio) {
      audio.pause();
      audio.removeEventListener("timeupdate", updateProgress);
      audio = null;
    }
  });

  return {
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
    playPrevious
  };
}
