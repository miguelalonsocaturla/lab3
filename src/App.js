import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom'
import { useState } from 'react'

// pages
import Home from './Home'
import Login from './Login'
import Register from './Register'
import BlogList from './bloglist'
import BlogDetails from './BlogDetails'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>Blog App</h1>
          <Link to="/">Home</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/bloglist/:user" element={<BlogList/>}/>
          <Route path="/blogs/:id" element={<BlogDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App