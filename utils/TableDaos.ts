import type { uuid4 } from '@/utils/Commons.js'

// User Table関連
type UserTable = {
    userId       : uuid4,
    username     : string,
    kana         : string | null,
    thumbnailFile: string,
    memberCode   : string,
    email        : string,
    password     : string,
    groupName    : string,
    positionName : string,
    createdDate  : Date,
    updatedDate  : Date,
}
type UserTableRef = {
    userId       : Ref<UserTable.userId       >,
    username     : Ref<UserTable.username     >,
    kana         : Ref<UserTable.kana         >,
    thumbnailFile: Ref<UserTable.thumbnailFile>,
    email        : Ref<UserTable.email        >,
}
type UserInfo = {
    userId       : UserTable.userId       ,
    username     : UserTable.username     ,
    kana         : UserTable.kana         | null,
    thumbnailFile: UserTable.thumbnailFile| null,
    email        : UserTable.email        ,
}
type UsersInfo = UsersInfoElement[]
type UsersInfoElement = {
    username     : UserTable.username     ,
    kana         : UserTable.kana         ,
    thumbnailFile: UserTable.thumbnailFile,
    memberCode   : UserTable.memberCode   ,
    email        : UserTable.email        ,
    groupName    : UserTable.groupName    ,
    positionName : UserTable.positionName ,
}

export type {
    UserTable, UserTableRef,
    UserInfo,
    UsersInfo, UsersInfoElement,
}
