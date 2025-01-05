<template>
    <div class="relative flex min-h-screen items-center justify-center bg-gray-100 overflow-x-hidden">
      <!-- Background Image -->
      <!-- <svg class="absolute px-2 bottom-2 h-1/2 left-2" viewBox="-120 -120 240 240" xmlns="http://www.w3.org/2000/svg">
        <path d="M 89.89549355224494,0 C 93.66503823924272,15.798055520202217 93.38460172749423,34.02361705194833 86.28516968805029,49.81676594646836 C 79.18573764860635,65.60991484098838 66.10907255297647,83.37938598568408 50.54278279858549,87.54266776306834 C 34.976493044194505,91.7059495404526 15.44159651236909,77.73483270548289 4.4634802692780326e-15,72.89416462584447 C -15.44159651236908,68.05349654620605 -25.947503202870962,68.6049236348053 -35.051202431474245,60.71046347769519 C -44.15490166007753,52.81600332058508 -38.61812770646652,40.08703123595707 -50.4625215849799,29.13455042107547 C -62.30691546349329,18.182069606193867 -98.00435033197485,12.07161953775505 -100.70561024380113,1.2332880324125197e-14 C -103.40687015562742,-12.071619537755025 -76.19279536134994,-24.943445718096164 -65.43581795431619,-37.77938711056777 C -54.67884054728245,-50.61532850303937 -52.88379668879058,-67.21712750630661 -41.078837548361015,-71.15063374962934 C -29.27387840793145,-75.08413999295206 -12.953277417380638,-62.81927008724725 -1.0945241930230573e-14,-59.58312191374186 C 12.953277417380617,-56.34697374023648 18.925453958153817,-57.15065827309201 30.722199025547035,-53.21240963249061 C 42.51894409294025,-49.27416099188921 54.715119094845676,-47.35289284803554 65.39028670075771,-37.75309962906932 C 76.06545430666975,-28.1533064101031 86.12594886524717,-15.798055520202217 89.89549355224494,0 Z" fill="black" />
      </svg> -->
      <svg class="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" stroke-width="1.5">
      <!-- Abstract Horizontal Curves -->
      <path d="M 0,50 C 300,150 900,-50 1200,100 S 600,300 0,150" stroke="#bbb" />
      <path d="M 0,250 C 400,350 800,150 1200,300 S 600,500 0,350" stroke="#ccc" />
      <path d="M 0,450 C 500,550 700,350 1200,500 S 600,700 0,550" stroke="#ddd" />
      <path d="M 0,650 C 600,750 600,550 1200,700 S 600,900 0,750" stroke="#eee" />
      <!-- Abstract Vertical Curves -->
      <path d="M 100,0 C 200,200 50,400 150,800 S 300,400 100,0" stroke="#bbb" />
      <path d="M 300,0 C 400,250 150,450 350,800 S 500,500 300,0" stroke="#ccc" />
      <path d="M 500,0 C 600,300 250,500 550,800 S 700,600 500,0" stroke="#ddd" />
      <path d="M 700,0 C 800,350 350,550 750,800 S 900,700 700,0" stroke="#eee" />
      <path d="M 900,0 C 1000,400 450,650 950,800 S 1100,800 900,0" stroke="#bbb" />
      <path d="M 1100,0 C 1200,450 550,750 1150,800 S 1300,900 1100,0" stroke="#ccc" />
    </g>
  </svg>
  
      <img
        class="pointer-events-none absolute inset-0 h-full w-full object-contain opacity-[0.6]"
        src="../assets/ferns.jpg"
        alt="Background"
         style="filter: grayscale(100%);"
      />
      <!-- Abstract Curved Grid Background -->
      <svg class="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" stroke-width="2">
          <!-- Curved Grid Lines -->
          <path d="M 0,100 C 200,50 400,150 600,100 C 800,50 1000,150 1200,100" stroke="#bbb" />
          <path d="M 0,300 C 200,250 400,350 600,300 C 800,250 1000,350 1200,300" stroke="#bbb" />
          <path d="M 0,500 C 200,450 400,550 600,500 C 800,450 1000,550 1200,500" stroke="#bbb" />
          <path d="M 0,700 C 200,650 400,750 600,700 C 800,650 1000,750 1200,700" stroke="#bbb" />
          <!-- Vertical Curved Lines -->
          <path d="M 100,0 C 150,200 150,400 100,600 C 50,800 50,1000 100,1200" stroke="#bbb" />
          <path d="M 300,0 C 350,200 350,400 300,600 C 250,800 250,1000 300,1200" stroke="#bbb" />
          <path d="M 500,0 C 550,200 550,400 500,600 C 450,800 450,1000 500,1200" stroke="#bbb" />
          <path d="M 700,0 C 750,200 750,400 700,600 C 650,800 650,1000 700,1200" stroke="#bbb" />
          <path d="M 900,0 C 950,200 950,400 900,600 C 850,800 850,1000 900,1200" stroke="#bbb" />
          <path d="M 1100,0 C 1150,200 1150,400 1100,600 C 1050,800 1050,1000 1100,1200" stroke="#bbb" />
        </g>
      </svg>
  
      <!-- Content -->
      <div class="relative mx-auto max-w-xl px-8 text-center">
        <div class="mb-6">
          <p class="welcome mx-auto inline-block rounded-full px-3 py-px text-2xl  uppercase tracking-wider text-blue-900">
            Welcome
          </p>
  
        </div>
      
        <h2 class="intro mb-8 max-w-lg  text-3xl font-bold tracking-tight sm:text-4xl">
    <span class="slide-left">Discover</span> <br> 
    <span class="spin">&</span> <br>
    <span class="slide-right">Dive into my</span> <br>
    <span class="inline-block text-blue-100 text-6xl slide-right">API Projects</span>
  </h2>
  
  
        <!-- <p class="mb-8 text-base text-gray-700 md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
          consequuntur quaerat! Optio.
        </p> -->
        <div class="flex justify-center space-x-6">
          <a
            href="#"
            class="inline-flex h-12 items-center justify-center rounded bg-blue-900 px-6 font-medium tracking-wide text-white shadow-md outline-none transition duration-200 hover:bg-gray-700 focus:ring"
          >
            Get started
          </a>
          <a
            href="#"
            aria-label="Learn more"
            class="inline-flex items-center font-semibold text-blue-900 transition-colors duration-200 hover:text-blue-800"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <style>
  a{
    font-family: "Bungee Hairline", serif;
    font-weight: 400;
    font-style: normal;
  }
  .floating-animation {
    animation: float 3s ease-in-out infinite;
  }
  .intro{
    font-family: "Bungee Hairline", serif;
    font-weight: 400;
    font-style: normal;
  }
  .welcome{
    font-family: "Bungee Hairline", serif;
    font-weight: 400;
    font-style: normal;
  }
  @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px); /* Move up */
    }
    100% {
      transform: translateY(0); /* Move back to original position */
    }
  }
  /* Slide-in animations */
  @keyframes slideInLeft {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideInRight {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  /* Applying animations */
  .slide-left {
    animation: slideInLeft 1s ease-out forwards;
  }
  
  .slide-right {
    animation: slideInRight 1s ease-out forwards;
  }
  
  .spin {
    display: inline-block;
    animation: spin 2s infinite;
  }
  
  </style>
  