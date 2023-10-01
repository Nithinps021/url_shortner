import ShortenUrlCard from './shortenUrlCard'
import { Button, ThemeProvider } from "./components"
import { NavbarDark } from './navbar'
import LottieAnimation from './animation'
export default function Home() {
  return (
    <main>
      <ThemeProvider>
        <NavbarDark />
        <div className="container mx-auto p-4 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className='flex justify-center items-center '>
              <ShortenUrlCard />
            </div>
            <div >
              <LottieAnimation />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </main>


  )
}
