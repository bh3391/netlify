<template>
    <section class="text-gray-900  body-font">
        <div class="container px-5 py-24 mx-auto flex flex-col">
            <div class="lg:w-4/6 mx-auto">
                
                <div class="rounded-lg h-auto overflow-hidden">
                   <Profilecarousel/>
                </div>
                <div class="flex flex-col sm:flex-row mt-10">
                    <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                        <div
                            class="w-full inline-flex items-center justify-center text-gray-400">
                            <nuxt-img  class="rounded-full" loading="lazy" width="200" height="200" format="webp" src="/kadek.webp" alt="Foto Pak Kadek"/>
                        </div>
                        <div class="flex flex-col items-center text-justify justify-center">
                            <h2 class="font-medium title-font mt-4 ">Kadek Suara</h2>
                            <div class="w-12 h-1 bg-primary rounded mt-2 mb-4"></div>
                            <p class="text-lg">Introducing Captain Kadek!!<br>

                                Lovina Ocean Tour is a Professional Dolphin Tour Package Service Provider @ Lovina Beach,
                                Singaraja-Bali,
                                Captain Kadek has experience providing Dolphin Tour services since 1988.
                                <br>We are committed to provide the best service to our customers. Apart from being a Dolphin
                                tour service provider, we also provide Snorkeling and Diving services at Lovina Beach</p>
                        </div>
                    </div>
                    <div
                        class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-justify ">
                        <p class="leading-relaxed text-xl mb-4">The Lovina area is famous as a place to watch dolphin shows.
                            You can immediately witness the behavior of very friendly dolphins in the middle of the sea. Of
                            course this will be an interesting vacation experience for you.

                            To be able to see the dolphin attraction, you have to leave at 6 am before sunrise. Why? Because
                            the dolphins in this area only appear between 6:30 am to 10 am. At that hour, dozens of dolphins
                            will naturally show their activities. Some are just swimming on the surface of the water, some
                            are jumping around. Of course this will amaze the beauty of these marine animals.

                            Usually the tourists have gathered on the beach at around 5.30 WITA to go to the middle of the
                            sea. The boat will take you about one to two kilometers out to sea to where dolphins usually
                            appear.</p>
                        <a href="/lovina" class="text-gray-800 bg-default text-xl first-letter:inline-flex items-center underline ">Learn More
                            About Lovina>>>
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <NuxtImg src="/banner.webp" loading="lazy" width="1200" height="500" format="webp" alt="main banner" class="my-5"/>
        </div>
    </div>
</section></template>