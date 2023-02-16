import LoginForm from '@/components/LoginForm'

function LoginModal() {
    return (
        <div className="flex h-screen w-[100vw] items-center overflow-hidden rounded-lg border-4 border-black bg-white p-2 md:h-auto md:w-[80vw] lg:w-[70vw] ">
            <div className="grid min-h-[600px] w-full grid-cols-1 lg:grid-cols-12">
                <div className="col-span-12 flex items-center justify-center md:w-full lg:col-span-7">
                    <LoginForm />
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
