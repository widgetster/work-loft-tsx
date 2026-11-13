import './App.css'
import { Header } from './components/Header'
import { FirstBlock } from './components/body/FirstBlock'
import { SecondBlock } from './components/body/SecondBlock'
import { ThirdBlock } from './components/body/ThirdBlock'
import { FourthBlock } from './components/body/FourthBlock'
import { FifthBlock } from './components/body/FifthBlock'
import { SixthBlock } from './components/body/SixthBlock'


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
      </main>
    </>

  )
}

export default App
