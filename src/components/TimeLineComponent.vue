<template>
  <div class="bg-white dark:bg-transparent">
    <div class="container px-6 py-8 mx-auto">
      <h1 class="text-3xl font-extrabold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
        Freelance Services Pricing Plan
      </h1>

      <p class="max-w-2xl mx-auto mt-4 text-center text-gray-500 xl:mt-6 dark:text-gray-300">
        Choose the plan that fits your needs. Whether you're looking for a quick solution or a comprehensive service, I've got you covered.
      </p>

      <div class="grid grid-cols-1 gap-8 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">
        <!-- Basic Plan -->
        <div class="pricing-plan w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700 hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105">
          <p class="font-medium text-gray-500 uppercase dark:text-gray-300">Basic</p>

          <h2 class="text-4xl font-semibold text-gray-800 uppercase dark:text-gray-100">
            $50
          </h2>

          <p class="font-medium text-gray-500 dark:text-gray-300">One-time fee</p>

          <ul class="text-gray-500 dark:text-gray-300 space-y-2">
            <li>✔ One landing page</li>
            <li>✔ Basic SEO optimization</li>
            <li>✔ 2 revisions</li>
          </ul>

          <button class="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            Get Started
          </button>
        </div>

        <!-- Premium Plan -->
        <div class="pricing-plan w-full p-8 space-y-8 text-center bg-blue-600 rounded-lg hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105">
          <p class="font-medium text-gray-200 uppercase">Premium</p>

          <h2 class="text-5xl font-bold text-white uppercase dark:text-gray-100">
            $150
          </h2>

          <p class="font-medium text-gray-200">Per project</p>

          <ul class="text-gray-200 space-y-2">
            <li>✔ Up to 5 pages</li>
            <li>✔ Advanced SEO optimization</li>
            <li>✔ 5 revisions</li>
            <li>✔ Mobile responsiveness</li>
          </ul>

          <button class="w-full px-4 py-2 mt-10 tracking-wide text-blue-500 capitalize transition-colors duration-300 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:ring focus:ring-gray-200 focus:ring-opacity-80">
            Choose Premium
          </button>
        </div>

        <!-- Enterprise Plan -->
        <div class="pricing-plan w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700 hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105">
          <p class="font-medium text-gray-500 uppercase dark:text-gray-300">Enterprise</p>

          <h2 class="text-4xl font-semibold text-gray-800 uppercase dark:text-gray-100">
            $500+
          </h2>

          <p class="font-medium text-gray-500 dark:text-gray-300">Custom Pricing</p>

          <ul class="text-gray-500 dark:text-gray-300 space-y-2">
            <li>✔ Fully customized solutions</li>
            <li>✔ Unlimited pages</li>
            <li>✔ Ongoing support</li>
            <li>✔ Advanced analytics</li>
          </ul>

          <button class="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-family: "MuseoModerno", serif;
  font-weight: 900;
  font-style: normal;
}

ul li {
  font-family: "Bubbler One", serif;
  font-weight: 400;
  font-style: normal;
}

body {
  font-family: "Inter", sans-serif;
}

button {
  font-family: "MuseoModerno", serif !important;
  font-weight: 900;
  font-style: normal;
}

.pricing-plan {
  opacity: 1; /* No animation */
  transform: translateY(0); /* No transform */
}

@media (min-width: 768px) {
  .pricing-plan {
    padding: 24px;
  }
}
</style>

<script>
// No need for IntersectionObserver or JavaScript animations
</script>
