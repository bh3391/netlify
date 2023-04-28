<template>
    <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <div class="flex w-full mb-20 flex-wrap">
                <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-800 lg:w-1/3 lg:mb-0 mb-4">Enjoy your adventure with us</h1>
                <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-white"></p>
            </div>
            <div class="flex flex-wrap md:-m-2 -m-1">
                <div class="flex flex-wrap w-1/2">
                    <div class="md:p-2 p-1 w-1/2">
                        <nuxt-img loading="lazy" deferalt="gallery" width="720" height="400" class="w-full object-cover h-full object-center block"
                            src="/g1.webp"/>
                    </div>
                    <div class="md:p-2 p-1 w-1/2">
                        <img alt="gallery" width="720" height="400" class="w-full object-cover h-full object-center block"
                            src="/g2.webp"/>
                    </div>
                    <div class="md:p-2 p-1 w-full">
                        <nuxt-img loading="lazy" deferalt="gallery" width="720" height="400" class="w-full h-full object-cover object-center block"
                            src="/g3.webp"/>
                    </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                    <div class="md:p-2 p-1 w-full">
                    <nuxt-img loading="lazy" defer alt="gallery" width="720" height="400" class="w-full h-full object-cover object-center block"
                            src="/g4.webp"/>
                    </div>
                    <div class="md:p-2 p-1 w-1/2">
                        <nuxt-img loading="lazy" deferalt="gallery" width="720" height="400" class="w-full object-cover h-full object-center block"
                            src="/g5.webp"/>
                    </div>
                    <div class="md:p-2 p-1 w-1/2">
                <nuxt-img loading="lazy" defer alt="gallery" width="720" height="400" class="w-full object-cover h-full object-center block"
                        src="/g6.webp"/>
                </div>
            </div>
        </div>
    </div>
</section></template>