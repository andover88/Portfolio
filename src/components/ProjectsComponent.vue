<template>
  <div class="relative h-screen">
  <!-- Background Pattern -->
  <div class="absolute inset-0">
    <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
  </div>
  
  <!-- Hero Content -->
  <div class="relative z-10 flex h-full flex-col items-center justify-center px-4">
    <div class="max-w-3xl text-center">
      <h1 class="mb-8 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-slate-900">
        Your Next Great
        <span class="text-sky-900">Project</span>
      </h1>
      <p class="mx-auto mb-8 max-w-2xl text-lg text-slate-700">
        Build modern and beautiful websites with this collection of stunning background patterns. 
        Perfect for landing pages, apps, and dashboards.
      </p>
      <div class="flex flex-wrap justify-center gap-4">
        <button class="rounded-lg px-6 py-3 font-medium bg-sky-900 text-white hover:bg-sky-800">
          Get Started
        </button>
        <button class="rounded-lg border px-6 py-3 font-medium border-slate-200 bg-white text-slate-900 hover:bg-slate-50">
          Learn More
        </button>
      </div>
    </div>
  </div>
</div>
  <div v-if="!isLoading" class=" projects-container ">
    <div
  v-for="(project, index) in projects"
  :key="index"
  class="project-card sticky top-0 px-6 py-3 text-gray-900   w-full max-w-screen-md mx-auto overflow-hidden"
>      <h2>{{ project.title }}</h2>
      <ul>
        <li v-for="(tool, i) in project.toolsUsed" :key="i">{{ tool }}</li>
      </ul>
      <button @click="openModal(index)" class="view-project-btn">View Project</button>
    </div>
  </div>

  <!-- Modal for viewing project details -->
  <div v-if="isModalOpen" class="modal-overlay  mx-auto">
    <div class="modal h-screen  mx-auto ">
      <span class="close" @click="closeModal">&times;</span>
      <h2>{{ currentProject.title }}</h2>
      <p v-if="isModalOpen" class="project-description">{{ currentProject.description }}</p>
      <ul>
        <li v-for="(tool, i) in currentProject.toolsUsed" :key="i">{{ tool }}</li>
      </ul>
      <div class="image-slideh-minr mx-auto    ">
        <img class="h-96 mx-auto" :src="currentProject.images[currentSlide]" alt="Project Image">
        <button @click="prevSlide" class="slider-btn">Prev</button>
        <button @click="nextSlide" class="slider-btn">Next</button>
      </div>
      <a :href="currentProject.githubLink" target="_blank" class="github-link">{{ currentProject.githubButton.text }}</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true, // Loading state
      isPageLoaded: false, // Animation state
      isModalOpen: false, // Modal state
      currentProject: null, // Current project in modal
      currentSlide: 0, // Current slide index
      projects: [
        {
          title: "CarGram",
          description: "CarGram is a unique image-sharing app designed exclusively for car enthusiasts! Leveraging the powerful Imagga API, CarGram ensures that every image uploaded to the platform is of a car.Secure Authentication: Built with Jetstream, CarGram ensures a secure and reliable user authentication experience. Enjoy effortless login, registration, and password management with advanced features",
          toolsUsed: ["Laravel", "Vue Js", "Tailwind", "Jetstream"],
          githubLink: "https://github.com/andover88/ImageRecognition.git",
          images: [
            "./src/assets/bmw.jpg",
            "https://images.unsplash.com/photo-1524102724373-bcf6ed410592?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzJTIwY2FyfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1602447853028-5d7df0560b12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQyfHx8ZW58MHx8fHx8"
          ],
          githubButton: {
            text: "View on GitHub",
            link: "https://github.com/andover88/ImageRecognition.git"
          }
        },
        {
          title: "Shortify: Simplify Your URLs",
          description: "Shortify is a user-friendly app designed to transform lengthy URLs into concise, manageable links using the reliable TinyURL API. Whether you're sharing links on social media, in emails, or during presentations, Shortify ensures your links are easy to share and aesthetically pleasing.",
          toolsUsed: ["LAravel", "Vue Js", "Tailwind"],
          githubLink: "https://github.com/andover88/Url_shorty",
          images: [
            "../src/assets/tiny.png", "https://images.pexels.com/photos/2882690/pexels-photo-2882690.jpeg?auto=compress&cs=tinysrgb&w=600"
          ],
          githubButton: {
            text: "View on GitHub",
            link: "https://github.com/andover88/Url_shorty"
          }
        },
        {
          title: "The Watchers",
          description: "CineScope is a sleek and powerful app that lets you explore the world of movies and celebrities like never before. Powered by a robust Movie API, CineScope provides a seamless experience to search for movies, discover what's currently playing in theaters, and dive into the lives of your favorite celebrities.",
          toolsUsed: ["Python", "Flask", "React Js"],
          githubLink: "https://github.com/yourusername/project3",
          images: [
            "../src/assets/movies.jpg","../src/assets/watchers.png", "../src/assets/celebs.png", 
          ],
          githubButton: {
            text: "View on GitHub",
            link: "https://github.com/yourusername/project3"
          }
        },
        {
          title: "NoteSync",
          description: "NoteSync is a modern, secure, and intuitive app designed to simplify your life by combining the power of note-taking with calendar management. With Google Authentication 2.0, NoteSync ensures a seamless and secure login experience, so your data stays protected and accessible only to you.",
          toolsUsed: ["Flask", "React Js", "Google Api"],
          githubLink: "https://github.com/andover88/projectx",
          images: [
            "project4-1.jpg", "project4-2.jpg", "project4-3.jpg"
          ],
          githubButton: {
            text: "View on GitHub",
            link: "https://github.com/andover88/projectx"
          }
        },
        {
          title: "ShopMaster",
          description: "ShopMaster is a feature-rich e-commerce application designed to deliver a seamless shopping experience for customers while empowering administrators with full control over product management. Whether you’re shopping for your favorite items or managing your online store, ShopMaster makes it simple, efficient, and intuitive.",
          toolsUsed: ["PHP", "Bootstrap", "MySql"],
          githubLink: "https://github.com/yourusername/project5",
          images: [
            "project5-1.jpg", "project5-2.jpg", "project5-3.jpg"
          ],
          githubButton: {
            text: "View on GitHub",
            link: "https://github.com/yourusername/project5"
          }
        }
      ]
    };
  },
  mounted() {
    // Show loading animation for 3 seconds
    setTimeout(() => {
      this.isLoading = false;
      this.isPageLoaded = true; // Trigger slide-in animation
    }, 3000);
  },
  methods: {
    openModal(index) {
      this.currentProject = this.projects[index];
      this.currentSlide = 0;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + this.currentProject.images.length) %
        this.currentProject.images.length;
    },
    nextSlide() {
      this.currentSlide =
        (this.currentSlide + 1) % this.currentProject.images.length;
    }
  }
};
</script>
<style scoped>
/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


/* Container for Projects */
.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 3fr));
  position: relative; /* Ensure the parent is scrollable for sticky */
  height: 100vh; /* Adjust height to allow scrolling */
  width: 100%;
  overflow-x: hidden;
  margin: auto;

  
  /* Centering the grid container */
  place-items: center;
}

/* Individual Project Cards */
.project-card {
  background-color: transparent;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  padding: 20px;
  text-align: center;
  height: 500px;
  margin:auto;

}

.sticky {
position: sticky;
top: 0;
z-index: 20;
background-color: white; /* Optional: change background color when sticky */
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Optional: add shadow for effect */
}
.project-card:hover {
  transform: translateY(-10px);
}

.project-card h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-family: "MuseoModerno", serif;
font-optical-sizing: auto;
font-weight:900;
font-style: normal;
}

.project-card ul {
  list-style-type: none;
  padding: 0;
  margin-bottom: 20px;
}

.project-card ul li {
  font-size: 0.9rem;
  color: #666;
}

.view-project-btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.view-project-btn:hover {
  background-color: #0056b3;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color:transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background-color: transparent;
  padding: 30px;
  border-radius: 10px;
  max-width: 800px;
  width: 90%;
  height: 100%;
  overflow-y: scroll;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  position: relative;
  
}

.modal h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  font-family: "MuseoModerno", serif;
font-optical-sizing: auto;
font-weight:900;
font-style: normal;
}

.project-description {
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;
  text-align: center;

  
  
}

.image-slider img {
  width: 100%;
  height: 300px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.slider-btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin: 5px;
  transition: background-color 0.3s;
  margin-bottom: 20px;
  font-family: "MuseoModerno", serif;
font-optical-sizing: auto;
font-weight:900;
font-style: normal;
}

.slider-btn:hover {
  background-color: #0056b3;
}

.github-link {
  display: inline-block;
  margin-top: 20px;
  color: #007bff;
  text-decoration: none;
  font-size: 1.1rem;
}

.github-link:hover {
  text-decoration: underline;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 2rem;
  cursor: pointer;
  color: #333;
}

.close:hover {
  color: #007bff;
}

/* Sticky for Mobile Devices */
@media (max-width: 768px) {
  .project-card {
    position: sticky;
    top: 0;
    z-index: 20;
    background-color:white; /* Optional: change background color when sticky */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Optional: add shadow for effect */
  }
}

/* Masonry Grid for Larger Screens */
@media (min-width: 769px) {
  .projects-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
  }

  .project-card {
    position: static; /* Remove sticky behavior */
    height: auto; /* Adjust height for masonry layout */
  }
}

</style>