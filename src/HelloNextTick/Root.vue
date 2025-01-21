<!-- eslint-disable vue/singleline-html-element-content-newline -->
<template>
  <div>
    <button type="button" @click="updateUser">更新用户</button>
    <UserInfo ref="userRef" :user-id="userId" />
  </div>
</template>

<script setup lang="ts">
import { type ComponentInstance, ref } from 'vue';
import UserInfo from './UserInfo.vue';

const userId = ref(1);
const userRef = ref<ComponentInstance<typeof UserInfo>>();

const updateUser = () => {
  userId.value = 2;
  userRef.value.getUserInfo();
};
</script>
