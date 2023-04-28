<template>
    <div class="carousel  w-full  h-64 object-cover object-center rounded">
        <div id="slidedsn1" class="carousel-item relative w-full">
            <nuxt-img loading="lazy" alt="ecommerce"  width="374px" height="256px" class="w-full lg:h-auto h-64 object-cover object-center rounded"
                    src="/snorkling1.webp"/>
            <div class="absolute flex  justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slidedsn3" class="btn btn-circle">❮</a>
                <a href="#slidedsn2" class="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slidedsn2" class="carousel-item relative w-full">
            <nuxt-img loading="lazy" alt="ecommerce" width="374px" height="256px" class="w-full lg:h-auto h-64 object-cover object-center rounded"
                    src="/snorkling2.webp"/>
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slidedsn1" class="btn btn-circle">❮</a>
                <a href="#slidedsn3" class="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slidedsn3" class="carousel-item relative w-full">
            <nuxt-img loading="lazy" alt="ecommerce" width="374px" height="256px" class=" w-full lg:h-auto h-64 object-cover object-center rounded"
                    src="/snorkling3.webp"/>
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slidedsn2" class="btn btn-circle">❮</a>
                <a href="#slidedsn3" class="btn btn-circle">❯</a>
            </div>
        </div>
        
        
    </div>
</template>