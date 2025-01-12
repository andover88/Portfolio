import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PortfolioView from '../views/PortfolioView.vue';
import AboutView from '../views/AboutView.vue';
import ContactView from '../views/ContactView.vue';
import ServicesView from '../views/ServicesView.vue';




const routes = [
  { path: '/', name: 'Home', component: HomeView }, // Path for Home
  { path: '/portfolio', name: 'PortfolioView', component: PortfolioView }, // Path for Home
  { path: '/about', name: 'AboutView', component: AboutView },
  { path: '/contact', name: 'ContactView', component: ContactView },
  { path: '/services', name: 'ServicesView', component: ServicesView },





];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
