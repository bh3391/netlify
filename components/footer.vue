<template>
    <footer class="footer p-10 font-bold text-gray-900 bg-gradient-to-bl from-lime-100 via-purple-50 to-emerald-50">
        <div>
            <span class="footer-title ">Lovina Dolphin Tours</span>
            <NuxtLink to="/about" class="link link-hover">About</NuxtLink>
            <NuxtLink to="/contact" class="link link-hover">Contact</NuxtLink>
            <NuxtLink to="/packages" class="link link-hover">Packages</NuxtLink>
            <NuxtLink to="/transport" class="link link-hover">Transport</NuxtLink>
            <NuxtLink to="/gallery" class="link link-hover">Gallery</NuxtLink>
        </div>
        <div>
            <span class="footer-title font-bold text-gray-900">Ways you can pay</span>
            <div>
                <nuxt-img loading="lazy" width="200px" height="100px" src="/bca.svg" alt="bank-account"/>
                <h1>BCA Transfer</h1>
                <p>Account Name : Kadek Suara<br>
                    Account Number : 8271158220</p>
            </div>
        </div>
        <div>
            <span class="footer-title text-gray-900">Social</span>
            <div class="flex flex-row scale-110 bg-slate-400 rounded-lg gap-1">
                <a href="https://www.instagram.com/lovina_ticket_dolphin_tours/?ighsid=ymMyMTA2M2Y%3D">
                    <nuxt-img src="/2.svg"  width="200px" height="100px" alt="instagram" loading="lazy"/>
                </a>
                <a href="https://www.tripadvisor.com/Attraction_Review-g1599559-d21042518-Reviews-Lovina_Ocean_Dolphin_Tour-Lovina_Beach_Buleleng_District_Buleleng_Regency_Bali.html" alt="Tripadvisor Link">
                
                    <nuxt-img src="/taps.svg" fromat="webp" width="200px" height="50px" alt="tripadvisor" loading="lazy"/>
                </a>
            </div>
        </div>

    </footer>
    <div class="footer footer-center p-4 bg-sky-600  text-white">
        <div>
            <p>Copyright © 2023 - All right reserved by Lovina Dolphin Tours</p>
        </div>
    </div>
</template>