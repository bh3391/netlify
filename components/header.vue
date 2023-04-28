<template>
    <div class="navbar bg-sky-600 text-gray-900">
        <div class="navbar-start">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li tabindex="0">
                        <NuxtLink to="/packages" class="justify-between">
                            Package
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24">
                                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                            </svg>
                        </NuxtLink>
                        <ul class="p-2">
                            <li>
                                <NuxtLink to="/packages">Tour Packages</NuxtLink>
                            </li>
                            <li><NuxtLink to="/transport">Transport</NuxtLink></li>
                        </ul>
                    </li>
                    <li>
                        <NuxtLink to="/contact">Contact</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/gallery">Gallery</NuxtLink>
                    </li>
                </ul>
            </div>
            
            <NuxtLink to="/" class="btn btn-ghost normal-case text-gray-100 text-xl">Lovina Dolphin Tours</NuxtLink>
        </div>
        <div class="navbar-end text-gray-100     hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
            
                            <li>
                                <NuxtLink to="/packages">Tour Packages</NuxtLink>
                            </li>
                            <li><NuxtLink to="/transport">Transport</NuxtLink></li>
                        
               
            <li>
                <NuxtLink to="/contact">Contact</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/gallery">Gallery</NuxtLink>
            </li>
        </ul>
    </div>

</div></template>