import { loginStatusStore } from "@/composables/Auth/LoginStatus.js"
const { isLogin } = loginStatusStore()

const typeName = "[middleware]"
const middlewareName = "[auth]"
const loggerTemplate = typeName + middlewareName + " "

export default defineNuxtRouteMiddleware(async (to: any, from: any) => {
    console.log(loggerTemplate+"middleware process starts.")
    console.log(loggerTemplate+"to: "  , to.fullPath  )
    console.log(loggerTemplate+"from: ", from.fullPath)

    const loginStatus = isLogin()
    console.log(loggerTemplate+"user's login status: ", loginStatus)

    if (loginStatus === false) {
        console.log(loggerTemplate+"user is not login, so navigate to login page.")
        console.log(loggerTemplate+"middleware process ends.")
        return navigateTo("/login")
    }

    console.log(loggerTemplate+"middleware process ends.")
})
