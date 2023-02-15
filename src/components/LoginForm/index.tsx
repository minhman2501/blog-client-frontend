import { FormControl, TextField, Button } from '@mui/material'
import { BRAND_NAME } from '@/configs/constant'
import { Link } from 'react-router-dom'

export default function LoginForm() {
    return (
        <div className="m-auto h-[65%] max-h-full w-[70%] max-w-full">
            <div className="">
                <h2 className="text-2xl">
                    Welcome back to <span className="text-3xl font-extrabold">{BRAND_NAME}</span>,
                </h2>
                <p className="mt-1.5 text-sm text-gray-600">
                    Please enter your details to sign in.
                </p>
            </div>
            <div className="mt-6 mb-2">
                <form className="w-full">
                    <FormControl className="my-2.5 w-full">
                        <TextField
                            label="Email"
                            type="email"
                            required
                            variant="outlined"
                        />
                    </FormControl>
                    <FormControl className="my-2.5 w-full">
                        <TextField
                            label="Password"
                            type="password"
                            required
                            variant="outlined"
                        />
                    </FormControl>
                    <Link
                        to={'/'}
                        className="my-1 block text-right"
                    >
                        <h2 className="hover:text-primary-1">Forget Password ?</h2>
                    </Link>
                    <Button
                        className=" my-3 w-full rounded-full border-4 border-solid py-3 hover:bg-white"
                        variant="contained"
                    >
                        <h1 className="text-lg">Sign In</h1>
                    </Button>
                </form>
            </div>
            <div className=" ">
                <div className="relative text-center before:absolute before:right-[58%] before:top-[50%] before:left-0 before:block before:border-2 before:border-solid before:border-black after:absolute after:right-0 after:top-[50%] after:left-[58%] after:block after:border-2 after:border-solid after:border-black">
                    <h2>or</h2>
                </div>
                <div className="">
                    <p>Sign With Google</p>
                </div>
            </div>
        </div>
    )
}
