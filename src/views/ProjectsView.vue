<template>
  <NavBar />

  <div class="relative w-full h-full">
    <!-- Project Grid -->
  
    <div class="parallax">
    <div class="fixed">    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="relative bg-gray-800 text-white rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
        :class="project.size"
        @click="openModal(index)"
      >
        <img :src="project.images[0]" alt="Project Image" class="w-min h-full object-contain opacity-80" />
        <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h3 class="text-xl font-bold">{{ project.title }}</h3>
        </div>
      </div>
    </div>
  
    <div
      v-if="isModalOpen"
      class="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
    >
      <div class="relative bg-white rounded-lg w-11/12 md:w-3/4 lg:w-1/2">
        <!-- Close Button -->
        <button
          class="close absolute top-4 right-4 text-black font-bold z-60"
          @click="closeModal"
        >
          &times;
        </button>
        <div class="relative">
          <img :src="currentProject.images[currentSlide]" alt="Project Slide" class="w-full h-96 object-cover" />
          <div class="p-4">
            <h2 class="text-xl font-bold">{{ currentProject.title }}</h2>
            <p class="mt-2 text-gray-700">{{ currentProject.description }}</p>
              <!-- GitHub Button -->
  <a :href="currentProject.githubLink" target="_blank" class="mt-4 inline-block bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700">
    <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.868 8.167 6.839 9.485.5.092.683-.217.683-.483 0-.237-.009-.869-.014-1.706-2.781.605-3.374-1.34-3.374-1.34-.455-1.159-1.111-1.468-1.111-1.468-.909-.621.069-.609.069-.609 1.004.071 1.53 1.035 1.53 1.035.892 1.528 2.342 1.086 2.91.831.091-.647.349-1.086.636-1.335-2.221-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.983 1.03-2.684-.103-.252-.447-1.267.099-2.636 0 0 .84-.268 2.746 1.02A9.79 9.79 0 0110 3.307c.853 0 1.717.115 2.522.34 1.907-1.288 2.746-1.02 2.746-1.02.547 1.37.202 2.384.099 2.636.64.701 1.03 1.593 1.03 2.684 0 3.84-2.335 4.688-4.558 4.94.36.308.684.92.684 1.85 0 1.34-.008 2.426-.008 2.753 0 .267.183.577.689.482A9.96 9.96 0 0020 10c0-5.523-4.477-10-10-10z" clip-rule="evenodd" />
    </svg>
    GitHub
  </a>
     <!-- Tools Used -->
     <p class="mt-2 text-gray-600">Tools: {{ currentProject.tools }}</p>
          </div>
          <!-- Carousel Controls -->
          <button
            class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
            @click="prevSlide"
          >
            &#9664;
          </button>
          <button
            class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
            @click="nextSlide"
          >
            &#9654;
          </button>
        </div>
      </div>
    </div></div>
    <div class="parallax__layer parallax__layer--back">
      <div class="starfield">
    
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="parallax__layer parallax__layer--back2">
      <div class="starfield">
  
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="parallax__layer parallax__layer--back3">
      <div class="starfield">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="parallax__layer parallax__layer--base">
      <div class="starfield">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>    
  
  </div>
  
    <!-- Modal -->
  
  </div>
  <Footer />
</template>

<script>
import NavBar from "../components/NavBar.vue"; // Adjust the path as needed
import Footer from "../components/Footer.vue"; // Adjust the path as needed

export default {
  name: "ProjectGrid",
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      projects: [
        {
          title: "Image recognition | IG clone",
          images: [
            "https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/446389/pexels-photo-446389.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC5aKZ0uC3_OgcPAz55thq-sNMWGhB9ETn5g&s",
          ],
          githubLink: "https://github.com/andover88/car_image",
          tools: "Laravel, Vue js, Imagga",
          description:"Using the Imagga API, this application takes an image as input and sends it to the API to verify if the image is of a vehicle. If the image is validated as a vehicle, the user is allowed to upload it; otherwise, an error message is returned.",
          size: "col-span-2 row-span-2",
          fontStyle: {
            title: "font-family: 'Bubbler One', serif; font-weight: bold;",
            description: "font-family: 'Bubbler One', serif; font-style: italic;",
          },
        },
        {
          title: "Google Authentication 2.0",
          images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlsud3pz4_fYnzWQJaPpE20cao_jHNaTPEzQ&s",
            "data:image/png;base64,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",
          ],
          githubLink: "https://github.com/andover88/projectx",
          tools: "Laravel, Vue js, Imagga",
          description: "This application allows users to save notes, add calendar events, and upload movies. It uses Google 2.0 authentication to ensure a secure and safe login experience.",
          size: "",
          fontStyle: {
            title: "font-family: 'Bubbler One', serif; font-weight: bold;",
            description: "font-family: 'Bubbler One', serif; font-style: italic;",
          },
        },
        {

          title: "Tiny URL",
          images: [
            "https://images.pexels.com/photos/2882690/pexels-photo-2882690.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UjVJUUICvh1gxpFpJzfWTdDY3fGj9gGjCA&s",
          ],
          githubLink:"https://github.com/andover88/Url_shorty",
          description:"This application utilizes the TinyURL API to shorten URLs, making it easier to share links with friends. It ensures privacy and security when sharing links.",
          size: "",
          fontStyle: {
            title: "font-family: 'Bubbler One', serif; font-weight: bold;",
            description: "font-family: 'Bubbler One', serif; font-style: italic;",
          },
        },
        {
          title: "Movie Database",
          images: [
            "https://images.pexels.com/photos/7991378/pexels-photo-7991378.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjwQ1dLBdgGnay7WzqizLFQp_gJRLaH1ws9WCEBZVbBg&s",
          ],
          description: "This application uses The Movie Database (TMDb) API to display movies currently playing in theaters, along with their trailers. Users can also search for any movie and explore information about celebrities.",
          size: "col-span-2",
          fontStyle: {
            title: "font-family: 'Bubbler One', serif; font-weight: bold;",
            description: "font-family: 'Bubbler One', serif; font-style: italic;",
          },
        },
        {
          title: "Project 5",
          images: [
            "https://images.pexels.com/photos/3244846/pexels-photo-3244846.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.unsplash.com/flagged/photo-1558954157-aa76c0d246c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
          ],
          
          description:"This CRUD application allows real estate agents to showcase homes for sale. Agents can manage their listings and communicate with clients effectively.",
          size: "row-span-2",
          fontStyle: {
            title: "font-family: 'Bubbler One', serif; font-weight: bold;",
            description: "font-family: 'Bubbler One', serif; font-style: italic;",
          },
        },
      ],
      isModalOpen: false,
      currentProject: null,
      currentSlide: 0,
    };
  },
  methods: {
    openModal(index) {
      this.currentProject = this.projects[index];
      this.currentSlide = 0;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.currentProject = null;
      this.currentSlide = 0;
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      } else {
        this.currentSlide = this.currentProject.images.length - 1;
      }
    },
    nextSlide() {
      if (this.currentSlide < this.currentProject.images.length - 1) {
        this.currentSlide++;
      } else {
        this.currentSlide = 0;
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
body {
  font: 100% / 1.5 Arial;
/*   background: linear-gradient(135deg, #3e028c -50%, #000 100%); */
  background-image: linear-gradient(135deg, #e7627d 0%, #b8235a 25%, #801357 50%, #3d1635 75%, #1c1a27 100%);
}
::-webkit-scrollbar { 
    display: none; 
}
.fixed {
  position: fixed;
  color: white;
  font-weight: 700;
  text-align: center;
  width: 100vw;
  top: 50%;
  font-size: 24px;
  z-index: 100;
}
.parallax {
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-perspective: 1px;
  perspective: 1px;
}

.parallax__layer {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.parallax__layer--base {
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}

.parallax__layer--back {
  -webkit-transform: translateZ(-2px) scale(3);
  transform: translateZ(-2px) scale(3);
}
.parallax__layer--back2 {
  -webkit-transform: translateZ(-6px) scale(5);
  transform: translateZ(-6px) scale(5);
}
.parallax__layer--back3 {
  -webkit-transform: translateZ(-12px) scale(6);
  transform: translateZ(-12px) scale(6);
}

/* add some padding to force scrollbars */
.parallax__layer {
  padding: 100vh 0;
}

.starfield > * {
  background-size: 200px 200px;
  background-image: radial-gradient(
      2px 2px at 40px 60px,
      #ccc,
      rgba(0, 0, 0, 0)
    ),
    radial-gradient(2px 2px at 20px 50px, #ddd, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 30px 100px, #eee, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 40px 60px, rgb(0, 255, 0), rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 110px 90px, rgb(255, 0, 0), rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 190px 150px, rgb(255, 200, 0), rgba(0, 0, 0, 0));
  background-repeat: repeat;
}
.starfield > * {
  position: absolute;
  top: -250%;
  left: 0;
  height: 500%;
  width: 100%;
}

.starfield span:nth-child(2) {
  transform: rotate(45deg);
}
.starfield span:nth-child(3) {
  transform: rotate(69deg);
}
.starfield span:nth-child(4) {
  transform: rotate(123deg);
}
.relative {
  background: linear-gradient(to bottom, #eee2e2, #07071b); /* Black to gray gradient */
  background-size: 100% 100%; /* Ensure the gradient fills the entire background */
}
.grid > div {
  position: relative;
  z-index: 1;
  aspect-ratio: 3;
  background-color: black;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px);
  background-size: 50px 50px;
  
}
.close{
  z-index: 100;
}
</style>
