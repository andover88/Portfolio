import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import ContactView from '../views/ContactView.vue';
import AboutView from '../views/AboutView.vue';



const routes = [
  { path: '/', name: 'Home', component: HomeView }, // Path for Home
  { path: '/projects', name: 'Projects', component: ProjectsView }, // Unique path for 
  { path: '/contact', name: 'Contact', component: ContactView},
  { path: '/about', name: 'About', component: AboutView},


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
