import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/Header'
import axios from 'axios'
import AuthContext from '../contexts/AuthContext'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { CircularProgress } from '@mui/material'

export default function Today() {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(null);
  const [loading, setLoading] = useState(true);
  const { token } = useContext(AuthContext);
  const day = dayjs().format('dddd, D/MM');
  const dayCorrected = day.charAt(0).toUpperCase() + day.slice(1);
  const body = "";
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  dayjs.locale('pt-br');

  useEffect(() => {
    setLoading(true)
    getItems()
  }, []);

  function getItems() {
    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"
    axios.get(url, config)
      .then(res => {
        setItems(res.data)
        setCount(res.data.length)
        setLoading(false)

      })
      .catch(err => console.log(err.response.data))
  };

  function check(e) {
    axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${e}/check`, body, config)
      .then(() => getItems())
      .catch(err => {
        if (err.response.status === 400) {
          axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${e}/uncheck`, body, config)
            .then(() => getItems())
            .catch()
        }
      })
  }

  return (
    <Container>
      <Header />
      <Body>
        <Title>{dayCorrected}</Title>
        {loading ?
          <Loader>
            <CircularProgress />
          </Loader>
          :
          <div>
            {count === 0 && <p>Você não tem nenhum hábito cadastrado hoje.</p>}
            {items.map(todayList => (
              <HabitItem key={todayList.id}>
                <HabitInfo>
                  <h2>{todayList.name}</h2>
                  <p>Sequência atual: {todayList.currentSequence} dias</p>
                  <p>Seu recorde: {todayList.highestSequence} dias</p>
                </HabitInfo>
                <Button>
                  <CheckBoxIcon
                    sx={{ color: todayList.done === false ? "#E7E7E7" : "#8FC549", fontSize: '90px' }}
                    onClick={() => check(todayList.id)}
                  />
                </Button>
              </HabitItem>
            )
            )}
          </div>
        }
      </Body>
      <Footer>
        <Habit to='/habitos'>
          <CalendarMonthIcon />
          <p>Hábitos</p>
        </Habit>
        <Day to='/hoje'>
          <EventAvailableIcon />
          <p>Hoje</p>
        </Day>
      </Footer>
    </Container>
  )
}

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

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

  p {
    font-family: "Lexend Deca", serif;
    font-size: 18px;
    color: #666666;
    }
`

const Title = styled.h2`
  font-size: 23px;
  color: #126BA5;
  margin-bottom: 20px;
  margin-top: 10px;
`

const HabitInfo = styled.div`
  color: #666666;

  h2 {
    font-size: 20px;
    margin-top: 5px;
    margin-bottom: 13px;
  }

  p {
    font-size: 13px;
    margin-bottom: 5px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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