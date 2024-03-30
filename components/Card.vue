<template>
    <div class="card">
        <img class="card-image" :src="image" :alt="title"/>
        <div class="card-content">
            <h2>{{ title }}</h2>
            <p>{{ body }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    image: string,
    title: string,
    body?: string
}>()
</script>