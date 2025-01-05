<template>
  <div class="flex flex-col items-center  justify-center overflow-x-hidden mx-auto">
    <!-- Background SVG -->
 

    <div class=" px-4 sm:px-6 lg:px-8 text-center text-black">
      <div class="mx-auto">

        <h1 class="title mt-24 leading-7 animated-fall text-4xl text-gray-500">
          Time Line
        </h1>
      </div>
    </div>

    <div class=" ">
      <div class="relative">
        <div class=" w-full">
          <div >
            <dl
              class="rounded-lg  flex flex-row justify-center items-center"
            >
              <!-- Days -->
              <div
                class="flex flex-col p-6 text-center  flex-1"
              >
                <dt class="count text-lg">
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
                class="flex flex-col p-6 text-center border-b sm:border-0 sm:border-r border-gray-100 flex-1 mx-auto"
              >
                <dt class="count text-lg ">
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
                <dt class="count text-lg ">
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
.title {
  font-family: "Bungee Hairline", serif;
  font-weight: 400;
  font-style: normal;
}
dt.count {
  font-family: "Syne Mono", serif;
  font-weight: 400;
  font-style: normal;
}

.mt-3 {
  font-weight: 400;
  font-style: normal;
  font-size: 3rem;
  margin: auto;
  line-height: 3rem;
  
}
dt {
  font-weight: 400;
  font-style: normal;
}

dd{
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
