<template>
    <div>
        <h1>マイページ</h1>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: 'auth',
})
</script>