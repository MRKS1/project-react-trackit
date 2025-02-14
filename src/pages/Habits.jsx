import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import AddHabits from '../components/AddHabits'
import HabitList from '../components/HabitList'
import Header from '../components/Header'
import AuthContext from '../contexts/AuthContext'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AddBoxIcon from '@mui/icons-material/AddBox';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';


export default function Habits() {
  const [item, setItem] = useState([]);
  const [count, setCount] = useState(null);
  const [click, setClick] = useState(null);
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/")
    }
  }, []);

  function clicked() {
    setClick([1])
  };

  return (
    <Container>
      <Header />
      <Body>
        <Title>
          <h2>Meus hábitos</h2>
          <AddBoxIcon
            onClick={clicked}
            sx={{ 
              color: '#52B6FF', 
              fontSize: '45px', 
              cursor: 'pointer'
            }}
          />
        </Title>
        {click && <AddHabits setCount={setCount} setClick={setClick} item={item} setItem={setItem} />}
        {count === 0 && <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>}
        <HabitList setCount={setCount} item={item} setItem={setItem} />
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

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #F2F2F2;
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

const Body = styled.div`
    padding: 20px;
    margin-top: 70px;

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