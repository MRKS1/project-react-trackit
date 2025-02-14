import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import AuthContext from '../contexts/AuthContext'
import HabitList from './HabitList'
import { CircularProgress } from '@mui/material'

export default function AddHabits({ setClick, item, setItem, setCount }) {
    const [nameHabit, setNameHabit] = useState("");
    const [loading, setLoading] = useState(false);
    const { token } = useContext(AuthContext);
    const [selection, setSelection] = useState([]);

    function sendHabit(e) {
        setLoading(true)
        e.preventDefault();
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const body = {
            name: nameHabit,
            days: selection
        };
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        axios.post(url, body, config)
            .then(res => {
                setItem([...item, res.data])
                setCount(res.data.length)
                setClick(null)
                setLoading(false)
            })
            .catch(err => setLoading(false));

    }

    function sendCancel() {
        setClick(null)
    };

    function selectDays(choice) {
        if (selection.includes(choice)) {
            setSelection(selection.filter(i => i !== choice));
        }
        else {
            setSelection([...selection, choice]);
        }
    };


    return (
        <Container
            onSubmit={sendHabit}
        >
            <input
                type="text"
                placeholder='nome do hábito'
                value={nameHabit}
                onChange={e => setNameHabit(e.target.value)}
                disabled={loading}
                required
            />
            <Days>
                <Day
                    className={selection.includes(7) ? "selected" : "notselected"}
                    onClick={res => selectDays(7)}
                ><p>D</p></Day>
                <Day className={selection.includes(1) ? "selected" : "notselected"}
                    onClick={res => selectDays(1)}
                ><p>S</p></Day>
                <Day className={selection.includes(2) ? "selected" : "notselected"}
                    onClick={res => selectDays(2)}
                ><p>T</p></Day>
                <Day className={selection.includes(3) ? "selected" : "notselected"}
                    onClick={res => selectDays(3)}
                ><p>Q</p></Day>
                <Day className={selection.includes(4) ? "selected" : "notselected"}
                    onClick={res => selectDays(4)}
                ><p>Q</p></Day>
                <Day className={selection.includes(5) ? "selected" : "notselected"}
                    onClick={res => selectDays(5)}
                ><p>S</p></Day>
                <Day className={selection.includes(6) ? "selected" : "notselected"}
                    onClick={res => selectDays(6)}
                ><p>S</p></Day>
            </Days>
            <Footer>
                <Cancel onClick={sendCancel}>Cancelar</Cancel>
                <Send type="submit">{!loading ? "Salvar" : <CircularProgress color="white" size="20px" />}</Send>
            </Footer>
        </Container>
    )
}

const Container = styled.form`
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
    cursor: pointer;
    
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

const Send = styled.button`
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

        &:hover {
            cursor: pointer;
    }
`