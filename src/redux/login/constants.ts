import { BaseUser } from '@/types'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'

export interface LoginState {
    pending: boolean
    error: string | null
    token: string | null
    user: BaseUser | null
}

export interface FetchLoginSuccessPayload {
    token: string
    user: BaseUser
}

export interface FetchLoginFailurePayload {
    error: string
}

export interface FetchLoginRequest {
    type: typeof LOGIN_REQUEST
}

export interface FetchLoginSuccess {
    type: typeof LOGIN_SUCCESS
    payload: FetchLoginSuccessPayload
}

export interface FetchLoginFailure {
    type: typeof LOGIN_FAILURE
    payload: FetchLoginFailurePayload
}

export type LoginPayLoad = FetchLoginFailurePayload | FetchLoginSuccessPayload
