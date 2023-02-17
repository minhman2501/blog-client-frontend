import { literal, object, string } from 'zod'

export const registerSchema = object({
    name: string().min(1, 'Name is required').max(32, 'Name must be less than 100 characters'),
    email: string().min(1, 'Email is required').email('Email is invalid'),
    password: string()
        .nonempty('Password is required')
        .min(8, 'Password must be more than 8 characters')
        .max(32, 'Password must be less than 32 characters'),
    passwordConfirm: string().min(1, 'Please confirm your password'),
    terms: literal(true, {
        invalid_type_error: 'Accept Terms is required'
    })
}).refine((data) => data.password === data.passwordConfirm, {
    path: ['passwordConfirm'],
    message: 'Passwords do not match'
})
