import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Only if using Vue Router
import 'flickity/css/flickity.css';
import Flickity from 'flickity';



// Optional: Import Global Styles
import '../src/style.css';

const app = createApp(App);

// Use the router if available
app.use(router);

// Mount the app to the #app div
app.mount('#app');
