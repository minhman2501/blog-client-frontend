import { BRAND_NAME } from '@/configs/constant'
import LoginForm from '@/components/LoginForm'

function LoginModal() {
    return (
        <div className="flex h-screen w-[100vw] items-center overflow-hidden rounded-lg border-4 border-black bg-white p-2 md:h-auto md:w-[80vw] lg:w-[70vw] ">
            <div className="grid min-h-[600px] w-full grid-cols-1 lg:grid-cols-12">
                <div className="col-span-12 flex items-center justify-center md:w-full lg:col-span-7">
                    <div className="m-auto h-[75%] max-h-full w-[70%] max-w-full">
                        <div className="">
                            <h2 className="text-2xl">
                                Welcome back to{' '}
                                <span className="text-3xl font-extrabold">{BRAND_NAME}</span>,
                            </h2>
                            <p className="mt-1.5 text-sm text-gray-600">
                                Please enter your details to sign in.
                            </p>
                        </div>
                        <div
                            id="loginForm"
                            className="mt-6 mb-2"
                        >
                            <LoginForm />
                        </div>
                        <div className=" ">
                            <div className="relative text-center before:absolute before:right-[58%] before:top-[50%] before:left-0 before:block before:border-2 before:border-solid before:border-black after:absolute after:right-0 after:top-[50%] after:left-[58%] after:block after:border-2 after:border-solid after:border-black">
                                <h2>or</h2>
                            </div>
                            <div
                                id="loginAlternatives"
                                className=""
                            >
                                <p>Sign With Google</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-0 hidden h-full max-h-[600px] overflow-hidden rounded-md lg:col-span-5  lg:block">
                    <img
                        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8OtQ6G4dkYId8ckFZcWJypbZWFSajI6SxY7d2U4s-yk54n8t2YMcAhsl6FbTB_J__408Kd_x-oIChnD7BJg2SiL7MmKsLstou6oYitW3sAReahdusBeUrxSoE3Q6w5y2dSE3Mn5n0hcxytfap_SJHdCZRwgdsUEAFSvSYq0eeE2rUguX8A-rCj95jxw/d/4k-pc-wallpaper-jake.jpg"
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

export default LoginModal
