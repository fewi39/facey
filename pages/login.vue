<template>
    <div class="login-wrapper">
        <div class="login-area">
            <LogoDisplay
                class="logo" />
            <ErrorMessageField
                class="error-message"
                v-model:message="errorMessage"/>
            <form class="entry" v-on:submit.prevent="submit">
                <EmailField
                    v-model:label="emailLabel" v-model:email="email" />
                <PasswordField
                    class="margin-bottom-0p75"
                    v-model:label="passwordLabel" v-model:password="password" />
                <nav class="support-link shift-right margin-top-0p75 invalid">
                    <p>パスワードを忘れた場合</p>
                </nav>
                <button type="submit">ログイン</button>
                <CheckBoxField
                    class="support-link shift-left margin-top-0p75"
                    v-model:label="remindLabel" v-model:isChecked="remind" />
            </form>
            <nav class="support-link shift-right margin-top-0p75 invalid">
                <p>ログインできない場合</p>
            </nav>
        </div>
    </div>
    <div class="information-wrapper">
        <div class="information-area">
            <div class="information-contents">
            </div>
        </div>
    </div>
</template>
   
<script setup lang="ts">
import type { uuid4 } from '@/utils/Commons.js'
import { AuthorizeError } from '@/utils/Commons.js'
import LogoDisplay from '@/components/DisplayComponents/LogoDisplay.vue'
import ErrorMessageField from "@/components/TextFieldComponents/ErrorMessageField.vue"
import EmailField from "@/components/TextFieldComponents/EmailField.vue"
import PasswordField from "@/components/TextFieldComponents/PasswordField.vue"
import CheckBoxField from '@/components/OtherFieldComponents/CheckBoxField.vue'
import { callAuthenticateApi } from "@/composables/Auth/Authenticate.js"
import { userInformationStore } from "@/composables/User/UserInformation.js"
const { callGetUserInformationApi } = userInformationStore()
import { loginStatusStore } from "@/composables/Auth/LoginStatus.js"
const { login } = loginStatusStore()

const errorMessage = ref('')
const emailLabel = "ID（メールアドレス）"
const email = ref('')
const passwordLabel = "パスワード"
const password = ref('')
const remindLabel = "ログイン状態を保持する"
const remind = ref(null)

const submit = (e:Event) => {
    e.preventDefault()

    // 認証処理
    console.log("認証処理:")
    callAuthenticateApi(email.value, password.value)

        // ユーザ情報取得
        .then((userId:uuid4) => {
            console.log("ユーザ情報取得:userId="+userId)
            callGetUserInformationApi(userId)
        })

        // ログイン処理
        .then(() => {
            console.log("ログイン処理:")
            login()
            navigateTo("/profiles")
        })

        // エラー処理
        .catch((error) => {
            console.log("エラー処理:error="+error)
            if (error instanceof AuthorizeError) {
                errorMessage.value = error.htmlMessage
            } else {
                errorMessage.value = error.htmlMessage
            }
        })
}
</script>

<style scoped>
* {
    margin: 0; padding: 0;
}
.shift-left {
    text-align: left!important;
}
.shift-right {
    text-align: right!important;
}
.margin-top-0p75 {
    margin-top: 0.75rem!important;
}
.margin-bottom-0p75 {
    margin-bottom: 0.75rem!important;
}

.support-link {
    font-size: 0.8rem;
    color: darkslategray;
}

.login-wrapper {
    display: inline-block;
    height: 100%; width: 50%;
}
.login-area {
    height: 100%; width: 75%;
    margin: 0 auto; padding: 15vh 0 0;
    text-align: center;
}
.login-area .logo,
.login-area .error-message {
    margin: 0.5rem; padding: 0;
}
.login-area .support-link {
    margin: 0.75rem auto; padding: 0;
    cursor: pointer;
}
.login-area > .entry {
    box-sizing: border-box;
    margin: 0 auto; padding: 1.5rem 2rem;
    box-shadow: 0.5px 2px 1px 0 gray;
    border-top: 0.1px solid rgba(0,0,0, 0.15);
    border-left: 0.1px solid rgba(128,128,128, 0.5);
    border-right: 0.1px solid rgba(128,128,128, 0.5);
}
.login-area > .entry > * {
    margin: 1.5rem 0;
}
.login-area > .entry > *:first-child {
    margin-top: 1.75rem;
}
.login-area > .entry > *:last-child {
    margin-bottom: 1.75rem;
}
.login-area > .entry > button {
    display: block;
    width: 100%; height: 3rem;
    color: white;
    background-color: slateblue;
    font-size: 1.2rem;
    line-height: 1.5rem;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}
.login-area > .entry > button:hover {
    background-color: rgb(81, 69, 161);
}
.information-wrapper {
    float: right;
    height: 100%; width: 50%;
}
@media screen and (max-width: 1000px) {
    .login-wrapper {
        width: 100%;
    }
    .information-wrapper {
        display: none;
    }
}
nav.invalid {
    text-decoration: line-through;
}
</style>