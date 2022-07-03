<template>
  <router-view />
</template>

<script>
import { defineComponent, onBeforeMount } from 'vue';
import { useAuthStore } from 'stores/auth';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'App',
  setup() {
    const auth = useAuthStore();
    const { token, isLogin, account } = storeToRefs(auth);
    const router = useRouter();

    console.log('🚀 ~ file: App.vue ~ line 15 ~ setup ~ account', account.value);
    console.log('🚀 ~ file: App.vue ~ line 15 ~ setup ~ isLogin', isLogin.value);
    console.log('🚀 ~ file: App.vue ~ line 15 ~ setup ~ token', token.value);

    onBeforeMount(() => {
      if (!token) {
        router.push({
          name: 'Index',
        });
      } else {
        router.replace({
          name: 'Login',
        });
      }
    });
  },
});
</script>
