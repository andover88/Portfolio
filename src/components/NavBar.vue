<template>
	<div class="sticky">
		  <!-- Background Text -->
		  <div v-if="currentBackgroundText" class="absolute inset-0 pointer-events-none z-0">
		<p class="absolute text-[10rem] font-extrabold text-gray-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
		  {{ currentBackgroundText }}
		</p>
	  </div>
	  <div className="relative">
		<div className="fixed flex w-full h-2 items-center justify-center border border-zinc-700 rounded-lg bg-[conic-gradient(var(--tw-gradient-stops))] from-blue-900 via-slate-600 to-emerald-600 opacity-50 blur-2xl text-slate-300">
		  Gradient shadow
		</div>
	  </div>
	  <header
		class="sticky top-0 z-50 bg-transparent shadow-md flex max-w-screen-xl flex-col overflow-hidden px-4 py-8 md:mx-auto md:flex-row md:items-center"
	  >
		<router-link to="/" class="flex cursor-pointer items-center whitespace-nowrap text-xl">
		  <h1 class="logo">Fern</h1>
		  <h1 class="logo">Dev</h1>
		</router-link>
		<input type="checkbox" class="peer hidden" id="navbar-open" />
		<label class="absolute top-5 right-7 cursor-pointer md:hidden" for="navbar-open">
		  <span class="sr-only">Toggle Navigation</span>
		  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
			<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
		  </svg>
		</label>
		<nav
		  aria-label="Header Navigation"
		  class="flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all peer-checked:mt-8 peer-checked:max-h-56 md:ml-24 md:max-h-full md:flex-row md:items-start"
		>
		  <ul class="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
			<li class="font-bold md:mr-12" @mouseover="setBackgroundText('WELCOME')" @mouseleave="clearBackgroundText">
			  <router-link class="link" to="/">Home</router-link>
			</li>
			<li class="md:mr-12" @mouseover="setBackgroundText('WHAT I DO')" @mouseleave="clearBackgroundText">
			  <router-link class="link" to="/services">Services</router-link>
			</li>
			<li class="md:mr-12" @mouseover="setBackgroundText('NUMBERS')" @mouseleave="clearBackgroundText">
			  <router-link class="link" to="/about">Pricing</router-link>
			</li>
			<li class="md:mr-12" @mouseover="setBackgroundText('WORK')" @mouseleave="clearBackgroundText">
			  <router-link class="link" to="/projects">Projects</router-link>
			</li>
			<li class="md:mr-12" @mouseover="setBackgroundText('HMU')" @mouseleave="clearBackgroundText">
			  <router-link class="link" to="/contact">Contact</router-link>
			</li>
		  </ul>
		</nav>
	  </header>
	
	  <!-- Loading Screen -->
	  <div v-if="isLoading" class="fixed inset-0 bg-black z-50 flex items-center justify-center animate-opening">
		<div class="text-white text-2xl font-bold">Loading...</div>
	  </div>
	</div>
  </template>
  
  <script>
  export default {
	data() {
	  return {
		currentBackgroundText: null,
		isLoading: false,
	  };
	},
	methods: {
	  setBackgroundText(text) {
		this.currentBackgroundText = text;
	  },
	  clearBackgroundText() {
		this.currentBackgroundText = null;
	  },
	},
  };
  </script>
  
  <style scoped>
  .logo {
	font-family: "Ephesis", serif;
	font-weight: 900;
	font-style: normal;
	font-size: 3rem;
  }
  
  nav ul li a {
	background: linear-gradient(90deg, #ff7eb3, #ff758c, #ff5f5d, #ff7eb3);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	text-decoration: none;
	transition: color 0.3s ease;
  }
  
  nav ul li a:hover {
	filter: brightness(1.2);
	font-style: italic;
	color: #000;
	transition: font-weight 0.3s ease, color 0.3s ease;
  }
  
  .link {
	font-family: "MuseoModerno", serif;
	font-optical-sizing: auto;
	font-weight: 900;
	font-style: normal;
  }
  </style>
  