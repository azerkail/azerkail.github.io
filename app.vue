<template>
    <div class="app">
        <Header/>
        <div class="content">
            <Card v-for="(item) in items" :image="item.image" :game="item.game" :job="item.job" :body="item.body"/>
        </div>
    </div>
</template>

<script setup lang="ts">
// Use a static import for server-side compatibility
import '~/assets/css/main.css';

const items = ref([
    {
        image: "/images/sdt-logo.png",
        game: "Sonic Dream Team",
        job: "Software Engineer",
        body: `1. I am working on and improving various systems on the game, such as cloud synchronization, audio, level management, mission logic, save states, progression and C# scripts
        \n2. At the start of the project I designed an entire custom UI module for Unity to be used by the UI artists for the game. This is constantly being updated and improved upon as the entire game UI is built on this
        \n3. I often help profile and improve the performance of several levels alongside the engineering lead and technical artist
        \n4. I work closely with the design team to write new tools for them to use in the game and create new levels and game mechanics with`
    },
    {
        image: "/images/alloy.svg",
        game: "Alloy",
        job: "Lead Web Developer",
        body: `1. In one year I went from junior to lead web developer
        \n2. Saved the company’s flagship project Alloy, by spending 10 months working 12 hours a day rewriting the entire project from GWT to VueJS
        \n3. Architected and wrote the framework for the entire frontend SPA
        \n4. Implemented rules and standards and directed the web team in pull request reviews
        \n5. Wrote the infrastructure for the web pipeline to perform automated unit tests, component tests and end to end tests as well as deploying to our various environments (develop, staging, production)`
    },
    {
        image: "/images/alloy.svg",
        game: "Alloy",
        job: "Full Stack Developer",
        body: `1. Took responsibility over the internal reporting tool, responsible for writing reports from HTML to PDF
        \n2. Refactored the tool away from C# scripts to a full .Net package
        \n3. Integrated a package that writes C# classes into an equivalent representation in PDF
        \n4. Done various performance improvements to reduce API response times
        \n5. Continuously provided new functionality from its backend in .Net to its frontend in VueJS`
    },
    {
        image: "/images/icligo.png",
        game: "iCliGo",
        job: "Full Stack Engineer",
        body: `1. As my first job after graduating university, in 1 year I launched the online traveling agency platform iCliGo for the startup of the same name
        \n2. Obtained, configured and maintained web servers in Linux using CentOS
        \n3. Designed and implemented the relational database in MySQL as well as its store procedures to perform various business logic
        \n4. Architected and wrote the back-end using PHP (Laravel)
        \n5. Took over a web template for the frontend and designed and implemented the website with full search capabilities, account management, and purchasing flow using VueJS and Stripe`
    },
    {
        image: "/images/bitclubs.png",
        game: "Bitclubs",
        job: "Junior Web Developer",
        body: `1. As part of my degree in Portugal I interned at Planetarium Games for 6 months
        \n2. Refactored several features following game design updates to better suit the player base
        \n3. Implemented a new tutorial system
        \n4. Implemented an auction system
        \n5. Implemented various new sports`
    }
]);
</script>