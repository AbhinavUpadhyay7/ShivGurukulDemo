import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import Gallery from './pages/Gallery'
import GetInvolved from './pages/GetInvolved'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Education • Service • Humanity</span>
          <span className="topbar-right">A brighter future begins with education</span>
        </div>
      </div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
