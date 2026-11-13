import './App.css'
import { Header } from './components/Header'
import { FirstBlock } from './components/body/FirstBlock'
import { SecondBlock } from './components/body/SecondBlock'
import { ThirdBlock } from './components/body/ThirdBlock'
import { FourthBlock } from './components/body/FourthBlock'
import { FifthBlock } from './components/body/FifthBlock'
import { SixthBlock } from './components/body/SixthBlock'
import { SeventhBlock } from './components/body/SeventhBlock'
import { Footer } from './components/Footer'


function App() {

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

export default App