<template>
  <div class="flex flex-col items-center justify-center min-h-screen w-full">
    <!-- Background SVG -->
    <div class="absolute inset-0">
      <div class="parallax-container">
        <div class="triangle"></div>
        <div class="half-star"></div>
      </div>
    </div>

    <div class="w-full px-4 mx-auto sm:px-6 lg:px-8 text-center text-black">
      <div class="mx-auto">
        <h2
          class="text-2xl font-extrabold leading-9 animate-slide-right sm:text-2xl sm:leading-10"
          :style="animatedTextStyle"
        >
          <!-- Coding Milestones -->
        </h2>
        <h1 class="mt-3 leading-7 animated-fall text-gray-500">
          Achievements that count!
        </h1>
      </div>
    </div>

    <div class="pb-12 mt-10 sm:pb-16 w-full">
      <div class="relative">
        <div class="relative w-full px-10 mx-auto sm:px-6 lg:px-8">
          <div class="mx-auto">
            <dl
              class="rounded-lg shadow-lg flex flex-row justify-center items-center bg-gray-900 w-full"
            >
              <!-- Days -->
              <div
                class="flex flex-col p-6 text-center border-b sm:border-0 sm:border-r border-gray-100 flex-1"
              >
                <dt class="text-lg   text-gray-300">
                  Days
                </dt>
                <dd
                  class="text-3xl  leading-none text-gray-300"
                  ref="starsCount"
                >
                  0
                </dd>
              </div>
              <!-- Hours Coding -->
              <div
                class="flex flex-col p-6 text-center border-b sm:border-0 sm:border-r border-gray-100 flex-1"
              >
                <dt class="text-lg  text-gray-300">
                  Hours
                </dt>
                <dd
                  class="text-3xl  leading-none text-gray-300"
                  ref="downloadsCount"
                >
                  0
                </dd>
              </div>
              <!-- Deployed Applications -->
              <div class="flex flex-col p-6 text-center border-b sm:border-0 sm:border-r border-gray-100 flex-1">
                <dt class="text-lg  text-gray-300">
                  Deployed
                </dt>
                <dd
                  class="text-3xl  text-gray-300"
                  ref="sponsorsCount"
                >
                  0
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-family: "Sigmar One", serif;
  font-weight: 400;
  font-style: normal;
}

.mt-3 {
  font-family: "Sigmar One", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 3rem;
  margin: auto;
  line-height: 3rem;
  
}
dt {
  font-family: "Bubbler One", serif;
  font-weight: 400;
  font-style: normal;
}

dd{
  font-family: "Bubbler One", serif;
  font-weight: 400;
  font-style: normal;
}

/* Styles for parallax container */
.parallax-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: -1;
}



/* Parallax effect on scroll */
@keyframes parallax {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(30px); /* Adjust this value to control speed */
  }
}

/* Parallax movement */
.parallax-container .triangle,
.parallax-container .half-star {
  transition: transform 0.1s ease-out;
}

/* General styles for layout */
.w-full {
  width: 100%;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.text-center {
  text-align: center;
}
</style>

<script>
export default {
  mounted() {
    window.addEventListener('scroll', this.handleScroll);

    // Setting up the Intersection Observer for counter animations
    const observerOptions = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(this.handleIntersection, observerOptions);

    // Observe the target elements for counting animation
    const targets = [
      this.$refs.starsCount,
      this.$refs.downloadsCount,
      this.$refs.sponsorsCount,
    ];

    targets.forEach((target) => observer.observe(target));
  },
  methods: {
    handleScroll() {
      // Get scroll position
      const scrollY = window.scrollY;

      // Apply parallax effect based on scroll position
      const triangle = document.querySelector('.triangle');
      const halfStar = document.querySelector('.half-star');

      if (triangle) {
        triangle.style.transform = `translateY(${scrollY * 0.3}px)`; // Moves slower than the scroll
      }

      if (halfStar) {
        halfStar.style.transform = `translateY(${scrollY * 0.5}px)`; // Moves faster than the triangle
      }
    },
    // IntersectionObserver callback
    handleIntersection(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.startCountUp();
        }
      });
    },
    // Count-up animation logic
    startCountUp() {
      const targets = [
        { element: this.$refs.starsCount, count: 730, suffix: '+' },
        { element: this.$refs.downloadsCount, count: 2924, suffix: '+' },
        { element: this.$refs.sponsorsCount, count: 12, suffix: '+' },
      ];

      const animateCountUp = (target, duration) => {
        let currentCount = 0;
        const increment = Math.ceil(target.count / (duration / 50));

        const interval = setInterval(() => {
          currentCount += increment;
          // Format number with leading zeros
          const formattedCount = currentCount.toString().padStart(3, '0');
          if (currentCount >= target.count) {
            clearInterval(interval);
            currentCount = target.count;
            target.element.textContent = formattedCount + target.suffix;
          } else {
            target.element.textContent = formattedCount;
          }
        }, 50);
      };

      targets.forEach((target) => {
        animateCountUp(target, 5000); // Duration for the animation
      });
    },
  },
};
</script>
