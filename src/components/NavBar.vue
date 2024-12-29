<template>
	<main class="w-full h-full text-white font-light relative">
	  <!-- Menu Toggle Label -->
	  <label
		for="menu"
		class="fixed top-8 left-24 z-50 cursor-pointer text-lg font-bold uppercase flex items-center space-x-2"
	  >
		<span>Menu</span>
		<span class="relative w-8 h-1 bg-white">
		  <span class="absolute top-[-6px] left-0 w-full h-1 bg-white transform transition-transform"></span>
		  <span class="absolute bottom-[-6px] left-0 w-full h-1 bg-white transform transition-transform"></span>
		</span>
	  </label>
  
	  <!-- Hidden Input for Menu Toggle -->
	  <input type="radio" name="menu" id="menu" class="hidden" />
  
	  <!-- Menu Section -->
	  <menu
		class="fixed top-0 left-0 w-screen h-screen bg-white text-gray-900 flex flex-col justify-center items-center transition-all duration-1000 transform -translate-y-full z-50"
		:class="{'translate-y-0': isMenuOpen}"
	  >
		<nav class="flex flex-col items-center space-y-4 text-sm md:text-lg">
		  <router-link to="/" class="hover:underline">Home</router-link>
		  <router-link to="/about" class="hover:underline">TimeLine</router-link>
		  <router-link to="/projects" class="hover:underline">Projects</router-link>
		  <router-link to="/contact" class="hover:underline">Contact</router-link>
		</nav>
	  </menu>
	</main>
  </template>
  
  <script>
  export default {
	name: "MenuComponent",
	data() {
	  return {
		isMenuOpen: false,
	  };
	},
	watch: {
	  // Watch for input toggle
	  isMenuOpen(newVal) {
		const menuInput = document.getElementById("menu");
		if (menuInput) menuInput.checked = newVal;
	  },
	},
	mounted() {
	  const menuInput = document.getElementById("menu");
	  if (menuInput) {
		menuInput.addEventListener("change", () => {
		  this.isMenuOpen = menuInput.checked;
		});
	  }
	},
  };
  </script>
  
  <style scoped>
  /* Menu Animation */
  #menu:checked + menu {
	transform: translateY(0);
	font-family: "Sigmar One", serif;
  font-weight: 400;
  font-style: normal;
  }
  
  label[for="menu"] span.relative:hover span:first-child {
	transform: translateY(-4px);
  }
  label[for="menu"] span.relative:hover span:last-child {
	transform: translateY(4px);
  }
  </style>
  