import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Only if using Vue Router
import 'flickity/css/flickity.css';
import Flickity from 'flickity';

import { CursorFx } from '@luxdamore/vue-cursor-fx';
import '@luxdamore/vue-cursor-fx/dist/CursorFx.css';

// Optional: Import Global Styles
import '../src/style.css';

const app = createApp(App);

// Use the router if available
app.use(router);
app.component('cursor-fx', CursorFx);
// Mount the app to the #app div
app.mount('#app');
