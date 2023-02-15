import { FormControl, TextField, Button } from '@mui/material'
import { BRAND_NAME } from '@/configs/constant'

export default function LoginForm() {
    return (
        <div className="m-auto h-[65%] max-h-full w-[70%] max-w-full">
            <div className="mb-4">
                <h2 className="text-2xl">
                    Welcome back to <span className="text-3xl font-extrabold">{BRAND_NAME}</span>,
                </h2>
                <p className="mt-1.5 text-lg text-gray-600">
                    Please enter your details to sign in.
                </p>
            </div>
            <div className="my-6">
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
                    <Button
                        className="buttonPrimary my-3 w-full py-3"
                        variant="contained"
                    >
                        Sign In
                    </Button>
                </form>
            </div>
        </div>
    )
}
