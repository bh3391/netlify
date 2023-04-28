<template>
    <SeoKit />
    <Body class="font-sans"/>
    <Schema/>
    <NuxtLoadingIndicator />
    <Header/>
    <div class="container mx-auto bg-gradient-to-br from-green-300 via-sky-200 to-sky-100 opacity-80 backdrop-blur">
        <slot/>
    </div>
    <Footer/>
</template>