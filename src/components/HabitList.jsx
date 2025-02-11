import React from 'react'
import styled from 'styled-components'

export default function HabitList() {
    return (
        <Container>
            <h2>Ler 1 capítulo de livro</h2>
            <Days>
                <Day>D</Day>
                <Day>S</Day>
                <Day>T</Day>
                <Day>Q</Day>
                <Day>Q</Day>
                <Day>S</Day>
                <Day>S</Day>
            </Days>
        </Container>

    )
}


const Container = styled.div`
    font-family: "Lexend Deca", serif;
    background-color: white;
    border-radius: 5px;
    margin-bottom: 30px;
    padding: 20px;

    h2 {
        font-size: 20px;
        color: #666666;
        margin-bottom: 12px;
    }

`
const Days = styled.div`
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
