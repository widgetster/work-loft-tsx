import './App.css'
import { Header } from './components/Header'
import { FirstBlock } from './components/body/FirstBlock'
import { SecondBlock } from './components/body/SecondBlock'
import { ThirdBlock } from './components/body/ThirdBlock'


function App() {

  return (

    <>
      <Header />

      <main>
        <FirstBlock />
        <SecondBlock />
        <ThirdBlock />
      </main>
    </>

  )
}

export default App
