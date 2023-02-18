import { MIN_PASSWORD, MAX_PASSWORD } from './../constant/variables'
import { literal, object, string } from 'zod'

export const registerSchema = object({
    name: string().min(1, 'Name is required').max(32, 'Name must be less than 100 characters'),
    email: string().min(1, 'Email is required').email('Email is invalid'),
    password: string()
        .min(MIN_PASSWORD, 'Password must be more than 8 characters')
        .max(MAX_PASSWORD, 'Password must be less than 32 characters'),
    passwordConfirm: string().min(1, 'Please confirm your password')
}).refine((data) => data.password === data.passwordConfirm, {
    path: ['passwordConfirm'],
    message: 'Passwords do not match'
})
