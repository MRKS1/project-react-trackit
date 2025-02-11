import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Form from './pages/Form'
import Habits from './pages/Habits'
import Today from './pages/Today'

function App() {

  return (
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/cadastro' element={<Form />} />
        <Route path='/habitos' element={<Habits />} />
        <Route path='/hoje' element={<Today />} />
      </Routes>
     </BrowserRouter>
    
  )
}


 

export default App
