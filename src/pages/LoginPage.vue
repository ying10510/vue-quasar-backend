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
          <InputItem v-model:value="iptAccount" :iptConfig="iptAccountConfig" />
          <InputItem v-model:value="iptPassword" :iptConfig="iptPasswordConfig" />
          <div class="col self-center text-center q-pa-md q-gutter-sm">
            <ButtonItem no-caps color="primary" :btnConfig="btnLoginConfig" />
            <ButtonItem no-caps flat style="color: #1976d2" :btnConfig="btnResetConfig" />
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>
<script>
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from 'stores/auth';
import InputItem from '../components/form/InputItem.vue';
import ButtonItem from '../components/form/ButtonItem.vue';

export default defineComponent({
  name: 'LoginPage',
  components: {
    InputItem,
    ButtonItem,
  },
  setup() {
    const router = useRouter();
    const auth = useAuthStore();

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

    // input account config
    const iptAccountConfig = {
      label: 'Account',
      rules: [
        (val) => !!val || 'Please enter your account',
        (val) => val.length <= 10 || 'Please use maximum 10 characters',
      ],
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

    const checkInput = () => {
      if (iptAccount.value && iptPassword.value) {
        console.log('confirm...');
      } else {
        console.log('empty...');
      }
    };

    // submit event
    const onSubmit = () => {
      checkInput();
      console.log('🚀 ~ file: LoginPage.vue ~ line 88 ~ onSubmit ~ onSubmit');

      auth.setAccount(iptAccount.value);

      router.replace({
        name: 'Index',
      });
    };

    // reset event
    const onReset = () => {
      iptAccount.value = null;
      iptPassword.value = null;
    };

    return {
      iptAccount,
      iptPassword,

      imgConfig,
      iptAccountConfig,
      iptPasswordConfig,
      btnLoginConfig,
      btnResetConfig,

      onSubmit,
      onReset,
      checkInput,
    };
  },
});
</script>
