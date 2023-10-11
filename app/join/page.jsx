'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signOut } from "firebase/auth";
import { UserAuth } from "../context/AuthContext";
import { useProtectedRoute } from '../context/ProtectedRoute';

export default function Register() {
    const { user, googleSignIn } = UserAuth();
    useProtectedRoute();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async () => {
        e.preventDefault()
    }

    const handleSubmitGoogle = async () => {
        try {
            await googleSignIn();
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <section className="flex items-center justify-center">
            <div className="max-w-lg w-full px-8 py-12 bg-transparent rounded-lg shadow-[0px_0px_12px_0px_#000]">
                <div className="flex flex-col items-center justify-center">
                    <Image
                        src="/logo.png" // the logo of the Los Angeles Lakers[^1^][1]
                        alt="Lakers Logo"
                        width={100}
                        height={64}
                    />
                    <h1 className="text-3xl font-bold text-yellow-400 ml-4">Join us, Lakers Fan</h1>
                </div>
                <p className="mt-4 text-gray-300 text-center">
                    A fan website built by {''} <a
                        href="https://fahddev.vercel.app/"
                        target="_blank"
                        className="text-purple-500 hover:underline"
                    >Fahd Ashour</a> with{' '}
                    <a
                        href="^6^" // the link to the Next.js showcase page
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-500 hover:underline"
                    >
                        Next.js
                    </a>{' '}
                    and{' '}
                    <a
                        href="^7^" // the link to the Tailwind CSS components page
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-500 hover:underline"
                    >
                        TailwindCSS
                    </a>
                </p>
                <p className="my-5 text-purple-300 text-center">Kindly, use 'Login with google' option only. As the Email-Password Login isn't working properly at this time</p>
                <form className="mt-8 text-stone-900">
                    <div>
                        <label htmlFor="email" className="sr-only">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md  focus:ring-yellow-400 focus:border-yellow-400"
                        />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="password" className="sr-only">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md  focus:ring-yellow-400 focus:border-yellow-400"
                        />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="confirm-password" className="sr-only">
                            Confirm Password
                        </label>
                        <input
                            id="confirm-password"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            placeholder="Confirm Password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md  focus:ring-yellow-400 focus:border-yellow-400"
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-6 w-full px-4 py-2 bg-yellow-400 text-white font-bold rounded-md duration-100 hover:bg-yellow-500"
                    >Register</button>
                    <button
                        type="button"
                        onClick={handleSubmitGoogle}
                        className="flex justify-center items-center gap-6 mt-6 w-full p-4 bg-black text-white font-bold border-solid border-black border-2 rounded-md duration-150 hover:bg-transparent"
                    ><Image src={"/googlelogo.png"} width={30} height={30} />login with google</button>
                </form>
            </div>
        </section>
    )
}
