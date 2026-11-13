import './App.css'
import { Header } from './components/Header'
import { FirstBlock } from './components/body/FirstBlock'
import { SecondBlock } from './components/body/SecondBlock'


function App() {

  return (

    <>
      <Header />

      <main>
        <FirstBlock />
        <SecondBlock />
      </main>
    </>

  )
}

export default App
