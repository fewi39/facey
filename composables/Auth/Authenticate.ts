import { $fetch } from 'ofetch'

import { uuid4, AuthorizeError } from '@/utils/Commons.js'
import { AuthRequest, AuthResponse } from '@/utils/ApiDaos.js'

const typeName = "[composables]"
const middlewareName = "[Auth/Authenticate]"
const loggerTemplate = typeName + middlewareName + " "

export const callAuthenticateApi = async (email: string, password: string): Promise<uuid4> => {
    console.log(loggerTemplate+"composable process starts.")

    // ログイン情報問い合わせ
    const request:AuthRequest = { email:email, password:password }
    let response:AuthResponse
    try {
        response = await $fetch('/api/auth', {
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: request
        })
    } catch (error) {
        console.log(loggerTemplate+"composable process ends.")
        throw new AuthorizeError(error)
    }

    console.log(loggerTemplate+"composable process ends.")
    return response.userId
}