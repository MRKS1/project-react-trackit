import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function AddHabits() {
    return (
        <Container>
            <input type="text" placeholder='nome do hábito' />
            <Days>
                <Day>D</Day>
                <Day>S</Day>
                <Day>T</Day>
                <Day>Q</Day>
                <Day>Q</Day>
                <Day>S</Day>
                <Day>S</Day>
            </Days>
            <Footer>
                <Cancel>Cancelar</Cancel>
                <Send>Salvar</Send>
            </Footer>
        </Container>
    )
}

const Container = styled.div`
    height: 180px;
    font-family: "Lexend Deca", serif;
    background-color: white;
    border-radius: 5px;
    margin-bottom: 30px;

    input {
    height: 45px;
    width: 280px;
    font-size: 20px;
    border: 1px solid;
    border-color: #D4D4D4;
    border-radius: 5px;
    margin: 18px 18px 8px 18px;
    padding-left: 10px;
    
    &::placeholder{
      color: #DBDBDB;
    }
  }
`

const Days = styled.div`
    margin-left: 18px;
    margin-bottom: 25px;
    display: flex;
`

const Day = styled.div`
    height: 30px;
    width: 30px;
    font-size: 20px;
    color: #DBDBDB;
    border: 1px solid;
    border-color: #D4D4D4;
    border-radius: 5px;
    margin-right: 4px;
    display: flex;
    justify-content: center;
    align-items: center;

`

const Footer = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    margin-right: 18px;

`

const Cancel = styled(Link)`
    margin-right: 18px;
    font-size: 18px;
    color: #52B6FF;
    text-decoration: none;

`

const Send = styled(Link)`
        height: 35px;
        width: 84px;
        background-color: #52B6FF;
        color: white;
        font-size: 18px;
        border: none;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;


`