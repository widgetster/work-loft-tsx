import { Header } from "./Header"
import { FirstBlock } from "../pages/home/FirstBlock"
import { SecondBlock } from "../pages/home/SecondBlock"
import { ThirdBlock } from "../pages/home/ThirdBlock"
import { FourthBlock } from "../pages/home/FourthBlock"
import { FifthBlock } from "../pages/home/FifthBlock"
import { SixthBlock } from "../pages/home/SixthBlock"
import { SeventhBlock } from "../pages/home/SeventhBlock"
import { Footer } from "./Footer"


export function Home() {

  return (
    <>
      <Header />

      <main>
        <FirstBlock />
        <SecondBlock />
        <ThirdBlock />
        <FourthBlock />
        <FifthBlock />
        <SixthBlock />
        <SeventhBlock />
      </main>

      <Footer />
    </>

  )
}