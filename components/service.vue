<script setup>
const services = [
   {
      title: "Calculated Weather",
      desc: "A new way to travel by air the easy and fast way.",
      image: "service-1.svg",
   },
   {
      title: "Best Experience Flight",
      desc: "A new way to travel by air the easy and fast way.",
      image: "service-2.svg",
   },
   {
      title: "Best Place to Stay",
      desc: "A new way to travel by air the easy and fast way.",
      image: "service-3.svg",
   },
   {
      title: "Easy-To-Use",
      desc: "A new way to travel by air the easy and fast way.",
      image: "service-4.svg",
   },
];
</script>
<template>
   <section class="container bg-[#FAFAFA] rounded-3xl overflow-hidden">
      <div class="flex flex-col lg:flex-row items-start md:items-center px-0 md:px-16 py-10 gap-8">
         <div class="mr-[140px]">
            <h2 class="section-title">Our Service</h2>
            <p class="section-subtitle w-[222px]">We Offer Best Service</p>
         </div>

         <div class="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-8 md:gap-[60px]">
            <div class="flex items-start gap-[30px]" v-for="service in services" :key="service">
               <img :src="'/_nuxt/assets/images/' + service.image" alt="" />
               <div>
                  <h4 class="text-lg leading-[30px] font-semibold">{{ service.title }}</h4>
                  <p class="leading-8 text-[#7B7B7B]">{{ service.desc }}</p>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>
