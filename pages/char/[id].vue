<script setup lang="ts">
import AnitaPanel from '~/components/common/AnitaPanel.vue';

const route = useRoute();

const id = route.params.id;
const { data } = await useFetch<Unit>(`/data/char/${id}.json`);

if (!data.value) {
  throw createError({
    statusCode: 404
  });
}

useHead({
  title: data.value.name
});
</script>

<template>
  <div v-if="data" class="row p-2">
    <div class="col-md-6">
      <CharView :views="data['views']" />
    </div>
    <AnitaPanel class="char-info col-md-6">
      <CharBasicInfo
        :data="data"
      /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </AnitaPanel>
  </div>
</template>

<style>
#background {
  background-image: url(/img/bg/anita_ob.png);
}

.char-info {
  position: relative;
  z-index: 100;
}

@media (max-width: 768px) {
  .char-info {
    margin-top: 15px;
  }
}
</style>
