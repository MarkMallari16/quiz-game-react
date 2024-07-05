import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import QuizGame from './pages/QuizGame.jsx'
import Info from './pages/Info.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Router>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/info' element={<Info/>}/>
        <Route path='/game' element={<QuizGame/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes> 
    </Router>
  </React.StrictMode>,
)
