<script setup lang="ts">
const props = defineProps<{
  lang: 'zh' | 'jp';
  voiceId: number;
}>();

const lang = unitVoiceLang[props.lang];

const identifier = `${props.lang}-${props.voiceId}`;
const voicePlaying = useState('char-voice-playing');
const playing = computed(() => voicePlaying.value == identifier);

let audio: HTMLAudioElement;

function play() {
  voicePlaying.value = `${props.lang}-${props.voiceId}`;

  if (!audio) {
    audio = new Audio(`https://static.anita.wiki/audio/res/${props.voiceId}/${props.lang}.wav`);
    audio.addEventListener('pause', () => (voicePlaying.value = undefined));
  } else {
    audio.currentTime = 0;
  }
  audio.play();
}

function stop() {
  voicePlaying.value = undefined;
  audio.pause();
}
</script>

<template>
  <div class="char-voice-play d-inline-block ms-1">
    <Icon v-if="!playing" :name="lang.icon" class="fs-5 btn-play" @click="play()" />
    <Icon v-else name="material-symbols:pause-circle" class="fs-5 btn-pause" @click="stop()" />
  </div>
</template>

<style>
.char-voice-play {
  cursor: pointer;
}
</style>
