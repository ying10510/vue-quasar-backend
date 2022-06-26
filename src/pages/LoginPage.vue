<template>
  <q-page class="flex flex-center">
    <div style="width: 200px">
      <q-img
        :alt="imgConfig.title"
        :src="imgConfig.link"
        :style="imgConfig.style"
        class="rounded-borders"/>
      <div class="column">
        <q-form
          @submit="onSubmit"
          @reset="onReset"
        >
          <q-input
            v-model="iptAccount"
            :label="iptAccountConfig.label"
            lazy-rules
            :rules="iptAccountConfig.rules"
            clearable clear-icon="close"
          />

          <q-input
            v-model="iptPassword"
            :type="iptPasswordConfig.type"
            :label="iptPasswordConfig.label"
            lazy-rules
            :rules="iptPasswordConfig.rules"
            clearable clear-icon="close"
          />
          <div class="col self-center text-center q-pa-md q-gutter-sm">
            <q-btn no-caps
              color="primary"
              :label="btnLoginConfig.label"
              :type="btnLoginConfig.type" />
            <q-btn no-caps flat
              style="color: #1976d2"
              :label="btnResetConfig.label"
              :type="btnResetConfig.type" />
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    // 元件使用資料
    const imgConfig = {
      title: 'Logo',
      link: 'https://picsum.photos/id/1062/200/200',
      style: {
        width: '200px',
        height: '200px',
      },
    };
    const iptAccount = ref(null);
    const iptPassword = ref(null);
    const confirm = ref(false);
    const confirmContent = 'confirm_content';

    // input account config
    const iptAccountConfig = {
      label: 'Account',
      rules: [(val) => !!val || 'Please enter your account'],
    };

    // input password config
    const iptPasswordConfig = {
      label: 'Password',
      rules: [
        (val) => !!val || 'Please enter your password',
      ],
      type: 'password',
    };

    // button login config
    const btnLoginConfig = {
      label: 'Log in',
      type: 'submit',
    };

    // button reset config
    const btnResetConfig = {
      label: 'Reset',
      type: 'reset',
    };

    // submit event
    const onSubmit = () => {
      console.log('🚀 ~ file: LoginPage.vue ~ line 88 ~ onSubmit ~ onSubmit');
    };

    // reset event
    const onReset = () => {
      iptAccount.value = null;
      iptPassword.value = null;
    };

    return {
      iptAccount,
      iptPassword,
      confirm,
      confirmContent,

      imgConfig,
      iptAccountConfig,
      iptPasswordConfig,
      btnLoginConfig,
      btnResetConfig,

      onSubmit,
      onReset,
    };
  },
});
</script>
