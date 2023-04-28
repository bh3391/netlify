<template>
    <div class="carousel lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded">
        <div id="slidedf1" class="carousel-item relative w-full">
            <nuxt-img loading="lazy" defer alt="ecommerce" width="374px" height="256px" class="w-full lg:h-auto h-64 object-cover object-center rounded"
                    src="/fish1.webp"/>
            <div class="absolute flex  justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slidedf3" class="btn btn-circle">❮</a>
                <a href="#slidedf2" class="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slidedf2" class="carousel-item relative w-full">
        <nuxt-img loading="lazy" defer width="374px" height="256px"  alt="ecommerce" class="w-full lg:h-auto h-64 object-cover object-center rounded"
                    src="/fish2.webp"/>
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slidedf1" class="btn btn-circle">❮</a>
                <a href="#slidedf3" class="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slidedf3" class="carousel-item relative w-full">
        <nuxt-img loading="lazy" defer  width="374px" height="256px" alt="ecommerce" class=" w-full lg:h-auto h-64 object-cover object-center rounded"
                    src="/fish3.webp"/>
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slidedf2" class="btn btn-circle">❮</a>
                <a href="#slidedf3" class="btn btn-circle">❯</a>
            </div>
        </div>
        
    </div>
</template>