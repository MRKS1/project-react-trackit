import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Today() {

  const url = "https://conteudo.imguol.com.br/c/entretenimento/d8/2017/09/27/bob-esponja-1506562776988_v2_4x3.jpg"



  return (
    <Container>
      <Header>
        <h1>TrackIt</h1>
        <img src={url} alt="Photo" />
      </Header>
      <Body>
        <Title>Segunda, 17/05</Title>
        <HabitItem>
          <HabitInfo>
            <h2>Ler 1 capítulo de livro</h2>
            <p>Sequência atual: 3 dias</p>
            <p>Seu recorde: 5 dias</p>
          </HabitInfo>
          <Button>
            <ion-icon name="checkmark-outline"></ion-icon>
          </Button>
        </HabitItem>
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
  height: 100vh;
  width: 100vw;
  background-color: #F2F2F2;
  margin-bottom: 10px;
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

const Body = styled.div`
  padding: 20px;
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

