<template>
  <div>
    <slot name="header" :title="title" />
    <slot>默认内容</slot>
    <slot name="footer" />
  </div>
</template>

<script setup lang="ts">
import { ref, useSlots } from 'vue';

const title = ref('Hello Slots');

console.log('🚀 ~ slots:', useSlots());
</script>
