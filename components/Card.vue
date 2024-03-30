<template>
    <div class="card">
        <img class="card-image" :src="image" :alt="game"/>
        <div class="card-content">
            <h2>{{ game }}</h2>
            <h4>{{ job }}</h4>
            <p>{{ body }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    image: string,
    game: string,
    job: string,
    body?: string
}>()
</script>