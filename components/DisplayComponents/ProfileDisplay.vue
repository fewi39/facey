<template>
    <div class="profile">
        <img v-bind:src="src.default" />
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    "imgSrc": string,
}>()
let src = {
    default: ""
}
try {
    src = await import(`@/static/thumbnailFile/${props.imgSrc}`)
} catch (error) {
    console.log(error)
}
</script>

<style scoped>
img {
    display: inline-block;
    margin: 0; padding: 0;
    height: 100%; width: auto;
    border-radius: 50%;
}
</style>
