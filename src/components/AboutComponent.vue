<template> 
  <!-- content start -->
  <div id="overview" class="relative pt-20 pb-8 md:pt-24 md:pb-12 bg-black dark:bg-#0d1a06fa">

    <!-- Background video section -->
    <section class="relative z-[1] h-screen mt-[5%]">
      <div class="relative z-[2]">
        <!-- Your content -->
      </div>

<video
  ref="backgroundVideo"
  autoplay
  muted
  loop
  class="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
>
  <source src="../assets/video/Glide.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

      <!-- Background SVG Decorations (optional) -->
      <figure
        class="absolute top-0 left-0 pointer-events-none w-full h-full overflow-hidden z-[1]"
        aria-hidden="true"
      >
        <svg
          class="absolute top-0 left-2/4 -translate-x-2/4 w-[134%] min-w-[1280px] max-w-[1980px] h-auto"
          viewBox="0 0 1920 450"
          fill="none"
        >
          <rect
            opacity="0.5"
            x="1410.61"
            y="42.6123"
            width="246.643"
            height="304.604"
            transform="rotate(-45 1410.61 42.6123)"
            fill="url(#bg-decoration-v1-fx-1-linear-1)"
          />
          <rect
            opacity="0.5"
            x="1176"
            y="-20.5969"
            width="246.643"
            height="304.604"
            transform="rotate(-45 1176 -20.5969)"
            fill="url(#bg-decoration-v1-fx-1-linear-2)"
          />
          <circle
            opacity="0.5"
            cx="1572"
            cy="205"
            r="46"
            fill="url(#bg-decoration-v1-fx-1-radial-1)"
          />
          <g opacity="0.5" filter="url(#bg-decoration-v1-fx-1-blur-1)">
            <circle cx="1680" cy="324" r="26" fill="#4338ca" />
          </g>
          <defs>
            <filter
              id="bg-decoration-v1-fx-1-blur-1"
              x="1644"
              y="288"
              width="72"
              height="72"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur" />
            </filter>
            <linearGradient
              id="bg-decoration-v1-fx-1-linear-1"
              x1="1533.93"
              y1="42.6123"
              x2="1533.93"
              y2="347.217"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0d1a06fa" />
              <stop offset="1" stop-color="#0d1a06fa" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="bg-decoration-v1-fx-1-linear-2"
              x1="1299.32"
              y1="-20.5969"
              x2="1299.32"
              y2="284.007"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9ca3af" />
              <stop offset="1" stop-color="#9ca3af" stop-opacity="0" />
            </linearGradient>
            <radialGradient
              id="bg-decoration-v1-fx-1-radial-1"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradient-transform="translate(1572 205) rotate(90) scale(46)"
            >
              <stop stop-color="#0d1a06fa" stop-opacity="0" />
              <stop offset="1" stop-color="#0d1a06fa" />
            </radialGradient>
          </defs>
        </svg>
      </figure>
    </section>

    <div class="container xl:max-w-6xl mx-auto pyaieolaksj">
      <!-- row -->
      <div class="flex flex-wrap lsdfdfsdafd -mx-4 mb-12 md:mb-16">
   
        <div class="flex-shrink w-full max-w-full md:w-1/2 md:order-1 pyaieolaksj self-center wow fadeInRight" data-wow-duration="1s" data-wow-delay=".1s">
          <div class="mt-6 md:mt-0">
        
          </div>
        </div>
      </div><!-- end row -->
    </div>
  </div>
  <!-- end content -->
</template>

<style>
  span {
    color:white;
  }
</style>
