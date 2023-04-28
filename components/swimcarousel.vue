<template>
    <div class="carousel w-full h-64 object-cover object-center rounded">
        <div id="slideds1" class="carousel-item relative w-full">
            <nuxt-img loading="lazy" alt="ecommerce" width="374px" height="256px" class="w-full lg:h-auto h-64 object-cover object-center rounded"
                    src="/swim1.webp"/>
            <div class="absolute flex  justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slideds3" class="btn btn-circle">❮</a>
                <a href="#slideds2" class="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slideds2" class="carousel-item relative w-full">
            <nuxt-img loading="lazy" alt="ecommerce" width="374px" height="256px" class="w-full lg:h-auto h-64 object-cover object-center rounded"
            src="/swim3.webp"/>
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slideds1" class="btn btn-circle">❮</a>
                <a href="#slideds3" class="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slideds3" class="carousel-item relative w-full">
            <nuxt-img loading="lazy" alt="ecommerce"  width="374px" height="256px" class=" w-full lg:h-auto h-64 object-cover object-center rounded"
            src="/swim2.webp"/>
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slideds2" class="btn btn-circle">❮</a>
                <a href="#slideds3" class="btn btn-circle">❯</a>
            </div>
        </div>
        
    </div>
</template>