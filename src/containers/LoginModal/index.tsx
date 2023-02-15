import LoginForm from '@/components/LoginForm'

function LoginModal() {
    return (
        <div className="w-[65vw] overflow-hidden rounded-md border-4 border-black bg-white p-3 ">
            <div className="grid min-h-[600px] grid-cols-12">
                <div className="col-span-7 flex items-center p-6">
                    <LoginForm />
                </div>
                <div className="col-span-5 overflow-hidden rounded-md">
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
