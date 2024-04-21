import About from '@/components/shared/About'
import { Features } from '@/components/shared/Features'
import Footer from '@/components/shared/Footer'
import Hero from '@/components/shared/Hero'
import Navbar from '@/components/shared/Navbar'
import Pricing from '@/components/shared/Pricing'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Pricing />
    <Features />
    <Footer />
    </>
  )
}