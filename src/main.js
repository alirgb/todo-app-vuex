import Vue from "vue";
import App from "./App.vue";
import { configs } from "./config";
Vue.config.productionTip = false;

new Vue({
  ...configs,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
