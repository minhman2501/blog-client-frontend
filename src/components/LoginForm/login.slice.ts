import { LoginType } from '@/types'
import { createSlice } from '@reduxjs/toolkit'

export const initialState: LoginType = {
    email: '',
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
