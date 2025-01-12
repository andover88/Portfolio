<template>
    <div class="relative min-h-screen bg-state-100 flex flex-col items-center py-10 px-4">
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
      <svg
  class="absolute inset-0 w-full h-full"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1440 800"
  preserveAspectRatio="none"
>
  <!-- Horizontal Curved Lines -->
  <g fill="none" stroke="#4a4a4a" stroke-width="2" class="animate-lines">
    <path d="M0,300 C360,400 720,200 1080,300 C1440,400 1800,200 2160,300" />
  </g>

  <!-- Vertical Curved Lines -->
  <g fill="none" stroke="#4a4a4a" stroke-width="1" class="animate-lines">
  </g>
</svg>

      <!-- Title -->
      <h1 class="text-6xl font-bold text-black mb-10 animate-fadeIn">Let's Create</h1>
  
      <!-- Responsive Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        <!-- Card 1 -->
        <div class="bg-state-200 shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
          <h2 class="title text-xl font-semibold text-state mb-4">E-Commerce</h2>
          <svg width="100px" height="100px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0">

          </g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier"> <defs> 
        
        </defs> <g id="ic-ecommerce-cart"> <g id="Vrstva_536" data-name="Vrstva 536"> <polyline class="cls-1" points="1.68 2.77 5.18 2.77 8.34 16.48 21 16.48 22.32 6.72 6.09 6.72"></polyline> <rect class="cls-1" x="9.3" y="18.62" width="2.61" height="2.61" rx="1.3"></rect> <rect class="cls-1" x="9.3" y="18.62" width="2.61" height="2.61" rx="1.3"></rect> <rect class="cls-1" x="16.16" y="18.62" width="2.61" height="2.61" rx="1.3"></rect> </g> </g> </g></svg>
          <p class="desc text-gray-600">
            
            User-friendly, visually appealing, and optimized for seamless shopping experiences.
          </p>
        </div>
  
        <!-- Card 2 -->
        <div class="bg-state-300 shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
          <h2 class="title text-xl font-semibold text-state mb-4">Custom Software</h2>
          <svg fill="#000000" height="100px" width="100px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 431.466 431.466" xml:space="preserve">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            '<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                 <path id="XMLID_561_" d="M148.668,259.244H16.865C7.566,259.244,0,266.809,0,276.109v131.804c0,9.299,7.566,16.864,16.865,16.864 h131.803c9.299,0,16.865-7.565,16.865-16.864V276.109C165.533,266.809,157.967,259.244,148.668,259.244z M151.533,407.913 c0,1.553-1.312,2.864-2.865,2.864H16.865c-1.553,0-2.865-1.312-2.865-2.864V276.109c0-1.553,1.312-2.865,2.865-2.865h131.803 c1.553,0,2.865,1.312,2.865,2.865V407.913z M431.466,190.478c0,68.102-50.913,126.292-118.429,135.358 c-0.316,0.042-0.63,0.063-0.94,0.063c-3.452,0-6.457-2.554-6.929-6.069c-0.515-3.832,2.175-7.355,6.006-7.87 c60.597-8.136,106.292-60.362,106.292-121.482c0-61.121-45.695-113.347-106.292-121.482c-3.831-0.515-6.521-4.038-6.006-7.87 c0.514-3.832,4.033-6.52,7.869-6.006C380.553,64.185,431.466,122.377,431.466,190.478z M197.871,193.728h26.94c3.866,0,7-3.134,7-7 v-26.94c0-3.866-3.134-7-7-7h-26.94c-3.866,0-7,3.134-7,7v26.94C190.871,190.594,194.005,193.728,197.871,193.728z M204.871,166.788 h12.94v12.94h-12.94V166.788z M190.871,293.184c0,3.866,3.134,7,7,7h26.94c3.866,0,7-3.134,7-7v-26.94c0-3.866-3.134-7-7-7h-26.94 c-3.866,0-7,3.134-7,7V293.184z M204.871,273.244h12.94v12.94h-12.94V273.244z M117.488,347.907l-14.144-11.242v-14.214 c0-3.866-3.134-7-7-7h-6.578v-16.253c0-3.866-3.134-7-7-7c-3.866,0-7,3.134-7,7v16.253h-6.577c-3.866,0-7,3.134-7,7v14.214 l-14.146,11.242c-1.671,1.328-2.645,3.346-2.645,5.48v31.436c0,3.866,3.134,7,7,7h60.733c3.866,0,7-3.134,7-7v-31.436 C120.133,351.253,119.159,349.235,117.488,347.907z M106.133,377.823H59.399v-21.058l14.146-11.242 c1.671-1.328,2.645-3.346,2.645-5.48v-10.592h13.155v10.592c0,2.134,0.974,4.152,2.645,5.48l14.144,11.242V377.823z M291.812,13.689 v353.577c0,3.866-3.134,7-7,7h-96.111c-3.866,0-7-3.134-7-7s3.134-7,7-7h89.111V20.689H39.257v215.387c0,3.866-3.134,7-7,7 s-7-3.134-7-7V13.689c0-3.866,3.134-7,7-7h252.555C288.678,6.689,291.812,9.823,291.812,13.689z M158.533,193.793h-26.94 c-3.866,0-7,3.134-7,7v26.94c0,3.866,3.134,7,7,7h26.94c3.866,0,7-3.134,7-7v-26.94 C165.533,196.927,162.399,193.793,158.533,193.793z M151.533,220.733h-12.94v-12.94h12.94V220.733z M333.782,190.478 c0-15.861-9.547-30.007-24.321-36.037c-3.579-1.461-5.296-5.547-3.836-9.126c1.461-3.579,5.545-5.297,9.127-3.836 c20.065,8.189,33.03,27.422,33.03,48.999c0,21.577-12.966,40.81-33.031,48.998c-0.865,0.354-1.762,0.521-2.642,0.521 c-2.761,0-5.377-1.644-6.484-4.357c-1.46-3.58,0.257-7.666,3.837-9.126C324.235,220.485,333.782,206.34,333.782,190.478z"></path> </g></svg>
          <p class="desc text-gray-600">
            Tailored to your unique business needs, designed to streamline processes and improve efficiency.      </p>
        </div>
  
        <!-- Card 3 -->
        <div class="bg-state-400 shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
          <h2 class="title text-xl font-semibold text-state mb-4">Mobile Apps</h2>
          <svg width="100px" height="100px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.92993 2L8.95993 3.53003C8.97993 4.34003 9.64993 5 10.4599 5H13.4799C14.3099 5 14.9799 4.32 14.9799 3.5V2" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17 17L15 19L17 21" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M20 17L22 19L20 21" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M13 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7V14" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          <p class=" desc text-gray-600">
            Build powerful mobile apps that provide seamless user experiences on both iOS and Android platforms. </p>
        </div>
  
        <!-- Card 4 -->
        <div class="bg-state-500 shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
          <h2 class="title text-xl font-semibold text-state mb-4">Custom Websites</h2>
          <svg width="100px" height="100px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M7.78799 2H16.212C17.0305 1.99999 17.7061 1.99998 18.2561 2.04565C18.8274 2.0931 19.3523 2.19496 19.8439 2.45035C20.5745 2.82985 21.1702 3.42553 21.5497 4.1561C21.805 4.64774 21.9069 5.17258 21.9543 5.74393C22 6.29394 22 6.96949 22 7.78802V11.212C22 12.0305 22 12.7061 21.9543 13.2561C21.9069 13.8274 21.805 14.3523 21.5497 14.8439C21.1702 15.5745 20.5745 16.1702 19.8439 16.5497C19.3523 16.805 18.8274 16.9069 18.2561 16.9544C17.7061 17 17.0305 17 16.212 17H13V19H17C17.5523 19 18 19.4477 18 20C18 20.5523 17.5523 21 17 21H7C6.44772 21 6 20.5523 6 20C6 19.4477 6.44772 19 7 19H11V17H7.78798C6.96946 17 6.29393 17 5.74393 16.9544C5.17258 16.9069 4.64774 16.805 4.1561 16.5497C3.42553 16.1702 2.82985 15.5745 2.45035 14.8439C2.19496 14.3523 2.0931 13.8274 2.04565 13.2561C1.99998 12.7061 1.99999 12.0305 2 11.212V7.78799C1.99999 6.96947 1.99998 6.29393 2.04565 5.74393C2.0931 5.17258 2.19496 4.64774 2.45035 4.1561C2.82985 3.42553 3.42553 2.82985 4.1561 2.45035C4.64774 2.19496 5.17258 2.0931 5.74393 2.04565C6.29393 1.99998 6.96947 1.99999 7.78799 2ZM16.17 15C17.041 15 17.6331 14.9992 18.0905 14.9612C18.536 14.9242 18.7634 14.8572 18.9219 14.7748C19.2872 14.5851 19.5851 14.2872 19.7748 13.9219C19.8572 13.7634 19.9242 13.536 19.9612 13.0905C19.9992 12.6331 20 12.041 20 11.17V7.83C20 6.95898 19.9992 6.36686 19.9612 5.90945C19.9242 5.46401 19.8572 5.23663 19.7748 5.07805C19.5851 4.71277 19.2872 4.41493 18.9219 4.22517C18.7634 4.1428 18.536 4.07578 18.0905 4.03879C17.6331 4.0008 17.041 4 16.17 4H7.83C6.95898 4 6.36686 4.0008 5.90945 4.03879C5.46401 4.07578 5.23663 4.1428 5.07805 4.22517C4.71277 4.41493 4.41493 4.71277 4.22517 5.07805C4.1428 5.23663 4.07578 5.46401 4.03879 5.90945C4.0008 6.36686 4 6.95898 4 7.83V11.17C4 12.041 4.0008 12.6331 4.03879 13.0905C4.07578 13.536 4.1428 13.7634 4.22517 13.9219C4.41493 14.2872 4.71277 14.5851 5.07805 14.7748C5.23663 14.8572 5.46401 14.9242 5.90945 14.9612C6.36686 14.9992 6.95898 15 7.83 15H16.17Z" fill="#0F1729"></path> </g></svg>
          <p class="desc text-gray-600">
            "Let’s create custom websites tailored to your unique needs, blending creativity with functionality to bring your vision to life!"          </p>
        </div>
      </div>
  
      <!-- Additional Row of 3 Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-6xl mt-10">
        <!-- Card 5 -->
        <div class="bg-state-600 shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
          <h2 class="title text-xl font-semibold text-white mb-4">Debugging</h2>
          <svg fill="#000000" height="100px" width="100px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 412.272 412.272" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M336.549,250.313c1.59-1.777,1.439-4.506-0.339-6.097l-15.924-14.248c-1.216-1.088-2.942-1.398-4.464-0.798l-1.339,0.528 c0.618-3.116,0.955-6.366,0.955-9.712c0-6.4-1.201-12.46-3.343-17.873l4.418-1.743l13.938,12.472c0.824,0.737,1.852,1.1,2.877,1.1 c1.185,0,2.366-0.485,3.22-1.438c1.59-1.777,1.439-4.506-0.339-6.096l-15.924-14.249c-1.216-1.089-2.942-1.397-4.464-0.799 l-7.703,3.039c-3.469-5.338-7.994-9.619-13.201-12.38l2.95-6.833l12.158,4.339c2.246,0.799,4.717-0.37,5.518-2.615 c0.802-2.246-0.369-4.716-2.615-5.518l-15.969-5.699c-2.146-0.766-4.513,0.266-5.415,2.355l-4.771,11.051 c-1.822-0.362-3.69-0.559-5.596-0.559c-1.906,0-3.773,0.197-5.596,0.559l-4.772-11.051c-0.902-2.089-3.268-3.121-5.415-2.355 l-15.966,5.699c-2.246,0.802-3.417,3.272-2.615,5.518c0.802,2.246,3.273,3.415,5.518,2.615l12.155-4.338l2.95,6.832 c-5.206,2.761-9.733,7.042-13.201,12.379l-7.7-3.039c-1.519-0.599-3.246-0.29-4.464,0.798l-15.926,14.249 c-1.777,1.59-1.929,4.32-0.339,6.097c0.852,0.953,2.033,1.438,3.22,1.438c1.024,0,2.053-0.363,2.877-1.1l13.94-12.473l4.415,1.742 c-2.143,5.412-3.344,11.472-3.344,17.873c0,3.346,0.336,6.595,0.955,9.711l-1.335-0.527c-1.519-0.6-3.246-0.29-4.464,0.798 l-15.926,14.248c-1.777,1.59-1.929,4.319-0.339,6.097c0.852,0.953,2.033,1.438,3.22,1.438c1.024,0,2.053-0.363,2.877-1.1 l13.94-12.471l5.495,2.169c5.882,12.583,17.037,21.083,29.838,21.083c12.803,0,23.956-8.499,29.837-21.083l5.499-2.169 l13.938,12.471c0.824,0.737,1.852,1.1,2.877,1.1C334.515,251.751,335.696,251.266,336.549,250.313z M267.595,206.652 c0-3.089,2.507-5.594,5.598-5.594c3.09,0,5.595,2.505,5.595,5.594c0,3.09-2.505,5.595-5.595,5.595 C270.102,212.248,267.595,209.743,267.595,206.652z M278.787,240.312c-3.091,0-5.595-2.507-5.595-5.597 c0-3.089,2.504-5.592,5.595-5.592c3.089,0,5.595,2.503,5.595,5.592C284.382,237.804,281.876,240.312,278.787,240.312z M289.803,219.37c0-3.457,2.806-6.261,6.262-6.261c3.458,0,6.262,2.804,6.262,6.261c0,3.458-2.804,6.26-6.262,6.26 C292.608,225.63,289.803,222.828,289.803,219.37z"></path> <path d="M408.653,330.231l-59.709-59.386c12.313-15.074,19.709-34.313,19.709-55.249c0-26.229-11.606-49.796-29.951-65.843v-64.06 c0-15.961-12.936-28.898-28.898-28.898H28.901C12.938,56.795,0,69.732,0,85.693V259.09c0,15.96,12.938,28.902,28.901,28.902 h114.331v32.964h-28.326c-9.518,0-17.261,7.742-17.261,17.258c0,9.521,7.742,17.262,17.261,17.262h108.89 c9.52,0,17.263-7.741,17.263-17.262c0-9.516-7.743-17.258-17.263-17.258h-28.325v-32.964h36.66 c13.998,9.513,30.884,15.079,49.047,15.079c18.46,0,35.599-5.753,49.728-15.552l60.44,60.113c2.394,2.381,5.523,3.571,8.653,3.571 c3.151,0,6.303-1.207,8.701-3.618C413.48,342.78,413.459,335.01,408.653,330.231z M23.041,260.8V83.984h292.621v51.226 c-10.587-4.559-22.245-7.09-34.484-7.09c-48.234,0-87.476,39.242-87.476,87.476c0,16.53,4.61,32.003,12.61,45.204H23.041z M209.124,215.596c0-39.731,32.323-72.054,72.054-72.054s72.054,32.323,72.054,72.054c0,39.73-32.323,72.053-72.054,72.053 S209.124,255.327,209.124,215.596z"></path> </g> </g></svg>
          <p class="desc text-gray-600">
            Being able to debug effectively is key to identifying and resolving issues, ensuring smooth and reliable functionality in your projects          </p>
        </div>
  
        <!-- Card 6 -->
        <div class="bg-state-700 shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300">
          <h2 class="title text-xl font-semibold text-white mb-4">Maintenance</h2>
          <svg width="100px" height="100px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>maintenance-warning</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="add" fill="#000000" transform="translate(42.666667, 42.666667)"> <path d="M213.333333,7.10542736e-15 C330.959705,7.10542736e-15 426.666667,95.7069604 426.666667,213.333333 C426.666667,330.959705 330.959705,426.666667 213.333333,426.666667 C95.7069604,426.666667 7.10542736e-15,330.959705 7.10542736e-15,213.333333 C7.10542736e-15,95.7069604 95.7069604,7.10542736e-15 213.333333,7.10542736e-15 Z M213.333333,42.6666667 C118.892964,42.6666667 42.6666667,118.892964 42.6666667,213.333333 C42.6666667,307.773704 118.892964,384 213.333333,384 C307.773704,384 384,307.773704 384,213.333333 C384,118.892964 307.773704,42.6666667 213.333333,42.6666667 Z M214.247352,115.448129 C230.38415,136.430834 235.828347,162.243841 230.657609,181.089155 C230.011918,184.190056 252.755616,208.371626 298.888703,253.633865 C313.973648,268.71881 313.973648,283.803754 298.888703,298.888699 C284.691108,313.086294 270.493513,313.921446 256.295918,301.394157 L181.426839,230.319924 C162.579882,235.491139 136.767529,230.046951 115.785814,213.909668 C100.396892,193.674631 95.0886432,167.225458 99.3755574,148.268642 L132.19607,181.089155 L165.016583,164.678898 L181.426839,131.858386 L148.606327,99.0378728 C167.562553,94.7513198 194.012816,100.058863 214.247352,115.448129 Z" id="Combined-Shape"> </path> </g> </g> </g></svg>
          <p class="desc text-gray-600">
            Regular website maintenance ensures optimal performance, security updates, and a seamless user experience for visitors.          </p>
        </div>
  
        <!-- Card 7 -->
     <!-- Contact Button -->
<div class="bg-gray text-black shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300 cursor-pointer">
  <h2 class=" titletext-xl font-semibold mb-4">Contact Us</h2>
  <svg width="100px" height="100px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>contact-details</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="icon" fill="#000000" transform="translate(42.666667, 85.333333)"> <path d="M426.666667,1.42108547e-14 L426.666667,341.333333 L3.55271368e-14,341.333333 L3.55271368e-14,1.42108547e-14 L426.666667,1.42108547e-14 Z M384,42.6666667 L42.6666667,42.6666667 L42.6666667,298.666667 L384,298.666667 L384,42.6666667 Z M341.333333,213.333333 L341.333333,245.333333 L234.666667,245.333333 L234.666667,213.333333 L341.333333,213.333333 Z M146.666667,155.733333 C177.493333,155.733333 202.666667,181.333333 202.666667,213.333333 L74.6666667,213.333333 C74.6666667,181.333333 99.7387207,155.733333 130.666667,155.733333 L146.666667,155.733333 Z M341.333333,149.333333 L341.333333,181.333333 L234.666667,181.333333 L234.666667,149.333333 L341.333333,149.333333 Z M138.666667,78.62624 C154.13064,78.62624 166.666667,91.162267 166.666667,106.62624 C166.666667,122.090213 154.13064,134.62624 138.666667,134.62624 C123.202694,134.62624 110.666667,122.090213 110.666667,106.62624 C110.666667,91.162267 123.202694,78.62624 138.666667,78.62624 Z M341.333333,85.3333333 L341.333333,117.333333 L234.666667,117.333333 L234.666667,85.3333333 L341.333333,85.3333333 Z" id="Combined-Shape"> </path> </g> </g> </g></svg>
  <p class="desc text-gray-200">
    Reach out for inquiries or support. We're here to help!
  </p>
</div>

      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ResponsiveGridWithUpsideDownBackground",
  };
  </script>
  
  <style>
  h2.title{
    font-family: "MuseoModerno", serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  }
  p.desc {
    font-family: "Prompt", serif;
  font-weight: 600;
  font-style: normal;
    color: #000000;

  }
  .cls-1{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}
  /* Optional: Animation for the title */
  .animate-fadeIn {
    animation: fadeIn 1s ease-in-out;
  }
  /* Card Backgrounds */
.card-dark {
  background-color: #2C3E50;
  color: #FFFFFF;
}

.card-light {
  background-color: #BDC3C7;
  color: #2C3E50;
}

/* Titles */
.card-title {
  color: #4CAF50;
  font-weight: bold;
}

/* Icons */
.card-icon {
  fill: #FF9800;
}

/* Descriptions */
.card-desc {
  color: #ECEFF1;
}

/* Hover Effects */
.card:hover {
  transform: scale(1.05);
  background-color: lighten(#2C3E50, 10%);
  transition: all 0.3s ease-in-out;
}

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  </style>
  