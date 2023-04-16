import { useState } from 'react'
import { styled } from '@mui/system';
import RoomTop from './area/roomTop';
import RoomView from './area/roomView';

const MyDiv = styled('div')({
    position: 'absolute',
    width: '50%',
    height: '100%',
    backgroundColor: '#808080',
    right: '0px',
});


function Room() {

    return (
        <MyDiv>
            <RoomTop></RoomTop>
            <RoomView></RoomView>
        </MyDiv>
    )
}

export default Room
