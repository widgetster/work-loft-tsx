import { FirstBlock } from "../pages/home/FirstBlock"
import { SecondBlock } from "../pages/home/SecondBlock"
import { ThirdBlock } from "../pages/home/ThirdBlock"
import { FourthBlock } from "../pages/home/FourthBlock"
import { FifthBlock } from "../pages/home/FifthBlock"
import { SixthBlock } from "../pages/home/SixthBlock"
import { SeventhBlock } from "../pages/home/SeventhBlock"


export function Home() {

  return (
    <div className="route-page">
      <FirstBlock />
      <SecondBlock />
      <ThirdBlock />
      <FourthBlock />
      <FifthBlock />
      <SixthBlock />
      <SeventhBlock />
    </div>

  )
}
