import React, { useState } from 'react'
import Logo from '../assets/logo_trackit_login.svg'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Form() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()




  function sendInfo(e) {
    e.preventDefault()
    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
    const body = { email, name, image, password }


    axios.post(url, body)
    .then(() => navigate("/"))
    .catch(err => console.log(err.response.data))
  }


  return (
    <Container>
      <img src={Logo} alt="Logo" />
      <Fill onSubmit={sendInfo}>
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
        <input type="text"
          placeholder='nome'
          value={name}
          onChange={(e) => setName(e.target.value)} 
          required
          />
        <input type="text"
          placeholder='foto'
          value={image}
          onChange={(e) => setImage(e.target.value)} 
          required
          />        
        <button type='submit'>Cadastrar</button>
      </Fill>
      <ToForm to="/">Já tem uma conta? Faça login!</ToForm>
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
