import React, { useContext } from 'react'
import styled from 'styled-components'
import UserContext from '../contexts/UserContext'

export default function Header() {

  const { user, url } = useContext(UserContext)



  return (
    <Container>
      <h1>TrackIt</h1>
      <img src={url} alt="Photo" />
    </Container>
  )
}

const Container = styled.div`
height: 70px;
width: 100vw;
background-color: #126BA5;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 15px;
position: fixed;
top: 0;
left: 0;
z-index: 1;

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