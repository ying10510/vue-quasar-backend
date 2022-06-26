<template>
    <q-input
      v-model="iptValue"
      :label="iptConfig.label"
      :type="iptConfig.type || 'text'"
      :rules="iptConfig.rules"
      clearable clear-icon="close"/>
    <!-- <pre>{{ iptConfig }}</pre> -->
</template>
<script>
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'FormInput',
  props: ['value', 'iptConfig'],
  emits: ['update:value'],
  setup(props, { emit }) {
    const iptValue = computed({
      get: () => props.value,
      set: (val) => {
        emit('update:value', val);
      },
    });

    return { iptValue };
  },
});
</script>
