<template>
  <OneNavBar />
  <div class="text-center py-6">
          <!-- Abstract Curved Lines -->


    <h1 class="text-5xl font-extrabold text-gray-800">
      Projects
    </h1>
  </div>
    <div class="p-8">
      
      <!-- Masonry Gallery -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-48 bg-gray-300">
        
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="card relative bg-Transparent text-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
          @click="openModal(index)"
        >
        <div 
    class="w-full h-96 bg-cover bg-center rounded-lg shadow-md" 
    :style="{ backgroundImage: `url(${project.thumbnail || project.images[0]})` }"
  >
    <div class="bg-black bg-opacity-50 w-full h-full flex flex-col justify-end p-4 text-white rounded-lg">
      <h2 class="text-xl font-bold">{{ project.title }}</h2>
      <a :href="project.github" class="text-blue-400 underline mt-2" target="_blank">View on GitHub</a>
    </div>
  </div>
        <div class="p-4">
            <h2 class="text-xl font-bold">{{ project.title }}</h2>
            <p class="tools text-sm text-gray-400 mt-2">Tools: {{ project.tools.join(', ') }}</p>
          </div>
        </div>
      </div>
      <div class="background-svg-container">
  <!-- Your content goes here -->
</div>


      <!-- Modal -->
      <div
        v-if="activeProject !== null"
        class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      >
        <div class="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 relative">
          <!-- Close Button -->
          <button
            class="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            @click="closeModal"
          >
            &times;
          </button>
  
          <!-- Modal Content -->
     <!-- Modal Content -->
<div class="p-6 max-h-screen overflow-y-auto bg-gray-900">
  <h2 class="text-2xl font-bold mb-4">{{ projects[activeProject].title }}</h2>
  <p class="text-gray-700 mb-4">Tools: {{ projects[activeProject].tools.join(', ') }}</p>

  <!-- Carousel -->
  <div class="relative">
    <img
      :src="projects[activeProject].images[carouselIndex]"
      alt="Project Image"
      class="w-full h-96 object-contain rounded-lg"
    />
    <div class="absolute inset-0 flex justify-between items-center px-4">
      <button
        class="text-gray-500 hover:text-gray-800"
        @click="prevImage"
      >
        &#8592;
      </button>
      <button
        class="text-gray-500 hover:text-gray-800"
        @click="nextImage"
      >
        &#8594;
      </button>
    </div>
  </div>

  <p class="text-black mt-4">{{ projects[activeProject].description }}</p>

  <!-- GitHub Button -->
  <a
    :href="projects[activeProject].github"
    target="_blank"
    class="mt-4 inline-block px-6 py-3 bg-indigo-600 text-white rounded-md shadow-lg hover:bg-indigo-700"
  >
    View on GitHub
  </a>
  
</div>


        </div>
      </div>
            <!-- Abstract Curved Lines -->

        </div>
        <Footer /> 
  </template>
  
  <script>
  import Footer from "../components/Footer.vue";
  import FiveFeaturesComponent from "../components/FiveFeaturesComponent.vue";
  import FourPricesComponen from "../components/FourPricesComponen.vue";
  import OneNavBar from "../components/OneNavBar.vue";
  import ThreeCreateSection from "../components/ThreeCreateSection.vue";
  import TwoHeroComponent from "../components/TwoHeroComponent.vue";
  
  export default {
    name: "ParallaxPage",
    components: {
      OneNavBar,
      TwoHeroComponent,
      ThreeCreateSection,
      FourPricesComponen,
      FiveFeaturesComponent,
      Footer,
    },
    data() {
      return {
        hideNav: false,
        lastScrollY: 0,
        projects: [
          {
            title: "CarGram",
        tools: ["Vue.js", "Tailwind CSS", "Laravel", "Inertia"],
        thumbnail: "../src/assets/recog.webp", // Use thumbnail if available, fallback to first image
        images: [
          "../src/assets/recog.webp",
          "https://images.unsplash.com/photo-1626198350980-d48a2c53ca63?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MzY0NTE5OXx8ZW58MHx8fHx8",
          "https://images.unsplash.com/photo-1620223741726-7d39ff6e4e6c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxNzIwMTI4fHxlbnwwfHx8fHw%3D",
        ],
        description:
          "CarGram is a niche Instagram-like social media app for car enthusiasts where users can upload, share, and explore images of cars. The app uses the Imagga API for image recognition to ensure that only car images are accepted. It also integrates Inertia.js for seamless authorization (login/signup) and page transitions without full page reloads, providing a smooth user experience",
        github: "https://github.com/andover88/car_image",
          },
          {
            title: "MovieDB",
        tools: ["React Js", "Python", "Flask", "MovieDB API"],
        thumbnail: "../src/assets/data.webp", // Use thumbnail if available, fallback to first image
        images: [
          "https://images.unsplash.com/photo-1563381013529-1c922c80ac8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW92aWUlMjB0aGVhdGVyfGVufDB8fDB8fHww",
          "https://media.istockphoto.com/id/170535535/photo/smartphone-and-tablet-displaying-online-ebook-library.webp?a=1&b=1&s=612x612&w=0&k=20&c=G9KUewKOGKUZ6rRVEQ3AIOdAPWUaIm-uC8dp-XbMwKE=",
          "https://images.unsplash.com/photo-1735212659418-715ca2ff7c20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW92aWUlMjBhcHB8ZW58MHx8MHx8fDA%3D",
        ],
        description:
        "CineScope is a comprehensive movie and TV show discovery app that connects users with the latest entertainment trends and timeless classics. Powered by the Movie Database (TMDb) API, CineScope offers an intuitive and visually engaging platform for movie enthusiasts and TV show lovers.",
        github: "https://github.com/andover88/projectx",
          },
          {
            title: "Url Converter",
        tools: ["Laravel 11", "Tiny URL API", "Vue js",],
        thumbnail: "../src/assets/urlcon.webp", // Use thumbnail if available, fallback to first image
        images: [
          "https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "../src/assets/tiny.png",
          "../src/assets/urlcon.webp",
        ],
        description:
        "CineScope is a comprehensive movie and TV show discovery app that connects users with the latest entertainment trends and timeless classics. Powered by the Movie Database (TMDb) API, CineScope offers an intuitive and visually engaging platform for movie enthusiasts and TV show lovers.",
        github: "https://github.com/andover88/Url_shorty",
          },
          {
            title: "Quick Notes",
        tools: ["Python", "Flask", "React js", "Google Cloud Auth @2.0"],
        thumbnail:" ../src/assets/notes.webp ",// Use thumbnail if available, fallback to first image
        images: [
          "../src/assets/login.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSahtungyLzTnhptQSZFxfqbUmrbFnwiYPWaA&s",
        ],
        description:
        "A note-taking app with Google 2.0 OAuth API integration allows users to securely log in and register, offering seamless CRUD functionality to create, read, update, and delete notes efficiently.",
        github: "https://github.com/username/project1",
          },
          {
            title: "E-Commerce",
        tools: ["PHP", "Bootstrap", "MySql"],
        thumbnail:" ../src/assets/bike.webp ",// Use thumbnail if available, fallback to first image
        images: [
          "https://media.istockphoto.com/id/2061836383/photo/items-purchased-through-online-shopping-are-delivered-3d-rendering.webp?a=1&b=1&s=612x612&w=0&k=20&c=0IJscID8QzuLCXO_3g5qnwrYGX1vynaXJlhivU2e0Qc=",
          "https://images.unsplash.com/photo-1509562102516-df32c4369506?q=80&w=1893&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        description:
        "An e-commerce application with an admin panel that allows administrators to securely add, update, and delete items in the inventory using a MySQL database.",
        github: "https://github.com/username/project1",
          },
          {
            title: "Project 2",
            tools: ["React", "CSS", "HTML"],
            thumbnail: "https://via.placeholder.com/400x300",
            images: [
              "https://via.placeholder.com/600x400",
              "https://via.placeholder.com/600x400/0000FF",
              "https://via.placeholder.com/600x400/FF0000",
            ],
            description: "This is a detailed description of Project 2.",
            github: "https://github.com/username/project2",
          },
          // Add more projects as needed
        ],
        activeProject: null,
        carouselIndex: 0,
      };
    },
    methods: {
      handleScroll() {
        const currentScrollY = window.scrollY;
        this.hideNav = currentScrollY > this.lastScrollY; // Hide on scroll down, show on scroll up
        this.lastScrollY = currentScrollY;
      },
      openModal(index) {
        this.activeProject = index;
        this.carouselIndex = 0; // Reset carousel index
      },
      closeModal() {
        this.activeProject = null;
      },
      nextImage() {
        const images = this.projects[this.activeProject].images;
        this.carouselIndex = (this.carouselIndex + 1) % images.length;
      },
      prevImage() {
        const images = this.projects[this.activeProject].images;
        this.carouselIndex =
          (this.carouselIndex - 1 + images.length) % images.length;
      },
    },
    mounted() {
      this.lastScrollY = window.scrollY; // Initialize last scroll position
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.handleScroll);
    },
  };
  </script>
  
  <style scoped>
  /* Optional: Add custom styles here */
  .card {
    z-index: 1;
  }
  .background-svg-container {
    position: relative;
    width: 100%;
    height: 100vh; /* Adjust height as needed */
  }

  .background-svg-container svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    transform: rotate(180deg);
    z-index: 0; /* Ensure it stays in the background */
  }
  h2{
    font-family: "MuseoModerno", serif;
  font-optical-sizing: auto;
  font-weight: 900;
  font-style: normal;
  color: white;
  }
  p {
  font-family: "Prompt", serif;
  font-weight: 300;
  font-style: italic;
  color: white;
  position: relative;
  padding: 10px;
}

p::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: gray;
  opacity: 0.5; /* Adjust transparency */
  z-index: -1;
  border-radius: 5px; /* Optional: rounded corners */
}

  .tools {
    font-family: "Prompt", serif;
  font-weight: 900;
  font-style: italic;
  color: white;
  }
  </style>
  