<template>
  <div id="app" class="landing-page relative overflow-hidden h-screen bg-white-900 text-white">
    <!-- Parallax Background -->
    <div class="parallax-background absolute inset-0 bg-gradient-to-r from-black-900 via-yellow-900 to-pink-600 opacity-50"></div>

    <!-- Grid Lines -->
    <div class="grid-lines absolute inset-0 grid grid-cols-12 grid-rows-12 gap-4 opacity-20 pointer-events-none">
      <div class="col-span-12 row-span-12 border-t-2 border-white"></div>
      <div class="col-span-12 row-span-12 border-l-2 border-white"></div>
    </div>

    <!-- Main Content -->
    <div class="content relative z-10 w-full h-full w-screen flex flex-col justify-center items-center text-center p-4">
      <h1 class="text-5xl md:text-6xl mb-6 animate__animated animate__fadeIn animate__delay-1s">
        Working with APIs
      </h1>
      <p class="text-lg md:text-xl mb-12 text-gray-300 animate__animated animate__fadeIn animate__delay-2s">
        Hi, I'm Fernando Vergara, and I've been dedicated to working with APIs for the past two and a half years. During this time, I've gained extensive experience in developing, integrating, and optimizing APIs to enhance functionality and improve user experiences. Below are some of the projects I've worked on, showcasing my skills and passion for API development.
      </p>
     
      <a href="../assets/resume/vergara.pdf" download="vergara.pdf">
  <div class="button" data-tooltip="Size: 20Mb">
    <div class="button-wrapper">
      <div class="text">Download</div>
      <span class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path>
        </svg>
      </span>
    </div>
  </div>
</a>


    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY;
      const parallaxElement = document.querySelector('.parallax-background');

      // Apply spring-loaded animation
      const springEffect = Math.sin(scrollPosition * 0.05) * 10; // Elastic movement
      const targetY = scrollPosition * 0.5 + springEffect;

      // Smoothly animate to target position
      parallaxElement.style.transform = `translateY(${targetY}px)`;
    },
  },
};
</script>

<style scoped>
/* Parallax Effect */
h1 {
  font-family: "Sigmar One", serif;
  font-weight: 400;
  font-style: normal;
}
p {
  font-family: "Bubbler One", serif;
  font-weight: 400;
  font-style: normal;
}
.parallax-background {
  transition: transform 0.3s cubic-bezier(0.22, 1.61, 0.36, 1); /* Spring easing */
}

/* Grid Lines */
.grid-lines {
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px);
  background-size: 50px 50px;
}

/* Animations */
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.animate__fadeIn {
  animation: fadeIn 1.5s ease-in-out forwards;
}

.animate__delay-1s {
  animation-delay: 1s;
}

.animate__delay-2s {
  animation-delay: 2s;
}/* From Uiverse.io by Na3ar-17 */ 
.container {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
}

.label {
  background-color: transparent;
  border: 2px solid rgb(91, 91, 240);
  display: flex;
  align-items: center;
  border-radius: 50px;
  width: 160px;
  cursor: pointer;
  transition: all 0.4s ease;
  padding: 5px;
  position: relative;
}

.label::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  width: 8px;
  height: 8px;
  transition: all 0.4s ease;
  border-radius: 100%;
  margin: auto;
  opacity: 0;
  visibility: hidden;
}

.label .input {
  display: none;
}

.label .title {
  font-size: 17px;
  color: #fff;
  transition: all 0.4s ease;
  position: absolute;
  right: 18px;
  bottom: 14px;
  text-align: center;
}

.label .title:last-child {
  opacity: 0;
  visibility: hidden;
}

.label .circle {
  height: 45px;
  width: 45px;
  border-radius: 50%;
  background-color: rgb(91, 91, 240);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s ease;
  position: relative;
  box-shadow: 0 0 0 0 rgb(255, 255, 255);
  overflow: hidden;
}

.label .circle .icon {
  color: #fff;
  width: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.4s ease;
}

.label .circle .square {
  aspect-ratio: 1;
  width: 15px;
  border-radius: 2px;
  background-color: #fff;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.4s ease;
}

.label .circle::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  background-color: #3333a8;
  width: 100%;
  height: 0;
  transition: all 0.4s ease;
}

.label:has(.input:checked) {
  width: 57px;
  animation: installed 0.4s ease 3.5s forwards;
}

.label:has(.input:checked)::before {
  animation: rotate 3s ease-in-out 0.4s forwards;
}

.label .input:checked + .circle {
  animation:
    pulse 1s forwards,
    circleDelete 0.2s ease 3.5s forwards;
  rotate: 180deg;
}

.label .input:checked + .circle::before {
  animation: installing 3s ease-in-out forwards;
}

.label .input:checked + .circle .icon {
  opacity: 0;
  visibility: hidden;
}

.label .input:checked ~ .circle .square {
  opacity: 1;
  visibility: visible;
}

.label .input:checked ~ .title {
  opacity: 0;
  visibility: hidden;
}

.label .input:checked ~ .title:last-child {
  animation: showInstalledMessage 0.4s ease 3.5s forwards;
}

@keyframes pulse {
  0% {
    scale: 0.95;
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  }
  70% {
    scale: 1;
    box-shadow: 0 0 0 16px rgba(255, 255, 255, 0);
  }
  100% {
    scale: 0.95;
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
}

@keyframes installing {
  from {
    height: 0;
  }
  to {
    height: 100%;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(-90deg) translate(27px) rotate(0);
    opacity: 1;
    visibility: visible;
  }
  99% {
    transform: rotate(270deg) translate(27px) rotate(270deg);
    opacity: 1;
    visibility: visible;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
}

@keyframes installed {
  100% {
    width: 150px;
    border-color: rgb(35, 174, 35);
  }
}

@keyframes circleDelete {
  100% {
    opacity: 0;
    visibility: hidden;
  }
}

@keyframes showInstalledMessage {
  100% {
    opacity: 1;
    visibility: visible;
    right: 56px;
  }
}

/* From Uiverse.io by satyamchaudharydev */ 
.button {
  --width: 100px;
  --height: 35px;
  --tooltip-height: 35px;
  --tooltip-width: 90px;
  --gap-between-tooltip-to-button: 18px;
  --button-color: #1163ff;
  --tooltip-color: #fff;
  width: var(--width);
  height: var(--height);
  background: var(--button-color);
  position: relative;
  text-align: center;
  border-radius: 0.45em;
  font-family: "Arial";
  transition: background 0.3s;
}

.button::before {
  position: absolute;
  content: attr(data-tooltip);
  width: var(--tooltip-width);
  height: var(--tooltip-height);
  background-color: var(--tooltip-color);
  font-size: 0.9rem;
  color: #111;
  border-radius: .25em;
  line-height: var(--tooltip-height);
  bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) + 10px);
  left: calc(50% - var(--tooltip-width) / 2);
}

.button::after {
  position: absolute;
  content: '';
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-top-color: var(--tooltip-color);
  left: calc(50% - 10px);
  bottom: calc(100% + var(--gap-between-tooltip-to-button) - 10px);
}

.button::after,.button::before {
  opacity: 0;
  visibility: hidden;
  transition: all 0.5s;
}

.text {
  display: flex;
  align-items: center;
  justify-content: center;
}

.button-wrapper,.text,.icon {
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  color: #fff;
}

.text {
  top: 0
}

.text,.icon {
  transition: top 0.5s;
}

.icon {
  color: #fff;
  top: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon svg {
  width: 24px;
  height: 24px;
}

.button:hover {
  background: #6c18ff;
}

.button:hover .text {
  top: -100%;
}

.button:hover .icon {
  top: 0;
}

.button:hover:before,.button:hover:after {
  opacity: 1;
  visibility: visible;
}

.button:hover:after {
  bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) - 20px);
}

.button:hover:before {
  bottom: calc(var(--height) + var(--gap-between-tooltip-to-button));
}

</style>
