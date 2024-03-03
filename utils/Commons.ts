// 型
type uuid4 = `/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i`

// 例外クラス
class CustomizedError extends Error {
    htmlMessage: string | null = null
    constructor(error: Error) { super(error.message) }
}
class AuthorizeError extends CustomizedError {
    constructor(error: Error) {
        super(error)
        this.name = "AuthorizeError"
        this.htmlMessage = "ログインIDまたはパスワードが不正です。"
    }
}
class UnknownError extends CustomizedError {
    constructor(error: Error) {
        super(error)
        this.name = "UnknownError"
        this.htmlMessage = "不明なエラーが発生しました。"
    }
}

export type { uuid4 }
export { AuthorizeError, UnknownError }