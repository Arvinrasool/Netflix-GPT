import Header from './Header'
import {Link} from 'react-router-dom' 
import { useRef, useState } from 'react'
import { ValidateSignIn } from '../Utils/validateSignIn';
const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true);

    const email = useRef(null);
    const password = useRef(null);

    const handleValidation = () =>{
        ValidateSignIn(email.current.value, password.current.value);
    }

    const toggleIsSignIn = ()=> {
        setIsSignIn(!isSignIn);
    }

    return(
        <div>
            <div className='relative'>
                <img className='w-full object-cover'
                 src="https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/IN-en-20250901-TRIFECTA-perspective_48d84d4e-9558-46b8-a0f3-8b2dc8478431_large.jpg"
                alt="Background" />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
                {/* Content */}
                <div className="absolute top-0 left-0 w-full">
                    <Header />
                </div>
                    <form onSubmit={(e) => e.preventDefault()} className='flex flex-col gap-4 bg-black/70 p-16 absolute top-6/12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32%] mt-8'>
                        <h1 className='text-3xl text-white font-bold mb-4'>{isSignIn? ' Sign In' : 'Sign Up'}</h1>
                        {
                            !isSignIn?
                            <input type="text" placeholder='Full Name' className='p-3 border-1 border-amber-50 text-amber-50 font-semibold' /> :''
                            }
                        <input ref={email} type="text" placeholder='Email Address' className='p-3 border-1 border-amber-50 text-amber-50 font-semibold' />
                        <input ref={password} type="password" placeholder='Password' className='p-3 border-1 border-amber-50  text-amber-50 font-semibold' />
                        <button className='p-2 text-white bg-red-500 cursor-pointer' onClick={handleValidation}>{isSignIn? ' Sign In' : 'Sign Up'}</button>
                        <h1 className='text-white flex justify-center'>{isSignIn? 'OR' :''}</h1>
                        {
                            isSignIn?
                            <button className='text-white bg-gray-600 px-[25%] p-2 cursor-pointer' >Use a sign-in code</button> :''}
                        <p className='text-white underline cursor-pointer'>Forgot Password ?</p>
                        <div>
                            <input type="checkbox" name="Remember me" id="" className='text-white mr-3' />
                            <label className='text-white'>Remember me</label>
                        </div>
                        <div>
                            <span className='text-gray-400'>{isSignIn? 'New to Netflix?':''}</span>
                            <span className='text-white cursor-pointer' onClick={toggleIsSignIn}> 
                                {isSignIn? ' Sign up now.' : ' Already have an account? Sign In.'}
                                </span>
                        </div>
                        <p className=' text-[13px] text-gray-300'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
                        <Link className='text-blue-600 underline cursor-pointer' to ='#' >Learn more.</Link>
                    </form>
            </div>
            <div className='bg-black/92 text-neutral-400 py-22'>
                <div className='px-[12%] flex flex-col gap-5' >
                    <div>
                        <span>Questions? <Link>Call 000-800-919-1743 (Toll-Free)</Link></span>
                    </div>
                    <div className='grid grid-cols-4 gap-8'>
                        <Link className='underline'>FAQ</Link>
                        <Link className='underline'>Help Centre</Link>
                        <Link className='underline'>Privacy</Link>
                        <Link className='underline'>Terms of Use</Link>
                        <Link className='underline'>Cookie Preferences</Link>
                        <Link className='underline'>Corporate Information</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;