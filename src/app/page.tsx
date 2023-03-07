import { Home } from '@/views'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: '300'
})

export default function HomePage() {
  return (
    <main className={inter.className}>
      <Home />
    </main>
  )
}
