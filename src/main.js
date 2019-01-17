import Vue from "vue";
import App from "./App.vue";
import LazyLoadVue from "@/plugins/LazyLoadVue";

Vue.config.productionTip = false;

Vue.use(LazyLoadVue, {
  instances: {
    root: {
      elements_selector: ".lazy-custom-root"
    },
    webp: {
      elements_selector: ".lazy-custom-webp",
      to_webp: true
    }
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");
