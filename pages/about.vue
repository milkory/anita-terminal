<script setup lang="ts">
useHead({
  title: '阿妮塔终端'
});

onMounted(() => setLastView('about'));
</script>

<template>
  <div class="fixed-top mx-auto h-full d-flex align-items-center">
    <AnitaPanel class="rs-about m-auto">
      <div class="row h-100 flex-column flex-md-row flex-nowrap">
        <div class="col-md-4 text-center mb-4 d-flex align-items-center justify-content-around">
          <div>
            <AnitaLoading class="about-logo m-auto only-pc mb-4" />
            <div class="mt-4 fs-5 lh-1 fw-bold">阿妮塔终端</div>
            <div class="mt-2 fs-small lh-1 text-secondary">ANITA TERMINAL</div>
          </div>
        </div>
        <div class="col-md-8 overflow-y-auto flex-1">
          <div class="h-100">
            <div class="fs-5 fw-bold mb-3">更新日志</div>
            <div class="fw-bold font-title text-warning">2024/4/8 - V1.1</div>
            <ul>
              <li>在物品页面中添加词缀系列功能。</li>
            </ul>
            <div class="fw-bold font-title text-secondary">2024/4/6 - V1.0</div>
            <ul>
              <li>重制关于页，添加更新日志。</li>
            </ul>
          </div>
        </div>
      </div>
    </AnitaPanel>
  </div>
</template>

<style>
.rs-about {
  width: 700px;
  height: 350px;
  max-width: 85%;
}

.about-logo {
  width: 85%;
}

@media (max-width: 768px) {
  .rs-about {
    height: 65%;
  }
}
</style>
