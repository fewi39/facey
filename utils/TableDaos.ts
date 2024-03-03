import type { uuid4 } from '@/utils/Commons.js'

// User Table関連
interface UserTable {
    userId     : uuid4,
    username   : string,
    kana       : string | null,
    thumbnailId: uuid4  | null,
    email      : string,
    password   : string,
    createdDate: Date,
    updatedDate: Date,
}
interface UserTableRef {
    userId     : Ref<UserTable.userId     >,
    username   : Ref<UserTable.username   >,
    kana       : Ref<UserTable.kana       >,
    thumbnailId: Ref<UserTable.thumbnailId>,
    email      : Ref<UserTable.email      >,
}
interface CommonUserInfo {
    userId  : UserTable.userId  ,
    username: UserTable.username,
    kana    : UserTable.kana    | null,
    email   : UserTable.email   ,
}
interface CommonThumbnailInfo {
    userId     : UserTable.userId  ,
    thumbnailId: UserTable.thumbnailId,
}

export type { UserTable, UserTableRef, CommonUserInfo, CommonThumbnailInfo }
