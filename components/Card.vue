<template>
    <div class="card">
        <img class="card-image" :src="image" :alt="title"/>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    image: string,
    title: string,
    text?: string
}>()
</script>