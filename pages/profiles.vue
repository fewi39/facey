import LogoDisplay from '@/components/DisplayComponents/LogoDisplay.vue';
<template>
    <header class="headder-wrapper">
        <div class="headder-area">
            <LogoDisplay />
            <HambugerMenu />
            <SearchField />
            <HambugerMenu />
            <ProfileDisplay />
        </div>
    </header>
    <div class="contents-wrapper">
        <div class="contents-area">
            <p>メンバー：<span>{{  }}</span>人</p>
            <SelectField />
            <SelectButtonField />
            <TableDisplay />
        </div>
    </div>
    <div class="sidebar-wrapper">
        <div class="sidebar-area">
            <SearchField />
            <TreeDisplay />
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: 'auth',
})
</script>