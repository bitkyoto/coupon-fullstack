export interface RegisterStatus{
    status: boolean
}
export interface LoginState{
    username:     string
    balance :     number
    isLogged:     boolean
    access_token: string
}
export interface LoginResponse{
    username:     string
    balance:      number
    access_token: string
}
export interface UserLoginInterface{
    username: string
    password: string
}