<template>
   <heroo />
   <Hero />
   <profile />
   <div class="divider text-2xl font-bold  ">Our Package</div> <br>
   <Price />
   
   <Terms />
   <div class="divider text-2xl font-bold">Our Advantages</div> <br>
   <Advantage />
   <Cta />
   <div class="divider text-2xl font-bold  ">Transport Service</div> <br>
   <Transport/>
   
   <div class="divider text-2xl font-bold ">Contact Us</div> <br>
   <Contact />
   <Map />
</template>


<script lang="ts" setup>
useSeoMeta({
   title: 'Lovina Dolphin Tour  with lovinadolphintours.com',
   description: 'Looking for an unforgettable experience in Lovina? Our expert-guided dolphin tours offer a unique opportunity to witness these magnificent creatures in their natural habitat. Choose from a range of tour options to suit your budget and schedule. Book now and embark on a thrilling adventure at Lovina Beach!',
   ogImage: '../banner.webp',
   robots:'index,follow',
}),
useSchemaOrg([
  defineProduct({
    name: 'Lovina Dolphin Tours Package',
    description: 'Looking for an unforgettable experience in Lovina? Our expert-guided dolphin tours offer a unique opportunity to witness these magnificent creatures in their natural habitat. Choose from a range of tour options to suit your budget and schedule. Book now and embark on a thrilling adventure at Lovina Beach!',
   
    image: [
      'https://lovinadolphintours.com/banner.webp'
    ],
    offer: {
      price: '$10.00',
    },
  })
])

      


</script>