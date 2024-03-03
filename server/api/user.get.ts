import userTable from '~/assets/mock/user-table.json'
import { UserResponse } from '~/utils/ApiDaos'

const typeName = "[server]"
const middlewareName = "[api/uer.get]"
const loggerTemplate = typeName + middlewareName + " "

export default defineEventHandler(async (event: any) => {
    // $fetch('/api/user?userId=***', { method: 'get' }) で呼び出し

    console.log(loggerTemplate+"server process starts.")
    const query = getQuery(event)
    let response: UserResponse

    for (const user of userTable) {
        if (user.userId == query.userId) {
            console.log(loggerTemplate+"server process ends.")
            response = {
                userId  : user.userId  ,
                username: user.username,
                kana    : user.kana    ,
                email   : user.email   ,
            }
            return response
        }
    }

    console.log(loggerTemplate+"user information is not found.")
    console.log(loggerTemplate+"server process ends.")
    throw createError({
        statusCode: 404,
        statusMessage: 'Requested user is not found.',
    })
})