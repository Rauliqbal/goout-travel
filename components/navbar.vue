<script setup>
const navMenu = ["Home", "Flight", "Hotel", "Travel Package", "Contact Us"];
</script>
<template>
   <nav class="container">
      <div class="flex items-center justify-between py-8">
         <img src="~/assets/images/logo.png" alt="Goout Logo" />
         <div class="flex items-center justify-center gap-8">
            <NuxtLink class="text-[#9C9C9C] hover:text-[#466BF3] transition-all" to="/" v-for="link in navMenu" :key="link">{{ link }}</NuxtLink>
         </div>
         <button class="py-3 px-6 text-[#466bf3] bg-[#ECF0FE] rounded-xl">My Account</button>
      </div>
   </nav>
</template>
