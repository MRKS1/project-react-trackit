import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Form from './pages/Form'
import Habits from './pages/Habits'
import Today from './pages/Today'
import { useState } from 'react'
import UserContext from './contexts/UserContext'
import AuthContext from './contexts/AuthContext'

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null)
  const [url, setUrl] = useState(localStorage.getItem("image"))
  

  return (
    <AuthContext.Provider value={{token, setToken}}>
    <UserContext.Provider value={{user, setUser, url, setUrl}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/cadastro' element={<Form />} />
          <Route path='/habitos' element={<Habits />} />
          <Route path='/hoje' element={<Today />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
    </AuthContext.Provider>
  )
}




export default App
