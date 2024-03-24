import { $fetch } from 'ofetch'

import { uuid4 } from '@/utils/Commons.js'
import { UserTableRef, UserInfo } from '@/utils/TableDaos.js'
import { UserResponse } from '@/utils/ApiDaos.js'

const typeName = "[composables]"
const middlewareName = "[User/UserInformation]"
const loggerTemplate = typeName + middlewareName + " "

export const userInformationStore = defineStore(
    "UserInformation",
    () => {
        const userRef: UserTableRef = {
            userId       : ref(null),
            username     : ref(null),
            kana         : ref(null),
            thumbnailFile: ref(null),
            email        : ref(null),
        }

        // getters
        const getUserInformation = (): UserInfo => {
            console.log(loggerTemplate+"get user's information")
            const context: UserInfo = {
                userId       : userRef.userId       .value,
                username     : userRef.username     .value,
                kana         : userRef.kana         .value,
                thumbnailFile: userRef.thumbnailFile.value,
                email        : userRef.email        .value,
            }
            return context
        }

        // setters
        const setUserInformation = (context: UserInfo): void => {
            console.log(loggerTemplate+"set user's information")
            userRef.userId       .value = context.userId
            userRef.username     .value = context.username
            userRef.kana         .value = context.kana
            userRef.thumbnailFile.value = context.thumbnailFile
            userRef.email        .value = context.email
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

            const userInfo: UserInfo = response
            setUserInformation(userInfo)
            console.log(loggerTemplate+"composable process ends.")
        }
        const callGetFilteredUsersApi = async (context: String): Promise<UsersResponse> => {        
            console.log(loggerTemplate+"composable process starts.")

            // ユーザ情報問い合わせ
            const request = { "value": context }
            let response:UsersResponse
            try {
                response = await $fetch('/api/users', {
                    method: "GET",
                    query : request,
                })
            } catch (error) {
                console.log(loggerTemplate+"composable process ends.")
                throw new Error("/api/users was not OK, error="+error)
            }

            console.log(loggerTemplate+"composable process ends.")
            return response
        }

        return { getUserInformation,
            callGetUserInformationApi, callGetFilteredUsersApi }
    },
    {
        persist: {
            storage: persistedState.sessionStorage,
        },
    },
)