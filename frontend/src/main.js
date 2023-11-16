import { createApp } from 'vue';
import App from './App.vue';
import * as VueRouter from "vue-router";
import PlantsPage from "./pages/PlantsPage.vue";
import PlantDetailsPage from "./pages/PlantDetailsPage.vue";

createApp(App)
.use(VueRouter.createRouter({
  history: VueRouter.createWebHistory(import.meta.env.DEV),
  routes: [{
    path: "/plants",
    component: PlantsPage,
  },
  {
    path: "/plants/:id",
    component: PlantDetailsPage,
  }
]
}))
.mount('#app');
