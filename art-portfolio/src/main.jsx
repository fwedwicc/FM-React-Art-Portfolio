import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Nav from './pages/nav.jsx'
import Hero from './pages/hero.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Hero />
    {/* <App /> */}
  </React.StrictMode>,
)
