'use client'
import Navbar from './components/navbar'
import './globals.css'
import { Rubik } from 'next/font/google'
import { AuthContextProvider } from './context/AuthContext'
import { Suspense } from 'react'
import Loading from './loading'

const rubik = Rubik({ subsets: ['latin'] })

// export const metadata = {
//   title: 'LA Lakers unofficial (fan) website',
//   description: 'made by Fahd Ashour, A front-end developer, using Nextjs',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title> LA Lakers unofficial (fan) website</title>
        <meta name='description' content='made by Fahd Ashour, A front-end developer, using Nextjs' />
      </head>

      <body className={rubik.className}>
        <AuthContextProvider>
          <Suspense fallback={<Loading />}>
            <Navbar />

            <main>
              {children}
            </main>
          </Suspense>
        </AuthContextProvider>
      </body>
    </html>
  )
}
