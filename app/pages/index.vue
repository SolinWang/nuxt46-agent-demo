<script setup lang="ts">
import type { ApiResponse, Product } from '#shared/types/api'

// SSR 安全：資料預取統一走 useFetch
const { data, status, error, refresh } = await useFetch<ApiResponse<Product[]>>('/api/products', {
  key: 'products',
})

const products = computed<Product[]>(() => data.value?.data ?? [])
</script>

<template>
  <section>
    <h1>商品列表</h1>
    <p v-if="status === 'pending'">載入中…</p>
    <div v-else-if="error" role="alert">
      <p>載入失敗：{{ error.message }}</p>
      <button type="button" @click="refresh()">重試</button>
    </div>
    <p v-else-if="products.length === 0">目前沒有商品</p>
    <ul v-else>
      <li v-for="p in products" :key="p.id">{{ p.name }} — {{ p.currency }} {{ p.price }}</li>
    </ul>
  </section>
</template>
