import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './components/nav.jsx'
import Hero from './components/hero.jsx'
import Story from './components/story.jsx'
import Footer from './components/footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Hero />
    <Story />
    <Footer />
  </React.StrictMode>,
)
