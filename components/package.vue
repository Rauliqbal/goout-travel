<script setup>
const packages = [
   {
      title: "Greatest Tower",
      location: "Bali, Indonesia",
      image: "package-1.jpg",
   },
   {
      title: "The Clifside Beach",
      location: "Bali, Indonesia",
      image: "package-2.jpg",
   },
];
</script>
<template>
   <section class="container md:max-w-[1092px] mx-auto">
      <div class="flex flex-col lg:flex-row gap-[60px] items-center">
         <div class="grid grid-cols-2 gap-4">
            <button class="hover:ring-4 hover:ring-[#3258E8] focus:ring-4 focus:ring-[#3258E8] p-1 md:p-3 rounded-3xl transition-all duration-300 ease-out" v-for="list in packages" :key="list">
               <div class="flex items-end relative rounded-2xl overflow-hidden">
                  <img :src="'/_nuxt/assets/images/' + list.image" alt="" />
                  <div class="bg-gradient-to-t from-black to-transparent absolute inset-x-0 p-3 md:p-6">
                     <h4 class="text-[12px] text-white text-lg font-semibold text-left">{{ list.title }}</h4>
                     <div class="flex items-center gap-1">
                        <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M5.33329 14.6666C7.24395 14.6666 9.99996 9.24397 9.99996 5.99998C9.99996 3.42265 7.91062 1.33331 5.33329 1.33331C2.75596 1.33331 0.666626 3.42265 0.666626 5.99998C0.666626 9.24397 3.42263 14.6666 5.33329 14.6666ZM5.33329 4.33335C6.25377 4.33335 6.99996 5.07955 6.99996 6.00002C6.99996 6.9205 6.25377 7.66669 5.33329 7.66669C4.41282 7.66669 3.66663 6.9205 3.66663 6.00002C3.66663 5.07955 4.41282 4.33335 5.33329 4.33335Z"
                              fill="#D9D9D9"
                           />
                        </svg>

                        <h5 class="text-[8px] text-white mt-1 text-left">{{ list.location }}</h5>
                     </div>
                  </div>
               </div>
            </button>
         </div>
         <div>
            <h2 class="section-title">Our Package</h2>
            <p class="section-subtitle">Popular Trip Packages</p>
            <p class="desc max-w-[409px] mt-3">A new way to travel by air the easy and fast way. Try it now by filling out the form below!</p>

            <div class="flex items-center gap-4 md:gap-[26px] mt-[30px]">
               <div>
                  <h4 class="text-xl font-semibold">120+</h4>
                  <p class="text-[#7b7b7b] mt-[2px]">Destination</p>
               </div>

               <div>
                  <h4 class="text-xl font-semibold">560+</h4>
                  <p class="text-[#7b7b7b] mt-[2px]">Luxury Hotels</p>
               </div>

               <div>
                  <h4 class="text-xl font-semibold">135K+</h4>
                  <p class="text-[#7b7b7b] mt-[2px]">Happy Tourist</p>
               </div>
            </div>

            <div class="flex flex-col md:flex-row gap-[30px] mt-[30px]">
               <button class="btn-primary">Choose Package</button>
               <button class="btn-link">View More</button>
            </div>
         </div>
      </div>
   </section>
</template>
