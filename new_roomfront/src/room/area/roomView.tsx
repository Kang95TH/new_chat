import { useState, useEffect } from 'react'
import { styled } from '@mui/system';
import { useAppSelector } from '@/store/config';
import { socket } from "../../socket/socket"
import moment from 'moment';

const MyDiv = styled('div')({
    position: 'inherit',
    width: '100%',
    height: '95%',
    bottom: '0px',
});


function RoomView() {

    const { sRoomSelect } = useAppSelector(state => state.roomselect);
    const [chatList, setChatList] = useState([{
        no: 1,
        code: '',
        chat: '',
        date: ''
    },])

    useEffect(() => {
        socket.on("server_msg", (msg: any) => {
            console.log("room server_msg: ", msg);

            if (msg.code == sRoomSelect) {

                const nowTime = moment().format('MM-DD HH:mm:ss');
                setChatList(prev => [...prev,
                {
                    no: chatList.length + 1,
                    code: msg.code,
                    chat: msg.body,
                    date: nowTime
                }
                ])
            }
        });
    }, [socket]);

    const renderChat = () => {
        return chatList.map((item) => (
            <div >

                <span>{item.code}:&nbsp;</span>
                <span>{item.chat}&nbsp;&nbsp;</span>
                <span>{item.date}</span>

            </div>
        ))
    }

    return (
        <MyDiv>
            {renderChat()}
        </MyDiv>
    )
}

export default RoomView
