import userTable from '~/assets/mock/user-table.json'
import { UsersResponse } from '~/utils/ApiDaos'

const typeName = "[server]"
const middlewareName = "[api/users.get]"
const loggerTemplate = typeName + middlewareName + " "

export default defineEventHandler(async (event) => {
    // $fetch('/api/users', { method: 'get' }) で呼び出し

    console.log(loggerTemplate+"server process starts.")
    const query = getQuery(event)
    const queryValue = query.value as string
    const filterFlag = !(queryValue === undefined || queryValue == "")
    let response: UsersResponse = []
 
    for (const user of userTable) {
        console.log(loggerTemplate+"user="+user)

        if (filterFlag && !user.username.includes(queryValue)) {
            continue
        }

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