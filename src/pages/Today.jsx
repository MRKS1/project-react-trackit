import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/Header'
import axios from 'axios'
import AuthContext from '../contexts/AuthContext'

export default function Today() {
  const [items, setItems] = useState([])
  const { token } = useContext(AuthContext)

  useEffect(() => {
    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"

    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }


    axios.get(url, config)
      .then(res => setItems(res.data))
      .catch(err => console.log(err.response.data))
  }, [])


  return (
    <Container>
      <Header />
      <Body>
        <Title>Segunda, 17/05</Title>
        {items.map(todayList => (
          <HabitItem key={todayList.id}>
            <HabitInfo>
              <h2>{todayList.name}</h2>
              <p>Sequência atual: {todayList.currentSequence} dias</p>
              <p>Seu recorde: {todayList.highestSequence} dias</p>
            </HabitInfo>
            <Button>
              <ion-icon name="checkmark-outline"></ion-icon>
            </Button>
          </HabitItem>
            )
          )}
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
  font-family: "Lexend Deca", serif;
  min-height: 100vh;
  width: 100vw;
  background-color: #F2F2F2;
  margin-bottom: 70px;
  `

const Body = styled.div`
  padding: 20px;
  margin-top: 70px;
`

const Title = styled.h2`
  font-size: 23px;
  color: #126BA5;
  margin-bottom: 20px;

`

const HabitInfo = styled.div`
  color: #666666;

  h2 {
    font-size: 20px;
    margin-bottom: 7px;
  }

  p {
    font-size: 13px;
  }

`

const HabitItem = styled.div`
  background-color: white;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  margin-bottom: 8px;
`

const Button = styled.div`
  width: 70px;
  height: 70px;
  background-color: #8FC549;
  color: white;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
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
const Day = styled(Link)`
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

