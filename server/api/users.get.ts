import userTable from '~/assets/mock/user-table.json'
import { UsersResponse } from '~/utils/ApiDaos'

const typeName = "[server]"
const middlewareName = "[api/users.get]"
const loggerTemplate = typeName + middlewareName + " "

export default defineEventHandler(async () => {
    // $fetch('/api/users', { method: 'get' }) で呼び出し

    console.log(loggerTemplate+"server process starts.")
    let response: UsersResponse = []

    for (const user of userTable) {
        console.log(loggerTemplate+"user="+user)
        response.push({
            username     : user.username     ,
            kana         : user.kana         ,
            thumbnailFile: user.thumbnailFile,
            memberCode   : user.memberCode   ,
            email        : user.email        ,
            groupName    : user.groupName    ,
            positionName : user.positionName ,
        })
    }
    console.log(loggerTemplate+"users="+response)
    console.log(loggerTemplate+"server process ends.")
    return response
})