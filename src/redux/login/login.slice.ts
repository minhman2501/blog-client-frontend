import { LoginState } from './constants'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FetchLoginSuccessPayload, FetchLoginFailurePayload } from './constants'

const initialState: LoginState = {
    pending: false,
    token: null,
    error: null,
    user: null
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        fetchLoginRequest(state) {
            state.pending = true
        },
        fetchLoginSuccess(state, action: PayloadAction<FetchLoginSuccessPayload>) {
            state.pending = false
            state.token = action.payload.token
            state.error = null
            state.user = action.payload.user
        },
        fetchLoginFailure(state, action: PayloadAction<FetchLoginFailurePayload>) {
            state.pending = false
            state.error = action.payload.error
            state.token = null
            state.user = null
        }
    }
})

export const { fetchLoginRequest, fetchLoginSuccess, fetchLoginFailure } = loginSlice.actions

const loginReducer = loginSlice.reducer

export default loginReducer
