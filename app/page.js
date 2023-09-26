import Image from 'next/image'
import Banner from './components/banner'
import Game from './components/Game'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner />

      <Game />
    </main>
  )
}
