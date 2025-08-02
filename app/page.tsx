'use client'

import { Chat, Footer, Header, TopSection } from '@/components'
import { HomePage } from './Home.styled'

export default function Home() {
  return (
    <>
      <Header />
      <HomePage>
        <TopSection />
        <Chat />
      </HomePage>
      <Footer />
    </>
  )
}