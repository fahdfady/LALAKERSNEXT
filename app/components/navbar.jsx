import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";
import { UserAuth } from "../context/AuthContext";

function Navbar() {
    const { user, logOut } = UserAuth();

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const checkAuthentication = async () => {
            await new Promise((resolve) => setTimeout(resolve, 50))
        }
        checkAuthentication()
    }, [user]);


    return (
        <header role="banner" className="bg-[#00000070] shadow fixed top-0 left-0 right-0 z-50">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 md:py-5 py-4">
                <Link href="/" className="flex items-center">
                    <Image src="/logo.png" width={80} height={50} alt="Lakers Logo" />
                    <span className="self-center p-2 text-2xl font-semibold whitespace-nowrap text-white">Lakers</span>
                </Link>
                <button data-collapse-toggle="navbar" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 0 dark:focus:ring-gray-600" aria-controls="navbar" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <nav className="hidden w-full md:block md:w-auto" id="navbar">
                    <ul className="font-semibold uppercase text-xl flex flex-col p-2 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-6 md:mt-0 md:border-0 md:bg-transparent border-gray-700">
                        <li>
                            <Link href="/" className="block py-2 pl-2 pr-3 rounded hover:bg-gray-800 md:border-0 md:hover:text-yellow-300 md:p-0 text-white md:hover:bg-transparent duration-150" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className="block py-2 pl-2 pr-3 rounded hover:bg-gray-800 md:border-0 md:hover:text-yellow-300 md:p-0 text-white md:hover:bg-transparent duration-150">About</Link>
                        </li>
                        <li>
                            <Link href="/team" className="block py-2 pl-2 pr-3 rounded hover:bg-gray-800 md:border-0 md:hover:text-yellow-300 md:p-0 text-white md:hover:bg-transparent duration-150">team</Link>
                        </li>
                        <li>
                            <Link href="/fixtures" className="block py-2 pl-2 pr-3 rounded hover:bg-gray-800 md:border-0 md:hover:text-yellow-300 md:p-0 text-white md:hover:bg-transparent duration-150">fixtures</Link>
                        </li>
                        <li>
                            <Link href="https://www.nba.com/team/1610612747/lakers" target="blank" className="block py-2 pl-2 pr-3 rounded hover:bg-gray-800 md:border-0 md:hover:text-yellow-300 md:p-0 text-white md:hover:bg-transparent duration-150">official website</Link>
                        </li>
                        {!user ?
                            <li>
                                <Link href="/join" className="block py-2 pl-2 pr-3 rounded hover:bg-gray-800 md:border-0 md:hover:text-yellow-300 md:p-0 text-white md:hover:bg-transparent duration-150">join us</Link>
                            </li>

                            :
                            <>
                                <li>
                                    <Link href={`/profile/${user.uid}`} className="block py-2 pl-2 pr-3 rounded hover:bg-gray-800 md:border-0 md:hover:text-yellow-300 md:p-0 text-white md:hover:bg-transparent duration-150">welcome, {user?.displayName.split(' ').at(0)}</Link>
                                </li>
                                <li className="cursor-pointer" onClick={handleSignOut}><span className="block py-2 pl-2 pr-3 rounded hover:bg-gray-800 md:border-0 md:hover:text-yellow-300 md:p-0 text-white md:hover:bg-transparent duration-150" tabIndex={0}>signout</span></li>
                            </>
                        }
                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default Navbar;