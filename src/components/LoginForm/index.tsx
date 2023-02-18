import { FormControl, TextField, Button, FormHelperText, Box, FormGroup } from '@mui/material'
import { BRAND_NAME } from '@/configs/constant'
import { Link } from 'react-router-dom'
import { LoginType as IFormInput } from '@/types'
import { loginSchema } from '@/configs/schema/loginSchema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export default function LoginForm() {
    const {
        register,
        formState: { errors, isSubmitSuccessful },
        reset,
        handleSubmit
    } = useForm<IFormInput>({
        mode: 'all',
        resolver: zodResolver(loginSchema)
    })

    const onSubmit = (data: IFormInput) => {
        console.log(data)
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
                    {...register('email')}
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
                    {...register('password')}
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
                className=" my-3 w-full rounded-full border-4 border-solid py-3 hover:bg-primary-1-light"
                variant="contained"
            >
                <h1 className="text-lg">Sign In</h1>
            </Button>
        </Box>
    )
}
