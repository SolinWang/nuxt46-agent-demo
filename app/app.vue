<template>
  <div class="layout">
    <NuxtRouteAnnouncer />
    <nav class="nav">
      <NuxtLink to="/">商品列表</NuxtLink>
      <NuxtLink to="/broken">故意出錯的頁面</NuxtLink>
    </nav>
    <NuxtPage />
  </div>
</template>

<style>
.layout { max-width: 720px; margin: 0 auto; padding: 16px; font-family: system-ui, sans-serif; }
.nav { display: flex; gap: 16px; margin-bottom: 24px; }
</style>
