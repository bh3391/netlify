<template>
    <div class="carousel w-full">
        <div id="item1" class="carousel-item w-full">
        <nuxt-img loading="lazy"  alt="Dolphin Watching Tour" width="1250px" height="567px" class="object-cover object-center h-full w-full"
                        src="/1.webp"/>
        </div>
        <div id="item2" class="carousel-item w-full">
            <nuxt-img loading="lazy" alt="Swiming With Dolphin" width="1250px" height="567px" class="object-cover object-center h-full w-full"
                        src="/2.webp"/>
      </div>
        <div id="item3" class="carousel-item w-full">
        <nuxt-img loading="lazy"  alt="Snorkling at Lovina" width="1250px" height="567px" class="object-cover object-center h-full w-full"
                        src="/3.webp"/>
        </div>
        <div id="item4" class="carousel-item w-full">
        <nuxt-img loading="lazy"  alt="Fishing At Lovina" width="1250px" height="567px" class="object-cover object-center h-full w-full"
                        src="/4.webp"/>
        </div>
    </div>
    <div class="flex justify-center w-full py-2 gap-2">
        <a href="#item1" class="btn btn-xs">1</a>
        <a href="#item2" class="btn btn-xs">2</a>
        <a href="#item3" class="btn btn-xs">3</a>
        <a href="#item4" class="btn btn-xs">4</a>
    </div>
</template>