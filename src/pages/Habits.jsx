import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import AddHabits from '../components/AddHabits'
import HabitList from '../components/HabitList'

export default function Habits() {
  const url = "https://conteudo.imguol.com.br/c/entretenimento/d8/2017/09/27/bob-esponja-1506562776988_v2_4x3.jpg"

  return (
    <Container>
      <Header>
        <h1>TrackIt</h1>
        <img src={url} alt="Photo" />
      </Header>
      <Body>
      <Title>
        <h2>Meus hábitos</h2>
        <AddButton>+</AddButton>
      </Title>
        {/* ALTERAR QUANDO NECESSARIO */}
        {/* <HabitList /> */}
        {/* <AddHabits /> */}
        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
      </Body>
      <Footer>
        <Habit to='/habitos'>
          <ion-icon name="calendar-outline"></ion-icon>
          <p>Hábitos</p>
        </Habit>
        <Day to='/hoje'>
          <ion-icon name="calendar-outline"></ion-icon>
          <p>Hoje</p>
        </Day>
      </Footer>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #F2F2F2;
`

const Header = styled.div`
height: 70px;
width: 100vw;
background-color: #126BA5;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 15px;

h1 {
  font-family: "Playball", serif;
  font-size: 40px;
  color: white;
  margin-left: 20px;
}

img {
  height: 51px;
  width: 51px;
  border-radius: 100px;
  margin-right: 20px;
}
`


const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    h2 {
        font-family: "Lexend Deca", serif;
        color: #126BA5;
        font-size: 23px;
    }
`
const AddButton = styled.div`
    height: 35px;
    width: 40px;
    background-color: #52B6FF;
    font-size: 27px;
    color: white;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
`


const Body = styled.div`
    padding: 20px;

    p {
    font-family: "Lexend Deca", serif;
    font-size: 18px;
    color: #666666;

    }
`



const Footer = styled.div`
  height: 70px;
  width: 100vw;
  color: black;
  font-family: "Lexend Deca", serif;
  font-size: 20px;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
`

const Habit = styled(Link)`
  width: 50%;
  background-color: #52B6FF;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  p {
    margin-left: 5px;
  }
`
const Day = styled(Link)`
  width: 50%;
  background-color: white;
  color: #D4D4D4;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  
  p {
    margin-left: 5px;
  }

`
