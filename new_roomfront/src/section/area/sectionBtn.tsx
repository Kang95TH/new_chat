import { useState } from 'react'
import { Link } from "react-router-dom";
import { useAppDispatch } from '@/store/config';
import { setRoomSelect } from '@/store/slices/roomSelect';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import ActionButton from '@/components/actionButton';

const MyDiv = styled('div')({
    position: 'inherit',
    width: '100%',
    height: '100%',
});

const StyledLink = styled(Link)`
    position: inherit;
    display: block;
    width: 100%;
    height: 100%;
`;

const ListBtn = styled(Button)`
    opacity: 1;
    color: white;
    min-width: 100%;
    min-height: 100%;

    &:hover{  
    color: white;
    background-color: none;
    opacity: 1;
    }
`;

const TestBtn = styled(ActionButton)`
position: inherit;
    opacity: 1;
    color: white;
    width: 100%;
    height: 100%;
    min-width: 100%;
    min-height: 100%;

    &:hover{  
    color: green;
    background-color: none;
    opacity: 1;
    }
`;

function SectionBtn(props: any) {

    const dispatch = useAppDispatch();

    const btnClick = (roomTitle: any) => {
        // console.log("roomTitle: ", roomTitle);

        dispatch(setRoomSelect(roomTitle));
    }

    return (
        <MyDiv>
            {/* <Link to="/room"><ListBtn onClick={() => btnClick(props.roomTitle)}>enter the room - {props.roomTitle}</ListBtn></Link> */}
            <StyledLink to="/room"><TestBtn className={props.roomTitle} title={`enter the room - ${props.roomTitle}`} onClick={() => btnClick(props.roomTitle)}></TestBtn></StyledLink>
        </MyDiv>
    )
}

export default SectionBtn
