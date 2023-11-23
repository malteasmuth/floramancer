import { createApp } from 'vue';
import App from './App.vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faSeedling } from '@fortawesome/free-solid-svg-icons'

import "./main.css";
import * as VueRouter from "vue-router";
import PlantsPage from "./pages/PlantsPage.vue";
import PlantDetailsPage from "./pages/PlantDetailsPage.vue";
import PageNotFound from "./pages/PageNotFound.vue"

library.add(faSeedling)

createApp(App)
.component("font-awesome-icon", FontAwesomeIcon)
.use(VueRouter.createRouter({
  history: VueRouter.createWebHistory(import.meta.env.DEV),
  routes: [{
    path: "/plants",
    component: PlantsPage,
  },
  {
    path: "/plants/:id",
    component: PlantDetailsPage,
  },
  {
    path: '/:pathMatch(.*)*',
    component: PageNotFound,
  }
]
}))
.mount('#app');
