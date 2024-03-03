import { UserTable } from '@/utils/TableDaos.js'

// auth.post
export interface AuthRequest {
    email   : UserTable.email   ,
    password: UserTable.password,
}

export interface AuthResponse {
    userId  : UserTable.userId,
}

// user.get
export interface UserRequest {
}

export interface UserResponse {
    userId  : UserTable.userId  ,
    username: UserTable.username,
    kana    : UserTable.kana    ,
    email   : UserTable.email   ,
}
