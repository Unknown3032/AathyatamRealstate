"use client"; // This is a client component 👈🏽

// react
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useContext, useRef, useState } from 'react'



//animation
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '@/varient';

//toast
import toast, { Toaster } from 'react-hot-toast';

//icons
import { IoMdEye, IoMdEyeOff, IoIosKey } from "react-icons/io";
import { RiUserFill } from "react-icons/ri";


//components
import { UserContext } from '../layout';
import { storeInSession } from '@/common/SessionFunc';



const Signin = () => {
    const [eye, setEye] = useState(false)  // This is a client component 👈🏽
    const auth = useRef()
    const { push } = useRouter();

    let { userAuth: { token }, setUserAuth } = useContext(UserContext)

    const userAuthServer = (formData) => {
        let loadingToast = toast.loading("Signing...")

        axios.post(process.env.NEXT_PUBLIC_URL + "/api/signIn", formData).then(({ data }) => {
            toast.dismiss(loadingToast);
            toast.success("Signed in Successfully👍")

            setTimeout(() => {
                storeInSession("user", JSON.stringify(data?.data))
                setUserAuth(data?.data);
            }, 1000);

        }).catch(({ response }) => {
            toast.dismiss(loadingToast);
            toast.error(response?.data?.data?.error);
        })
    }

    // const googleAuthServer = (formData) => {
    //     let loadingToast = toast.loading("Signing...")

    //     axios.post(process.env.NEXT_PUBLIC_URL + "/api/googleAuth", formData).then(({ data }) => {
    //         toast.dismiss(loadingToast);
    //         toast.success("Signed in Successfully👍")

    //         setTimeout(() => {
    //             storeInSession("user", JSON.stringify(data))
    //             setUserAuth(data);
    //         }, 1000);

    //     }).catch(({ response }) => {
    //         toast.error("Internal Server Error ");
    //     })
    // }

    // const handleGoogleSubmit = async (e) => {
    //     e.preventDefault()
    //     let token
    //     await authWithGoogle().then((user) => {
    //         token = user.accessToken

    //     }).catch((err) => {
    //         console.log(err);
    //     })

    //     let formData = {
    //         token
    //     }
    //     googleAuthServer(formData)
    // }

    // submit the data in server 
    const handleSubmit = (e) => {
        e.preventDefault();

        // regex
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
        let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password

        // form data 
        let form = new FormData(auth.current)
        let formData = {}
        let data;

        for (let [key, value] of form.entries()) {
            formData[key] = value
        }

        let { fullname, email, password } = formData

        // checking conditoins 
        if (fullname.length < 3) {
            data = { "error": "fullname at least 3 letter long" }
            return toast.error(data.error);

        }

        if (email.length <= 0) {
            data = { "error": "Email is required" }
            return toast.error(data.error);

        }

        if (!emailRegex.test(email)) {
            data = { "error": "Email is invalid" }
            return toast.error(data.error);

        }

        if (!passwordRegex.test(password)) {
            data = { "error": "Password should be 6 to 20 charaters long with 1 numeric, 1 lowercase and 1 uppercase" }
            return toast.error(data.error);
        }

        userAuthServer(formData)
    }

    return (
        token ?
            push('/')
            :
            <div className='min-h-screen flex justify-center items-center' >
                <>
                    <Toaster />
                    <motion.div
                        variants={fadeIn(0.1)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1  items-center "
                    >

                        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                            <div className='w-32 mx-auto flex-none'>
                                <Image src={'/anime.png'} className="" width={400} height={400} alt='logo' />
                            </div>
                            <div className=" flex flex-col items-center">
                                <h1 className="text-3xl font-semibold">
                                    Join Us Today
                                </h1>
                                <div className="w-full flex-1 mt-8">

                                    {/* input section  start*/}
                                    <form ref={auth} className="mx-auto max-w-xs">
                                        <div className="relative ">
                                            <input
                                                className="appearance-none border pl-12 border-gray-800 shadow-sm focus:shadow-md focus:placeholder-gray-800  transition  rounded-md w-full py-3 text-gray-800 leading-tight focus:outline-none focus:ring-gray-800 focus:shadow-outline"
                                                id="name"
                                                type="text"
                                                name='fullname'
                                                placeholder="User Name"
                                            />
                                            <div className="absolute left-0 inset-y-0 flex items-center">
                                                <RiUserFill className='h-7 w-7 ml-3 text-gray-800 p-1' />
                                            </div>
                                        </div>

                                        <div className="relative mt-3">
                                            <input
                                                className="appearance-none border pl-12 border-gray-800 shadow-sm focus:shadow-md focus:placeholder-gray-800  transition  rounded-md w-full py-3 text-gray-800 leading-tight focus:outline-none focus:ring-gray-800 focus:shadow-outline"
                                                id="email"
                                                type="text"
                                                name='email'
                                                placeholder="Email"
                                            />
                                            <div className="absolute left-0 inset-y-0 flex items-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-7 w-7 ml-3 text-gray-800 p-1"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                                                    />
                                                    <path
                                                        d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="relative mt-3">
                                            <input
                                                className="appearance-none border pl-12 border-gray-800 shadow-sm focus:shadow-md focus:placeholder-gray-800  transition  rounded-md w-full py-3 text-gray-800 leading-tight focus:outline-none focus:ring-gray-800 focus:shadow-outline"
                                                id="password"
                                                name='password'
                                                type={eye ? "text" : "password"}
                                                placeholder="Password"
                                            />
                                            <div className="absolute left-0 inset-y-0 flex items-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-7 w-7 ml-3 text-gray-800 p-1"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="absolute right-0 inset-y-0 flex items-center">
                                                {!eye ? <IoMdEye onClick={() => setEye(!eye)} className='h-7 w-7 mr-3 text-gray-800 p-1 cursor-pointer' /> : <IoMdEyeOff onClick={() => setEye(!eye)} className='h-7 w-7 mr-3 text-gray-800 p-1 cursor-pointer' />}
                                            </div>
                                        </div>

                                        <button
                                            onClick={handleSubmit}
                                            type='submit'
                                            className="btn-dark mt-5 tracking-wide w-full py-4 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                        >
                                            <svg
                                                className="w-6 h-6 -ml-2"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                                <circle cx="8.5" cy="7" r="4" />
                                                <path d="M20 8v6M23 11h-6" />
                                            </svg>
                                            <span className="ml-3 ">
                                                Sign In
                                            </span>
                                        </button>

                                    </form>
                                    {/* input section end */}


                                    <div className="my-12 border-b text-center">
                                        <div
                                            className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"
                                        >
                                            already have an account ? please login
                                        </div>
                                    </div>

                                    {/* google section  */}
                                    <div className="flex flex-col items-center">

                                        <p className="mt-6 text-xs text-gray-600 text-center">
                                            Already have an account ?
                                            <Link href="/login" className="border-b mx-2 border-gray-800 text-black border-solid">
                                                Sign Up
                                            </Link>

                                        </p>

                                        <p className="mt-6 text-xs text-gray-600 text-center">
                                            I agree to abide by templatana's
                                            <Link href="/" className="border-b mx-1 border-gray-500 border-dotted">
                                                Terms of Service
                                            </Link>
                                            and its
                                            <Link href="/" className="border-b mx-1 border-gray-500 border-dotted">
                                                Privacy Policy
                                            </Link>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            </div>
    )
}

export default Signin