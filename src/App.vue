<!-- <template>
  <div
    class="App o-container o-container--s o-vertical-spacing o-vertical-spacing--xl"
  >
    <HeroSection />

    <NavBar />

    <router-view />

    <GridComponent />
  </div>
</template>

<script>
  import { RouterLink, RouterView } from 'vue-router'
import HeroSection from './components/HeroSection.vue';
import NavBar from './components/NavBar.vue';
import GridComponent from './components/GridComponent.vue';

export default {
  name: 'App',
  components: {
    HeroSection,
    NavBar,
    GridComponent,
  },
};
</script>

<style lang="scss">

.App__example {
  margin-bottom: 2rem;
}
.flex-grid {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}
.flex-grid > * {
  flex: 1 1 calc(33.333% - 1rem);
  min-width: 250px;
  max-width: 100%;
}
@media (max-width: 768px) {
  .flex-grid {
    flex-direction: column;
    align-items: stretch;
  }
  .flex-grid > * {
    flex: 1 1 100%;
  }
}
</style>
 -->


 <template>
  <div id="app">
    <router-view />
    <!-- OR Replace router-view with your content if not using a router -->
    <!-- <HomeView /> -->
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Add any global styles here */
</style>
