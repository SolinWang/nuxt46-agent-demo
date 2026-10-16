<script setup lang="ts">
// ⚠️ 故意保留的 SSR bug（示範用）：setup 階段直接存取 window。
// SSR 階段沒有瀏覽器的 window 物件，存取 localStorage 會丟出 500，觸發 Nuxt 4.6 的錯誤畫面。
// 示範流程：在錯誤畫面按「Copy error」→ 貼給 agent → 讓 agent 修正。
const lastViewed = window.localStorage.getItem('lastViewed') ?? '無'
</script>

<template>
  <section>
    <h1>最近瀏覽</h1>
    <p>{{ lastViewed }}</p>
  </section>
</template>
