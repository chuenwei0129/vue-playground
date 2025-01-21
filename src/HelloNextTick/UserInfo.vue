<template>
  <div>userId: {{ userId }}</div>
</template>

<script setup>
const props = defineProps({
  userId: {
    type: String,
    required: true,
  },
});

defineExpose({
  getUserInfo() {
    console.log('获取用户信息', props.userId);
  },
});
</script>
