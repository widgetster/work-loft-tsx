import './App.css'
import { Home } from './components/Home'
import { Route, Routes } from 'react-router'
import { Spaces } from './Spaces'
import { Memberships } from './Memberships'
import { Locations } from './Locations'
import { Resources } from './Resources'


function App() {

  return (

    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="spaces" element={<Spaces />} />
        <Route path="memberships" element={<Memberships />} />
        <Route path="locations" element={<Locations />} />
        <Route path="resources" element={<Resources />} />


      </Routes>

    </>

  )
}

export default App