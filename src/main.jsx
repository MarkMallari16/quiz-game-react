import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import QuizGame from './pages/QuizGame.jsx'
import Info from './pages/Info.jsx'
import Category from './pages/Category.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category' element={<Category />} />
        <Route path='/info' element={<Info />} />
        <Route path='/quiz-game' element={<QuizGame />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
