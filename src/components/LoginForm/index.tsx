import { FormControl, TextField, Box } from '@mui/material'
import Button from '@mui/material/Button'
import { LoadingButton } from '@mui/lab'
import { Link } from 'react-router-dom'
import { LoginInputType } from '@/types'
import { loginSchema } from '@/configs/schema/loginSchema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'

export default function LoginForm() {
    const initialLoginInput: LoginInputType = {
        email: '',
        password: ''
    }
    const [loginData, setLoginData] = useState<LoginInputType>(initialLoginInput)

    const {
        register,
        formState: { errors, isSubmitSuccessful, isDirty, isValid },
        reset,

        handleSubmit
    } = useForm<LoginInputType>({
        mode: 'all',
        resolver: zodResolver(loginSchema)
    })

    const onSubmit = (data: LoginInputType) => {
        console.log(data)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData((previous) => ({ ...previous, [e.target.type]: e.target.value }))
    }

    return (
        <Box
            onSubmit={handleSubmit(onSubmit)}
            component={'form'}
            className="w-full"
        >
            <FormControl className="my-2.5 w-full">
                <TextField
                    type="email"
                    label="Email"
                    required
                    error={Boolean(errors.email)}
                    helperText={errors.email?.message}
                    variant="outlined"
                    {...register('email', {
                        onChange: handleChange,
                        value: loginData.email
                    })}
                />
            </FormControl>
            <FormControl className="my-2.5 w-full">
                <TextField
                    label="Password"
                    type="password"
                    required
                    error={Boolean(errors.password)}
                    helperText={errors.password?.message}
                    variant="outlined"
                    {...register('password', {
                        onChange: handleChange,
                        value: loginData.password
                    })}
                />
            </FormControl>
            <Link
                to={'/'}
                className="my-1 block text-right"
            >
                <h2 className="transition duration-150 ease-in hover:text-gray-300">
                    Forget Password ?
                </h2>
            </Link>
            <Button
                type="submit"
                disabled={!isDirty || !isValid}
                className=" my-3 w-full rounded-full border-4 border-solid py-3 hover:bg-primary-1-light"
                variant="contained"
            >
                <h1 className="text-lg">Sign In</h1>
            </Button>
        </Box>
    )
}
