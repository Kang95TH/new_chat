import { useState } from 'react'
import { styled } from '@mui/system';
import SectionFrame from './area/sectionFrame';

const MyDiv = styled('div')({
    position: 'absolute',
    width: '50%',
    height: '100%',
    backgroundColor: '#808080',
    right: '0px',
});


function Section() {

    return (
        <MyDiv>
            <SectionFrame></SectionFrame>
        </MyDiv>
    )
}

export default Section
