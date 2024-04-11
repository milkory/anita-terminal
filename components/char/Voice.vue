<script setup lang="ts">
const props = defineProps<{
  data: Unit;
}>();

const file = props.data.files[0];
</script>

<template>
  <div class="rs-char-audio">
    <BCard v-if="data.files.length > 0" variant="dark" class="main-text mt-2">
      <div class="d-flex align-items-center justify-content-center">
        <Icon name="streamline:voice-mail-solid" class="me-2" />
        {{ file.cv1 == '' ? '—' : file.cv1 }}
        <span class="fs-small text-secondary mx-2">/</span>
        {{ file.cv2 == '' ? '—' : file.cv2 }}
      </div>
    </BCard>
    <BTabs class="mt-2" pills fill nav-class="mb-2">
      <BTab v-for="(type, typeKey) in unitVoiceType" :key="typeKey">
        <template #title>
          <div class="d-flex align-items-center justify-content-center">
            <Icon :name="type.icon" class="fs-5 me-1" />
            {{ type.name }}
          </div>
        </template>
        <BCard
          v-for="(audio, i) in file[typeKey]"
          :key="audio.id"
          variant="dark"
          class="char-voice main-text mt-2 py-0"
        >
          <template #header>
            <div v-b-toggle="`char-voice-${i}`" class="char-voice-title fw-bold mb-0">
              {{ audio.name }}
              <BBadge v-if="audio.unlockLevel" variant="light" class="ms-2">
                默契等级 LV {{ audio.unlockLevel }} 解锁
              </BBadge>
              <div class="d-inline-block float-end h-100">
                <template v-for="(_, key, j) in unitVoiceLang">
                  <CharVoicePlayer
                    v-if="file.resExists[j]"
                    :key="key"
                    :lang="key"
                    :voice-id="audio.id"
                    class="d-inline-block ms-1"
                  />
                </template>
              </div>
            </div>
          </template>
          <div class="char-voice-content" v-html="audio.text"></div>
        </BCard>
      </BTab>
    </BTabs>
  </div>
</template>

<style lang="scss">
.char-voice-title {
  padding: var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);
}

.char-voice-content {
  padding: 1rem;
}

.char-voice {
  .card-header {
    border-radius: 0;
    padding: 0;
  }
  .card-body {
    padding: 0;
  }
}
</style>
