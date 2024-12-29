<template>
  <section class="container w-screen relative overflow-hidden bg-gradient-to-r">
    <!-- Background shapes -->
    <div class="shape-one"></div>

    <div
      class="absolute flex flex-col rounded-xl slide-in-left"
      ref="slideInContainer"
    >
      <div
        class="relative mt-4 mx-4 rounded-xl overflow-hidden text-white -mt-6 h-60"
      >
        <img
          alt="dark"
          src="../assets/blackbg.jpg"
          width="1024"
          height="1024"
          decoding="async"
          class="w-full h-full object-center"
          loading="lazy"
        />
      </div>
      <div class="p-6">
        <div class="flex lg:gap-0 gap-6 flex-wrap justify-between items-center">
          <div class="flex items-center gap-3">
            <img
              src="../assets/me.jpg"
              alt="avatar"
              class="inline-block relative object-cover object-center w-12 h-12 rounded-lg"
            />
            <div>
              <h6
                class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900"
              >
                Emma Roberts
              </h6>
              <p class="block antialiased font-sans text-sm font-light leading-normal text-gray-600">
                emma.roberts@mail.com
              </p>
            </div>
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <button
              class="align-middle select-none font-sans font-bold text-center uppercase transition-all text-xs py-3 px-6 rounded-lg border border-gray-900 text-gray-900 hover:opacity-75 flex items-center gap-2"
              type="button"
            >
              <i class="fa fa-github text-base" aria-hidden="true"></i>Github
            </button>
            <button
              class="align-middle select-none font-sans font-bold text-center uppercase transition-all text-xs py-3 px-6 rounded-lg border border-gray-900 text-gray-900 hover:opacity-75 flex items-center gap-2"
              type="button"
            >
              <i class="fa-brands fa-twitter" aria-hidden="true"></i>Twitter
            </button>
            <button
              class="align-middle select-none font-sans font-bold text-center uppercase transition-all text-xs py-3 px-6 rounded-lg border border-gray-900 text-gray-900 hover:opacity-75 flex items-center gap-2"
              type="button"
            >
              <i class="fa-brands fa-medium" aria-hidden="true"></i>Medium
            </button>
          </div>
        </div>
        <p
          class="block antialiased font-sans text-sm font-light leading-normal text-gray-600 mt-6 animated2 slide-in-right"
        >
          Passionate UI/UX designer focused on creating intuitive and engaging
          digital experiences. <br />
          Driven by design thinking, creativity, and a love for problem-solving.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  position: relative;
  overflow: hidden;
  background-color: white;
}

/* Decorative shapes */
.shape-one,
.shape-two {
  position: absolute;
  border-radius: 50%;
  z-index: -1;
  transform: translateY(0);
  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: 1;
}

.shape-one {
  width: 300px;
  height: 300px;
  background: linear-gradient(to right, orange, black);
  top: -50px;
  left: -50px;
}

.shape-two {
  width: 400px;
  height: 400px;
  background: rgba(96, 165, 250, 0.1);
  bottom: -100px;
  right: -100px;
}

/* Text Animation */
.animated-text {
  transition: opacity 0.6s ease, transform 0.6s ease;
}
/* Slide-in animations */
@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.slide-in-left,
.slide-in-right {
  opacity: 0; /* Hidden by default */
  transform: translateX(0); /* Ensure no initial movement */
}

.slide-in-left.animated {
  animation: slideInLeft 1s ease-out forwards;
}

.slide-in-right.animated {
  animation: slideInRight 1s ease-out forwards;
}

</style>
<script>
export default {
  name: "TransparentBackground",

  mounted() {
    // Select all elements with slide-in classes
    const elements = document.querySelectorAll(".slide-in-left, .slide-in-right");

    // Create an IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Check if the element is in the viewport
          if (entry.isIntersecting) {
            entry.target.classList.add("animated"); // Add animation class
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    // Observe each element
    elements.forEach((element) => observer.observe(element));
  },
};
</script>
