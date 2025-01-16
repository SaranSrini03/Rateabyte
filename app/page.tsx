import { Header } from '@/components/Header'
import { HomePage } from '@/components/Home'

import WelcomePage from '@/components/Welcome'

export default function Home() {
  return (
    <div className="min-h-screen bg-orange-50">
      <Header />
      <HomePage />
      {/* <WelcomePage /> */}
    </div>
  )
}

