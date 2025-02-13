import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import AuthContext from '../contexts/AuthContext'

export default function HabitList({ setCount }) {
    const [item, setItem] = useState([])
    const { token } = useContext(AuthContext)


    useEffect(() => {
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }


        axios.get(url, config)
            .then(res => {
                setItem(res.data)
                setCount(res.data.length)
            })
            .catch(err => console.log(err.response.data))

    }, [])




    return (
        <Container>
            {item.map(habit => (
                <HabitBox key={habit.id}>
                    <h2>{habit.name}</h2>
                    <Days>
                        <Day>D</Day>
                        <Day>S</Day>
                        <Day>T</Day>
                        <Day>Q</Day>
                        <Day>Q</Day>
                        <Day>S</Day>
                        <Day>S</Day>
                    </Days>
                </HabitBox>
            ))
            }
        </Container>
    )
}

const Container = styled.div`
        margin-bottom: 80px;
`

const HabitBox = styled.div`
    font-family: "Lexend Deca", serif;
    background-color: white;
    border-radius: 5px;
    margin-bottom: 8px;
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
