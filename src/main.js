import Vue from "vue";
import App from "./App.vue";
import LazyLoadVue from "@/plugins/LazyLoadVue";

Vue.config.productionTip = false;

Vue.use(LazyLoadVue);

new Vue({
  render: h => h(App)
}).$mount("#app");
