import Vue from "vue";
import VueMeta from "vue-meta";
import App from "./App.vue";
import router from "./router";
import "./assets/styles.css";

Vue.use(VueMeta);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
