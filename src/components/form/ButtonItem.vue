<template>
  <q-btn :label="btnConfig.label" :type="btnConfig.type" />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormButton',
  // 定義元件可接收資料
  props: ['btnConfig'],
  emits: ['checkInput'],
  methods: {
    onCheckInput() {
      // 通知父層元件檢查input
      this.$emit('checkInput');
    },
  },
});
</script>
