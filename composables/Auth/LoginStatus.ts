const typeName = "[composables]"
const middlewareName = "[Auth/LoginStatus]"
const loggerTemplate = typeName + middlewareName + " "

export const loginStatusStore = defineStore(
    "LoginStatus",
    () => {
        let loggedIn = false

        // getters
        const isLogin = () => {
            console.log(loggerTemplate+"get user's login status")
            console.log(loggerTemplate+"user's login status: "+loggedIn)
            return loggedIn
        }

        // setters
        const login = () => {
            console.log(loggerTemplate+"change user's login status to 'true'")
            loggedIn = true
        }
        const logout = () => {
            console.log(loggerTemplate+"change user's login status to 'false'")
            loggedIn = false
        }
        
        return { isLogin, login, logout}
    },
    {
        persist: {
            storage: persistedState.sessionStorage,
        },
    },
)