<template>
    <header class="headder-wrapper">
        <div class="headder-area">
            <LogoDisplay />
            <!-- <HambugerMenu />
            <SearchField />
            <HambugerMenu /> -->
            <ProfileDisplay
                v-bind:imgSrc="userInfo.thumbnailFile" />
        </div>
    </header>
    <div class="contents-wrapper">
        <div class="contents-area">
            <p>メンバー：<span>{{ users.length }}</span>人</p>
            <!-- <SelectField />
            <SelectButtonField />
            <TableDisplay /> -->
            <div v-for="user of users">
                <div>{{ user.username }}</div>
                <div>{{ user.kana }}</div>
                <ProfileDisplay
                    v-bind:imgSrc="user.thumbnailFile" />
                <div>{{ user.email }}</div>
            </div>
        </div>
    </div>
    <div class="sidebar-wrapper">
        <div class="sidebar-area">
            <!-- <SearchField />
            <TreeDisplay /> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import LogoDisplay from '@/components/DisplayComponents/LogoDisplay.vue'
import ProfileDisplay from '@/components/DisplayComponents/ProfileDisplay.vue'
import { userInformationStore } from "@/composables/User/UserInformation.js"
const { getUserInformation } = userInformationStore()

definePageMeta({
    // middleware: 'auth',
})

const userInfo: UserInfo = getUserInformation()
userInfo.thumbnailFile = "a0252772-f4eb-4f09-b02e-784a153754ea.png"
const { data: users, pending, error, refresh } = await useFetch('/api/users')
</script>

<style scoped>
* {
    margin: 0; padding: 0;
}

.headder-wrapper {
    display: block;
    height: 100%; width: 100%;
}
.headder-area {
    height: 2rem; width: 100%;
    margin: 0; padding: 0;
    border-bottom: 1px solid rgb(184, 184, 184);
}
.headder-area > * {
    display: inline-block;
    height: 2rem;
    margin: 0; padding: 0.5rem 1.0rem;
}
.contents-wrapper {
    display: block;
    height: 100%; width: 100%;
}
.sidebar-wrapper {
    display: block;
    height: 100%; width: 100%;
}
</style>