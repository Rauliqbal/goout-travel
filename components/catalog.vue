<script setup>
const catalog = [
   {
      title: "Watefall Haven",
      location: "Selajan, Iceland",
      price: "$9",
      image: "catalog1.jpg",
   },
   {
      title: "Greatest Mountain",
      location: "Wildsee, Italy",
      price: "$12",
      image: "catalog2.jpg",
   },
   {
      title: "Coconut Tree River",
      location: "Lombok, Indonesia",
      price: "$8",
      image: "catalog3.jpg",
   },
   {
      title: "Circle Beach Play",
      location: "Lombok, Indonesia",
      price: "$5",
      image: "catalog4.jpg",
   },
   {
      title: "High Ground",
      location: "Bali, Indonesia",
      price: "$4",
      image: "catalog5.jpg",
   },
   {
      title: "Dinosaur Land",
      location: "Bali, Indonesia",
      price: "$5",
      image: "catalog6.jpg",
   },

   {
      title: "Turttle Land",
      location: "Bali, Indonesia",
      price: "$5",
      image: "catalog7.jpg",
   },
   {
      title: "The Cliffside Beach",
      location: "Bali, Indonesia",
      price: "$5",
      image: "catalog8.jpg",
   },
];
</script>
<template>
   <section class="container">
      <p class="section-subtitle text-center">Popular Trip Packages</p>

      <p class="desc text-center mt-3">
         A new way to travel by air the easy and fast way. <br class="hidden md:block" />
         Try it now by filling out the form below!
      </p>

      <!-- Catalog -->
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-[60px] gap-[30px]">
         <!-- Card -->
         <div class="bg-white shadow-lg hover:shadow-2xl transition duration-300 rounded-3xl" v-for="list in catalog" :key="list">
            <div>
               <img class="rounded-3xl" :src="'/_nuxt/assets/images/' + list.image" alt="" />
            </div>
            <div class="p-4">
               <h4 class="text-lg font-semibold">{{ list.title }}</h4>
               <div class="flex gap-1 items-center">
                  <img class="w-3" src="../assets/images/ic_location.svg" />
                  <p class="text-[#7b7b7b]">{{ list.location }}</p>
               </div>
               <div class="flex items-center justify-between mt-6">
                  <h4 class="text-lg font-bold">{{ list.price }} <span class="text-[#7b7b7b] font-normal">/ person</span></h4>
                  <button class="btn-book">Book</button>
               </div>
            </div>
         </div>
      </div>

      <div class="flex justify-center mt-[60px]">
         <button class="py-[14px] px-6 rounded-full ring-1 ring-[#7b7b7b]">View More</button>
      </div>
   </section>
</template>
