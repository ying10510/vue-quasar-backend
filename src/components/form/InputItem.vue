<template>
    <q-input
      :model-value="value"
      @update:model-value="(val) => $emit('update:value', val)"
      :label="iptConfig.label"
      :type="iptConfig.type || 'text'"
      :rules="iptConfig.rules"
      clearable clear-icon="close"/>
    <!-- <pre>{{ iptConfig }}</pre> -->
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormInput',
  props: ['value', 'iptConfig'],
  emits: ['update:value'],
});
</script>
