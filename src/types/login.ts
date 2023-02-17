import { loginSchema } from '@/configs/schema/loginSchema'
import { TypeOf } from 'zod'

export type LoginType = TypeOf<typeof loginSchema>
