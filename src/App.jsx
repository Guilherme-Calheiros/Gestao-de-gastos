import React from "react"
import { Route, Routes } from "react-router-dom"
import Login from "./login"
import Register from "./register"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
