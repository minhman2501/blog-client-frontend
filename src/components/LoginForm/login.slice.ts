import { LoginState } from '@/types'
import { createSlice } from '@reduxjs/toolkit'

const initialState: LoginState = {
    username: '',
    password: ''
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {}
})

export const {} = loginSlice.actions

const loginReducer = loginSlice.reducer

export default loginReducer
