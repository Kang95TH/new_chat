import { useState } from 'react'
import { Link } from "react-router-dom";
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

const MyDiv = styled('div')({
    position: 'inherit',
    width: '100%',
    height: '5%',
});

const RoomTopPrevBtn = styled(Button)`
    position: absolute;
    opacity: 1;
    color: white;
    min-width: 5%;
    max-height: 100%;

    &:hover{  
    color: white;
    background-color: none;
    opacity: 1;
    }
`;

function RoomTop() {

    const btnClick = () => {
        console.log("test");
    }

    return (
        <MyDiv>
            <Link to="/section"><RoomTopPrevBtn onClick={btnClick}><ArrowBack /></RoomTopPrevBtn></Link>
        </MyDiv>
    )
}

export default RoomTop
