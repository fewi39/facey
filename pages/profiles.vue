<template>
    <header class="headder-wrapper">
        <div class="headder-area">
            <LogoDisplay />
            <!-- <HambugerMenu /> -->
            <SearchField
                v-model:label="searchLabel" v-on:clickButton="filter"/>
            <!-- <HambugerMenu /> -->
            <ProfileDisplay
                v-bind:imgSrc="userInfo.thumbnailFile" />
        </div>
    </header>
    <div class="contents-wrapper">
        <div class="contents-area">
            <div class="profile-options">
                <p>メンバー：<span>{{ users.length }}</span>人</p>
                <!-- <SelectField />
                <SelectButtonField /> -->
            </div>
            <table class="profile-list">
                <thead class="profile-list-header">
                    <tr>
                        <th scope="col">名前</th>
                        <th scope="col">社員番号</th>
                        <th scope="col">メール</th>
                        <th scope="col">所属</th>
                        <th scope="col">役職</th>
                        <th scope="col">ランク</th>
                        <th scope="col">資格等級</th>
                        <th scope="col">勤務地</th>
                        <th scope="col">入社日</th>
                        <th scope="col">勤続年数</th>
                        <th scope="col">職種</th>
                    </tr>
                </thead>
                <tbody class="profile-list-items">
                    <tr v-for="user of users" class="profile-list-item">
                        <td class="name">
                            <ProfileDisplay
                                v-bind:imgSrc="user.thumbnailFile" />
                            <div>
                                <p>{{ user.username }}</p>
                                <p>{{ user.kana }}</p>
                                <p>{{ user.groupName }}</p>
                            </div>
                        </td>
                        <td></td>
                        <td>{{ user.memberCode }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.groupName }}</td>
                        <td>{{ user.positionName }}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
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
import SearchField from '@/components/TextFieldComponents/SearchField.vue'
import { userInformationStore } from "@/composables/User/UserInformation.js"
const { getUserInformation, callGetFilteredUsersApi } = userInformationStore()

definePageMeta({
    // middleware: 'auth',
})

const userInfo: UserInfo = getUserInformation()
userInfo.thumbnailFile = "a0252772-f4eb-4f09-b02e-784a153754ea.png"
let { data, pending, error, refresh } = await useFetch('/api/users')
const searchLabel = "メンバーを検索"
const users = ref(data)

const filter = (value: String) => {

    // 検索処理
    console.log("検索処理:")
    callGetFilteredUsersApi(value).then(result => {
        users.value = result === null ? [] : result
    })
}
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
    display: flex;
    height: 3rem; width: 100%;
    margin: 0; padding: 0;
    border-bottom: 1px solid rgb(184, 184, 184);
    align-items: center;
    justify-content: space-between;
}
.headder-area > * {
    height: 2rem;
}
.contents-wrapper {
    display: block;
    height: 100%; width: 100%;
}
.contents-area .profile-options {
    display: flex;
    height: 3rem;
    align-items: center;
}
table {
    width: 100%;
    border-collapse: collapse;
}
thead.profile-list-header th,
tbody.profile-list-items td {   
    text-align: center;
    font-weight: normal;
}
thead.profile-list-header th,
tbody.profile-list-items td {
    max-width: 5rem;
    padding: 0.2rem 0.5rem 0.2rem;
    margin: 0 auto 0;
    border-top: 1px solid rgb(184, 184, 184);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
thead.profile-list-header th:first-of-type,
tbody.profile-list-items td:first-of-type {
    border-right: 1px solid rgb(184, 184, 184);
}
tbody.profile-list-items tr:last-of-type td {
    border-bottom: 1px solid rgb(184, 184, 184);
}
tbody.profile-list-items td.name {
    min-width: 10rem;
    text-align: left;
}
tbody.profile-list-items td.name div {
    display: inline-block;
    height: 3rem;
}
tbody.profile-list-items td.name div:last-of-type {
    margin: 0 auto 0 1rem;
}
tbody.profile-list-items td.name div:last-of-type p {
    font-size: 0.8rem;
}
tbody.profile-list-items td.name div:last-of-type p:first-of-type {
    font-size: 1.2rem;
}
.sidebar-wrapper {
    display: block;
    height: 100%; width: 100%;
}
</style>