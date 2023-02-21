import { loginSchema } from '@/configs/schema/loginSchema'
import { TypeOf } from 'zod'

export type LoginInputType = TypeOf<typeof loginSchema>
