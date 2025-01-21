<script setup lang="ts">
import First from './First.vue';
import { Father } from './Father';
</script>

<template>
  <First>
    <template #header="{ title }">
      <h1>{{ title }}</h1>
    </template>
    <template #footer>
      <p>footer</p>
    </template>
    <p>覆盖默认标签</p>
  </First>
  <Father />
</template>
