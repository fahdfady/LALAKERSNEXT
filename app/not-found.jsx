import Link from "next/link";

export default function NotFound() {
    return (
        <div className="max-w-screen-xl mx-auto h-screen flex justify-center items-center py-8 px-4 lg:py-16 lg:px-6" role="status">
                <div class="mx-auto max-w-screen-sm text-center">
                    <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-yellow-300">404</h1>
                    <p class="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-white">Something's missing.</p>
                    <p class="mb-4 text-lg font-light text-gray-300">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                    <Link href="/" class="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-yellow-300 my-4">Back to Homepage</Link>
            </div>
        </div>
    )
}