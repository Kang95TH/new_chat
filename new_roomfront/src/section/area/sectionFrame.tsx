import { useState, useEffect, Key } from 'react'
import { styled } from '@mui/system';
import { Paper } from '@mui/material';
import { Grid } from '@mui/material';
import SectionBtn from './sectionBtn';
import { useAppSelector } from '@/store/config';

const MyDiv = styled('div')({
    position: 'inherit',
    width: '100%',
    height: '100%',
});

const FramePaper = styled(Paper)`
    height: 200px;
    background-color: #6e6e6e;
`;

function SectionFrame() {

    const { sRoomList } = useAppSelector(state => state.roomlist);
    const [roomList, setRoomList] = useState<any>([]);

    useEffect(() => {
        setRoomList(sRoomList)
    }, []);

    useEffect(() => {
        setRoomList(sRoomList)
    }, [sRoomList]);

    return (
        <MyDiv>
            <Grid >
                {roomList.map((title: any, index: any) => (
                    <Grid key={index}><FramePaper variant="outlined"><SectionBtn roomTitle={title}></SectionBtn></FramePaper></Grid>
                ))}
            </Grid>
        </MyDiv>
    )
}

export default SectionFrame
