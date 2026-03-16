<script setup lang="ts">
import Navbar from '../Components/Header/Navbar.vue'
import Footer from '../Components/Footer/Footer.vue'
</script>

<template>
    <div class="min-h-screen flex flex-col">

        <header>
            <div class="max-w-screen-2xl mx-auto px-8">
                <Navbar />
            </div>
        </header>

        <main class="grow">
            <div class="max-w-screen-2xl mx-auto px-8 py-10">
                <slot />
            </div>
        </main>

        <footer>
            <div class="max-w-screen-2xl mx-auto px-8">
                <Footer />
            </div>
        </footer>

    </div>
</template>