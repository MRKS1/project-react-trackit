import React, { useContext, useState } from 'react'
import Logo from '../assets/logo_trackit_login.svg'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import UserContext from '../contexts/UserContext'
import AuthContext from '../contexts/AuthContext'

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const { setUser, setUrl } = useContext(UserContext)
  const { setToken } = useContext(AuthContext)


  function sendLogin(e) {
    e.preventDefault()
    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
    const body = { email, password }


    axios.post(url, body)
      .then(res => {
        setUser(res.data)
        setUrl(res.data.image)
        setToken(res.data.token)
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("image", res.data.image)
        navigate("/habitos")
      })
      .catch()
  }


  return (
    <Container>
      <img src={Logo} alt="Logo" />
      <Fill onSubmit={sendLogin}>
        <input type="text"
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input type="password"
          placeholder='senha'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type='submit'>Entrar</button>
      </Fill>
      <ToForm to="/cadastro">Não tem uma conta? Cadastre-se!</ToForm>
    </Container>
  )
}

const Container = styled.div`
  font-family: "Lexend Deca", serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-top: 70px;
    margin-bottom: 32px;
  }
  `

const ToForm = styled(Link)`
  font-size: 18px;
  color: #52B6FF;

`

const Fill = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    font-size: 20px;
    width: 300px;
    height: 45px;
    border: 1px solid;
    border-color: #D4D4D4;
    border-radius: 5px;
    margin-bottom: 6px;
    padding-left: 10px;
    
    &::placeholder{
      color: #DBDBDB;
    }
  }

  button {
    height: 45px;
    width: 305px;
    font-size: 21px;
    background-color: #52B6FF;
    color: white;
    border: 1px solid;
    border-color: #52B6FF;
    border-radius: 5px;
    margin-bottom: 25px;
  }

`