<template>
    <div class="app">
        <Header/>
        <div class="content">
            <Card v-for="(item) in items" :image="item.image" :game="item.game" :job="item.job" :body="item.body"/>
        </div>
    </div>
</template>

<script setup lang="ts">
const items = ref([
    {
        image: "/images/sdt-logo.png",
        game: "Sonic Dream Team",
        job: "Software Engineer",
        body: `1. I am working on and improving various systems on the game, such as cloud synchronization, audio, level
        management, mission logic, save states, progression and C# scripts
        \n2. At the start of the project I designed an entire custom UI module for Unity to be used by the UI artists for the game.
        This is constantly being updated and improved upon as the entire game UI is built on this
        \n3. I often help profile and improve the performance of several levels alongside the engineering lead and technical artist
        \n4. I work closely with the design team to write new tools for them to use in the game and create new levels and game mechanics with`
    },
    {
        image: "/images/alloy.svg",
        game: "Alloy",
        job: "Lead Web Developer",
    },
    {
        image: "/images/icligo.png",
        game: "iCliGo",
        job: "Full Stack Engineer",
    },
    {
        image: "/images/bitclubs.png",
        game: "Bitclubs",
        job: "Junior Web Developer",
    }
]);
</script>