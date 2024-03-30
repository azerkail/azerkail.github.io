<template>
    <div class="app">
        <Header/>
        <div class="content">
            <Card v-for="(item) in items" :image="item.image" :title="item.title"/>
        </div>
    </div>
</template>

<script setup lang="ts">
const items = ref([
    {
        image: "/images/sdt-logo.png",
        title: "Sonic Dream Team"
    },
    {
        image: "/images/sdt-logo.png",
        title: "Alloy"
    },
    {
        image: "/images/sdt-logo.png",
        title: "iCliGo"
    },
    {
        image: "/images/sdt-logo.png",
        title: "Bitclubs"
    }
]);
</script>