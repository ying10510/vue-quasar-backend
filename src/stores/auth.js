import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    isLogin: false,
    account: null,
  }),
  getters: {
    getIsLogin: (state) => state.isLogin,
    getAccount: (state) => state.account,
  },
  actions: {
    resetAuth() {
      this.token = null;
      this.isLogin = false;
      this.account = null;
    },
    setAccount(account) {
      this.token = 'pinia';
      this.account = account;
      this.isLogin = true;
    },
  },
});
