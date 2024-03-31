// Home button

import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { PowerBtn } from '../components/AllSvgs'
import welcome from '../assets/Images/man_raising_hand.gif'


const Power = styled.button`
position: fixed;
top: 2rem;
left: 50%;
transform: translate(-50%, 0);

background-color: transparent;
padding: 0.3rem;
border: none;
width: 3.5rem;
height: 3.5rem;

display: flex;
justify-content: center;
align-items:center;
z-index:3;

cursor: pointer;

&:hover{
    border-radius: 20%;
    box-shadow: 0 0 8px 2px #0003;
}

&>*:first-child{
    text-decoration: none;
    color: inherit;
}
`

const PowerButton = () => {
    return (
        <Power>
        <NavLink to="/">
            <a href='/'><img src={welcome} width={60} height={60} /></a>
        </NavLink>
        </Power>
    )
}

export default PowerButton
