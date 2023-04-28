<template>
    <div class="carousel h-64 object-cover object-center rounded">
        <div id="slided1" class="carousel-item relative w-full">
            <nuxt-img loading="lazy" alt="ecommerce" width="374px" height="256px" class="w-full lg:h-auto h-64 object-cover object-center rounded"
                    src="/dolphin1.webp"/>
            <div class="absolute flex  justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slided3" class="btn btn-circle">❮</a>
                <a href="#slided2" class="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slided2" class="carousel-item relative w-full">
        <nuxt-img loading="lazy"  alt="ecommerce" width="374px" height="256px" class="w-full lg:h-auto h-64 object-cover object-center rounded"
                    src="/dolphin2.webp"/>
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slided1" class="btn btn-circle">❮</a>
                <a href="#slided3" class="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slided3" class="carousel-item relative w-full">
        <nuxt-img loading="lazy"  alt="ecommerce" width="374px" height="256px" class=" w-full lg:h-auto h-64 object-cover object-center rounded"
                    src="/dolphin3.webp"/>
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slided2" class="btn btn-circle">❮</a>
                <a href="#slided3" class="btn btn-circle">❯</a>
            </div>
        </div>
        
    </div>
</template>