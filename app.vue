<template>
    <div class="app">
        <Header/>
        <div class="content">
            <Card v-for="(item) in items" :image="item.image" :title="item.title" :body="item.body"/>
        </div>
    </div>
</template>

<script setup lang="ts">
const items = ref([
    {
        image: "/images/sdt-logo.png",
        title: "Sonic Dream Team",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in ante sit amet nibh egestas accumsan et at ex. Morbi eros dui, laoreet condimentum luctus sit amet, accumsan eu mi. Maecenas dictum orci sit amet pellentesque posuere. In venenatis metus eget arcu convallis, nec eleifend dolor dictum. Quisque at nisi turpis. Duis felis risus, eleifend eu fermentum et, consectetur vitae mauris. Nullam ac venenatis magna. Sed viverra felis eget est sagittis, ac sagittis sapien efficitur. Pellentesque vitae consectetur odio. Fusce quis metus fringilla, feugiat velit eu, elementum nibh. Nullam vel tellus eros. Ut consequat eros felis, vitae ultrices lacus mollis eget. Donec vel faucibus est, eu cursus nisl. Sed non dolor ex. Vestibulum dapibus porttitor finibus. Vivamus vitae justo vitae augue porttitor viverra. Donec bibendum sit amet mi ut commodo. Fusce nec nibh vehicula neque mollis convallis. Etiam nisl velit, iaculis at magna ut, maximus tempor neque. Donec ut nisl eros. Donec ultricies sed odio id finibus. Duis commodo purus id porttitor luctus. Ut eleifend ornare risus, eu facilisis metus laoreet eu. Mauris ut vestibulum massa. Proin lobortis consectetur nibh, vitae volutpat nulla lobortis non. Duis vitae mattis lacus. Etiam a lectus sit amet augue sodales venenatis at at elit. Nunc luctus vulputate euismod. Quisque scelerisque ligula at malesuada commodo. Aliquam varius neque id faucibus suscipit. Donec at est et risus dictum pellentesque vel et urna. Donec at ex ut mauris commodo accumsan vel in nibh. Phasellus vestibulum dignissim neque. Maecenas vitae diam nec dui rutrum varius in et sapien."
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