import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import AuthContext from '../contexts/AuthContext'
import { CircularProgress } from '@mui/material'


export default function HabitList({ setCount, item, setItem }) {
    const { token } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        axios.get(url, config)
            .then(res => {
                setItem(res.data)
                setCount(res.data.length)
                setLoading(false)
            })
            .catch(err => console.log(err.response.data))

    }, []);

    return (
        <Container>
            {loading ?
                <Loader>
                    <CircularProgress />
                </Loader>
                :
                <div>
                    {item.map(habit => (
                        <HabitBox key={habit.id}>
                            <h2>{habit.name}</h2>
                            <Days>
                                <Day className={habit.days.includes(7) ? "selected" : "notselected"}><p>D</p></Day>
                                <Day className={habit.days.includes(1) ? "selected" : "notselected"}><p>S</p></Day>
                                <Day className={habit.days.includes(2) ? "selected" : "notselected"}><p>T</p></Day>
                                <Day className={habit.days.includes(3) ? "selected" : "notselected"}><p>Q</p></Day>
                                <Day className={habit.days.includes(4) ? "selected" : "notselected"}><p>Q</p></Day>
                                <Day className={habit.days.includes(5) ? "selected" : "notselected"}><p>S</p></Day>
                                <Day className={habit.days.includes(6) ? "selected" : "notselected"}><p>S</p></Day>
                            </Days>
                        </HabitBox>
                    ))
                    }
                </div>
            }
        </Container>
    )
}

const Container = styled.div`
    margin-bottom: 80px;
`

const Loader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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
    border: 1px solid;
    border-color: #D4D4D4; 
    border-radius: 5px;
    margin-right: 4px;
    display: flex;
    justify-content: center;
    align-items: center;

    &.selected {
        background-color: #CFCFCF;
        p{
            color: white;
        }
    }

    &.notselected {
        background-color: white;
        p{
            color: #DBDBDB;
        }
    }
`