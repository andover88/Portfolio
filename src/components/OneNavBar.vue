
  <style>

  /* ––––––––––––––––––––––––––––––––––––––––––––––––––
    Based on: https://codepen.io/nickelse/pen/YGPJQG
    Influenced by: https://sproutsocial.com/
  –––––––––––––––––––––––––––––––––––––––––––––––––– */


  /* #Mega Menu Styles
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
  .mega-menu {
    display: none;
    left: 0;
    position: absolute;
    text-align: left;
    width: 100%;
    z-index: 100;
  }

p{
  color:white;
}

  /* #hoverable Class Styles
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
  .hoverable {
    position: static;
  }

  .hoverable > a:after {
    content: "\25BC";
    font-size: 10px;
    padding-left: 6px;
    position: relative;
    top: -1px;
  }

  .hoverable:hover .mega-menu {
    display: block;
  }


  /* #toggle Class Styles
  –––––––––––––––––––––––––––––––––––––––––––––––––– */

  .toggleable > label:after {
    content: "\25BC";
    font-size: 10px;
    padding-left: 6px;
    position: relative;
    top: -1px;
  }

  .toggle-input {
    display: none;
  }
  .toggle-input:not(checked) ~ .mega-menu {
    display: none;
  }

  .toggle-input:checked ~ .mega-menu {
    display: block;
  }

  .toggle-input:checked + label {
    color: white;
    background: #2c5282; /*@apply bg-blue-800 */
  }

  .toggle-input:checked ~ label:after {
    content: "\25B2";
    font-size: 10px;
    padding-left: 6px;
    position: relative;
    top: -1px;
  }

  </style>

  <template>
<body class="bg-state-900 font-sans leading-normal tracking-normal">
<nav class="relative bg-gray-900 border-b-2 border-gray-300 text-gray-900 z-100">
  <div class="container mx-auto flex justify-between">
    <div class="relative block p-4 lg:p-6 text-xl text-gray-100 font-bold">Ferns</div>
    <ul class="flex">
	
      <!--Regular Link-->
      <li class="relative block p-4 lg:p-6 text-xl text-gray-100 font-bold">
        <router-link to="/"><button>Home</button></router-link>
      </li>
	  
      <!--Toggleable Link-->
      <li class="toggleable hover:bg-blue-800 hover:text-white">
        <input type="checkbox" value="selected" id="toggle-one" class="toggle-input">
        
          </li>
		  
          <!-- ## Toggleable Link Template ##
      
		  <li class="toggleable"><input type="checkbox" value="selected" id="toggle-xxx" class="toggle-input"><label for="toggle-xxx" class="cursor-pointer">Click</label><div role="toggle" class="mega-menu">
			Add your mega menu content
			</div></li>
		  
		  -->
		  
          <!--Hoverable Link-->
          <li class="hoverable hover:bg-blue-100 hover:text-white">
            <a href="#" class="relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-bold text-white hover:bg-state-500 hover:text-white">OO</a>
            <div class="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-gray-900">
              <div class="container mx-auto w-full flex flex-wrap justify-between mx-2">
                <div class="w-full text-white mb-8">
                  <h2 class="font-bold text-2xl">Welcome</h2>
                  <p class="text-white">Explore & Discover!</p>
                  <p class="text-black">626-437-9698</p>
                </div>
                <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                  <div class="flex items-center">
                    <svg 
  width="40px" 
  height="40px" 
  viewBox="0 0 24 24" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg" 
  stroke="#FFFFFF" 
  transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)">
  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
  <g id="SVGRepo_iconCarrier">
    <path 
      d="M8 13H16C17.7107 13 19.1506 14.2804 19.3505 15.9795L20 21.5M8 13C5.2421 12.3871 3.06717 10.2687 2.38197 7.52787L2 6M8 13V18C8 19.8856 8 20.8284 8.58579 21.4142C9.17157 22 10.1144 22 12 22C13.8856 22 14.8284 22 15.4142 21.4142C16 20.8284 16 19.8856 16 18V17" 
      stroke="#FFFFFF" 
      stroke-width="2.4" 
      stroke-linecap="round">
    </path>
    <circle 
      cx="12" 
      cy="6" 
      r="4" 
      stroke="#FFFFFF" 
      stroke-width="2.4">
    </circle>
  </g>
</svg>
                    <h3 class="font-bold text-xl text-white text-bold mb-2"> </h3>
                  </div>
                  <div class="flex items-center py-3">
                    <svg class="h-6 pr-3 fill-current text-blue-300"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                    </svg>
                    <router-link to="/about" active-class="active-link">About</router-link>
                  </div>
                </ul>
                <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                  <div class="flex items-center">
                    <svg width="40px" height="40px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="20" height="20"></rect> <g> <path d="M4 5H.78c-.37 0-.74.32-.69.84l1.56 9.99S3.5 8.47 3.86 6.7c.11-.53.61-.7.98-.7H10s-.7-2.08-.77-2.31C9.11 3.25 8.89 3 8.45 3H5.14c-.36 0-.7.23-.8.64C4.25 4.04 4 5 4 5zm4.88 0h-4s.42-1 .87-1h2.13c.48 0 1 1 1 1zM2.67 16.25c-.31.47-.76.75-1.26.75h15.73c.54 0 .92-.31 1.03-.83.44-2.19 1.68-8.44 1.68-8.44.07-.5-.3-.73-.62-.73H16V5.53c0-.16-.26-.53-.66-.53h-3.76c-.52 0-.87.58-.87.58L10 7H5.59c-.32 0-.63.19-.69.5 0 0-1.59 6.7-1.72 7.33-.07.37-.22.99-.51 1.42zM15.38 7H11s.58-1 1.13-1h2.29c.71 0 .96 1 .96 1z"></path> </g> </g></svg>
                    <h3 class="font-bold text-xl text-white text-bold mb-2"></h3>
                  </div>
                  <div class="flex items-center py-3">
                    <svg class="h-6 pr-3 fill-current text-blue-300"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                    </svg>
                    <router-link to="/portfolio"><button>Portfolio</button></router-link>
                  </div>
                </ul>
                <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                  <div class="flex items-center">
                    <svg version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="0 0 32 32" xml:space="preserve" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">  <path class="linesandangles_een" d="M23.062,22.963L25.077,28h-2.154l-1.812-4.53C21.783,23.328,22.433,23.157,23.062,22.963z M17.173,23.963L17.98,28h2.04l-0.84-4.199C18.526,23.884,17.853,23.932,17.173,23.963z M11.98,28h2.04l0.807-4.037 c-0.681-0.031-1.353-0.079-2.008-0.162L11.98,28z M6.923,28h2.154l1.812-4.53c-0.673-0.142-1.322-0.313-1.951-0.507L6.923,28z M30,14c0,4.418-6.268,8-14,8S2,18.418,2,14c0-3.174,3.24-5.911,7.93-7.203C11.398,5.087,13.57,4,16,4 c2.433,0,4.608,1.09,6.075,2.803C26.759,8.097,30,10.828,30,14z M10,11.948C10.26,12.582,12.541,14,16,14 c3.459,0,5.74-1.418,6-2.052C21.972,8.663,19.291,6,16,6C12.709,6,10.028,8.663,10,11.948z M28,14c0-1.644-1.665-3.391-4.431-4.574 C23.844,10.234,24,11.098,24,12c0,1.958-3.582,4-8,4s-8-2.042-8-4c0-0.904,0.157-1.769,0.433-2.579C5.663,10.605,4,12.355,4,14 c0,2.838,4.928,6,12,6S28,16.838,28,14z"></path> </g></svg>

                    <h3 class="font-bold text-xl text-white text-bold mb-2"></h3>
                  </div>
                  <div class="flex items-center py-3">
                    <svg class="h-6 pr-3 fill-current text-blue-300"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                    </svg>
                    <router-link to="/contact"><button>Contact</button></router-link>
                  </div>
                </ul>
                <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
                  <div class="flex items-center">
                    <svg width="40px" height="40px" viewBox="0 0 48 48" id="a" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs></defs><circle class="b" cx="9.379" cy="9.379" r="3.879"></circle><circle class="b" cx="9.379" cy="38.621" r="3.879"></circle><circle class="b" cx="9.379" cy="24" r="3.879"></circle><rect class="b" x="17.4355" y="5.5" width="25.0645" height="7.7581" rx="1.7903" ry="1.7903"></rect><rect class="b" x="17.4355" y="34.7419" width="25.0645" height="7.7581" rx="1.7903" ry="1.7903"></rect><rect class="b" x="17.4355" y="20.121" width="25.0645" height="7.7581" rx="1.7903" ry="1.7903"></rect></g></svg>
                    <h3 class="font-bold text-xl text-white text-bold mb-2"></h3>
                  </div>
                  <div class="flex items-center py-3">
                    <svg class="h-6 pr-3 fill-current text-blue-300"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                    </svg>
                    <router-link to="/services"><button>Services</button></router-link>
                  </div>
                </ul>
              </div>
            </div>
          </li>
		  
          <!-- ## Hoverable Link Template ##
      
		  <li class="hoverable hover:bg-blue-800 hover:text-white"><a href="#" class="relative block">x</a><div class="mega-menu">
			Add your mega menu content
			</div></li>
		  
		  -->
        </ul>
      </div>
    </nav>
  </body>
</template>