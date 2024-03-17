import { UserTable } from '@/utils/TableDaos.js'

// auth.post
type AuthRequest = {
    email   : UserTable.email   ,
    password: UserTable.password,
}

type AuthResponse = {
    userId  : UserTable.userId,
}

// user.get
type UserRequest = {
}

type UserResponse = {
    userId       : UserTable.userId  ,
    username     : UserTable.username,
    kana         : UserTable.kana    ,
    thumbnailFile: UserTable.thumbnailFile,
    email        : UserTable.email   ,
}

// users.get
type UsersRequest = {
}

type UsersResponse = UsersResponseElement[]
type UsersResponseElement = {
    username     : UserTable.username     ,
    kana         : UserTable.kana         ,
    thumbnailFile: UserTable.thumbnailFile,
    memberCode   : UserTable.memberCode   ,
    email        : UserTable.email        ,
    groupName    : UserTable.groupName    ,
    positionName : UserTable.positionName ,
}

export type {
    AuthRequest, AuthResponse,
    UserRequest, UserResponse,
    UsersRequest, UsersResponse, UsersResponseElement
}