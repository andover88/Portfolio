import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import ContactView from '../views/ContactView.vue';
import AboutView from '../views/AboutView.vue';
import ServicesView from '../views/ServicesView.vue';



const routes = [
  { path: '/', name: 'Home', component: HomeView }, // Path for Home
  { path: '/projects', name: 'Projects', component: ProjectsView }, // Unique path for 
  { path: '/contact', name: 'Contact', component: ContactView},
  { path: '/about', name: 'About', component: AboutView},
  { path: '/services', name: 'Services', component: ServicesView},


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
