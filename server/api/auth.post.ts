import userTable from '@/assets/mock/user-table.json'
import { AuthRequest, AuthResponse } from '@/utils/ApiDaos'

const typeName = "[server]"
const middlewareName = "[api/auth.post]"
const loggerTemplate = typeName + middlewareName + " "

export default defineEventHandler(async (event: any) => {
    // $fetch('/api/auth', { method: 'post', body: {email: ***, password: ***} }) で呼び出し

    console.log(loggerTemplate+"server process starts.")
    const request: AuthRequest = await readBody(event)
    let response: AuthResponse

    for (const user of userTable) {
        if (user.email == request.email && user.password == request.password) {
            console.log(loggerTemplate+"server process ends.")
            console.log("userId:"+user.userId)
            response = {
                userId: user.userId
            }
            return response
        }
    }

    console.log(loggerTemplate+"authentication information is not found.")
    console.log(loggerTemplate+"server process ends.")
    throw createError({
        statusCode: 404,
        statusMessage: 'Requested user is not found.',
    })
})