import './App.css'
import { useEffect } from 'react'
import { Outlet, Route, Routes, useLocation, useNavigationType } from 'react-router'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Spaces } from './Spaces'
import { Memberships } from './Memberships'
import { Locations } from './Locations'
import { Resources } from './Resources'

function SiteLayout() {
  return (
    <div className="site-layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  const location = useLocation()
  const navigationType = useNavigationType()

  useEffect(() => {
    const { hash } = location
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    } else if (navigationType !== 'POP') {
      window.scrollTo(0, 0)
    }
  }, [location, navigationType])

  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="spaces" element={<Spaces />} />
        <Route path="memberships" element={<Memberships />} />
        <Route path="locations" element={<Locations />} />
        <Route path="resources" element={<Resources />} />
      </Route>
    </Routes>
  )
}

export default App
