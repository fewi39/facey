import { $fetch } from 'ofetch'

import { uuid4 } from '@/utils/Commons.js'
import { UserTableRef, CommonUserInfo } from '@/utils/TableDaos.js'

const typeName = "[composables]"
const middlewareName = "[User/UserInformation]"
const loggerTemplate = typeName + middlewareName + " "

export const userInformationStore = defineStore(
    "UserInformation",
    () => {
        const userRef: UserTableRef = {
            userId     : ref(null),
            username   : ref(null),
            kana       : ref(null),
            thumbnailId: ref(null),
            email      : ref(null),
        }

        // getters
        const getUserInformation = (): CommonUserInfo => {
            console.log(loggerTemplate+"get user's information")
            const context: CommonUserInfo = {
                userId  : userRef.userId  .value,
                username: userRef.username.value,
                kana    : userRef.kana    .value,
                email   : userRef.email   .value,
            }
            return context
        }

        // setters
        const setUserInformation = (context: CommonUserInfo): void => {
            console.log(loggerTemplate+"set user's information")
            userRef.userId  .value = context.userId
            userRef.username.value = context.username
            userRef.kana    .value = context.kana
            userRef.email   .value = context.email
        }

        // api
        const callGetUserInformationApi = async (context: uuid4): Promise<void> => {        
            console.log(loggerTemplate+"composable process starts.")

            // ユーザ情報問い合わせ
            const request = { userId: context }
            let response:UserResponse
            try {
                response = await $fetch('/api/user', {
                    method: "GET",
                    query : request,
                })
            } catch (error) {
                console.log(loggerTemplate+"composable process ends.")
                throw new Error("/api/user was not OK, error="+error)
            }

            const commonUserInfo: CommonUserInfo = response
            setUserInformation(commonUserInfo)
            console.log(loggerTemplate+"composable process ends.")
        }
        
        return { getUserInformation, callGetUserInformationApi }
    },
    {
        persist: {
            storage: persistedState.sessionStorage,
        },
    },
)