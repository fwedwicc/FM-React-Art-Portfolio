import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './components/nav.jsx'
import Hero from './components/hero.jsx'
import Section1 from './components/section1.jsx'
import Footer from './components/footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Hero />
    <Section1 />
    <Footer />
  </React.StrictMode>,
)
