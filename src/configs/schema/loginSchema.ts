import { MIN_PASSWORD, MAX_PASSWORD } from './../constant/variables'
import { object, string } from 'zod'

export const loginSchema = object({
    email: string().min(1, 'Email is required').email('Email is invalid'),
    password: string()
        .min(MIN_PASSWORD, 'Password must has at least 8 characters')
        .max(MAX_PASSWORD, 'Password must be less than 32 characters')
})
