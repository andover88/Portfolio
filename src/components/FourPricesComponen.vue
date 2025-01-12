<template>
    <section class="py-24 bg-white">

        <div class="relative min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <!-- Upside-Down Background -->
      <!-- Abstract Curved Lines -->
      <svg
  class="absolute inset-0 w-full h-full transform rotate-180 -z-1"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="none"
  viewBox="0 0 1440 320"
>
  <!-- Define Gradient -->
  <defs>
    <linearGradient id="darkToLight" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#333333; stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f0f0f0; stop-opacity:1" />
    </linearGradient>
  </defs>

  <!-- Paths with Gradient Fill -->
  <path
    fill="url(#darkToLight)"
    fill-opacity=".1"
    d="M0,192L48,186.7C96,181,192,171,288,144C384,117,480,75,576,90.7C672,107,768,181,864,202.7C960,224,1056,192,1152,176C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
  ></path>
  <path
    fill="url(#darkToLight)"
    fill-opacity=".1"
    d="M0,64L48,85.3C96,107,192,149,288,165.3C384,181,480,171,576,165.3C672,160,768,160,864,176C960,192,1056,224,1152,208C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
  ></path>
</svg>


    <div class="box-border px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-0 max-w-7xl">
        
      <div class="flex flex-col items-center leading-7 text-center text-gray-900 border-0 border-gray-200">
        <h2
          class="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl"
        >
          Web Developer/API Developer Pricing
        </h2>
        <p class="box-border mt-2 text-xl text-gray-900 border-solid sm:text-2xl">
          Choose the perfect plan for your project needs.
        </p>
      </div>

      <div
        class="grid grid-cols-1 gap-4 mt-4 leading-7 text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0 lg:grid-cols-3"
      >
        <!-- Basic Plan -->
        <div
          class="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-mr-3 sm:my-0 sm:p-6 md:my-8 md:p-8"
        >
          <h3
            class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl"
          >
            Basic
          </h3>
          <div class="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
            <p class="box-border m-0 text-6xl font-semibold leading-none border-solid">$499</p>
            <p class="box-border m-0 border-solid">/ project</p>
          </div>
          <ul class="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
            <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
              ✅ Single-page website
            </li>
            <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
              ✅ Basic API integration
            </li>
            <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
              ✅ Responsive design
            </li>
          </ul>
          <a href="mailto:info@example.com" class="btn btn-primary">Contact Us</a>

        </div>

        <!-- Standard Plan -->
        <div
          class="relative z-20 flex flex-col items-center max-w-md p-4 mx-auto my-0 bg-white border-4 border-blue-600 border-solid rounded-lg sm:p-6 md:px-8 md:py-16"
        >
          <h3
            class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl"
          >
            Standard
          </h3>
          <div class="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
            <p class="box-border m-0 text-6xl font-semibold leading-none border-solid">$999</p>
            <p class="box-border m-0 border-solid">/ project</p>
          </div>
          <ul class="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
            <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
              ✅ Multi-page website
            </li>
            <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
              ✅ Advanced API integration
            </li>
            <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
              ✅ SEO optimization
            </li>
          </ul>
          <a href="mailto:info@example.com" class="btn btn-primary">Contact Us</a>

        </div>

        <!-- Premium Plan -->
        <div
          class="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-ml-3 sm:my-0 sm:p-6 md:my-8 md:p-8"
        >
          <h3
            class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl"
          >
            Premium
          </h3>
          <div class="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
            <p class="box-border m-0 text-6xl font-semibold leading-none border-solid">$1499</p>
            <p class="box-border m-0 border-solid">/ project</p>
          </div>
          <ul class="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
            <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
              ✅ E-commerce website
            </li>
            <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
              ✅ Custom API development
            </li>
            <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
              ✅ Performance optimization
            </li>
          </ul>
          <a href="mailto:info@example.com" class="btn btn-primary">Contact Us</a>

        </div>
      </div>
    </div>
  </div>
</section>

    </template>