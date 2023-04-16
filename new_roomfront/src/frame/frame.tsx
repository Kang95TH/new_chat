import { useState, useEffect } from 'react'
import { styled } from '@mui/system';
import {
    Button,
    TextField,
    InputLabel, MenuItem, FormControl, Select, SelectChangeEvent
} from '@mui/material';
import ActionButton from '@/components/actionButton';
import { useAppDispatch, useAppSelector } from '@/store/config';
import { setRoomList } from '@/store/slices/roomFrame';
import axios from 'axios'
import { initSocketConnection, disconnectSocket } from "../socket/socket"
import { sendSocketMessage } from "../socket/sendMsgSocket"
import { Link } from "react-router-dom";

const MyDiv = styled('div')({
    position: 'inherit',
    width: '50%',
    height: '100%',
});

const My2Div = styled('div')({
    position: 'inherit',
    width: '100%',
    height: '10%',
});

const StyledLink = styled(Link)`
    position: inherit;
    display: block;
    width: 100%;
    height: 5%;
`;

const TestBtn = styled(ActionButton)`
    position: inherit;
    width: 100%;
    height: 100%;
`;

const Test2Btn = styled(ActionButton)`
    position: inherit;
    width: 100%;
    height: 5%;
`;

function Frame() {
    const dispatch = useAppDispatch();
    const { sRoomList } = useAppSelector(state => state.roomlist);
    const [error, setError] = useState(null);
    const [selectList, setSelectList] = useState<any>([]);
    const [roomno, setRoomno] = useState('');
    const [textValue, setTextValue] = useState("My Text");

    useEffect(() => {
        // socket.on("chat", (msg: any) => {
        //     console.log("chat: ", msg);
        // });

        initSocketConnection()
        return () => {
            disconnectSocket();
        }
    }, [])

    useEffect(() => {
        setSelectList(sRoomList)
    }, [sRoomList]);

    const setRoomChange = (event: SelectChangeEvent) => {
        setRoomno(event.target.value);
    };

    const setRoomListChange = async () => {

        try {
            setError(null);

            const send_data = {
                httpMsg: 'getRoomList',
            }
            const post_log = await axios.post('http://localhost:5174/sendMsg', send_data)
            console.log(post_log.data);

            dispatch(setRoomList(post_log.data));
        } catch (e: any) {
            setError(e);
            console.log(e);
        }

    }

    const sendServer = () => {
        sendSocketMessage(roomno, textValue)
    }

    return (
        <MyDiv>
            <h1>Chat Client</h1>
            <StyledLink to="/section"> <TestBtn className="class1" title="refresh list" onClick={setRoomListChange} size='large'></TestBtn></StyledLink>
            <br />
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">Room no</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={roomno}
                    label="Room No"
                    onChange={setRoomChange}
                >
                    {selectList.map((title: any, index: any) => (
                        <MenuItem key={index} value={title}>{title}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <TextField color="success" focused label="Msg" variant="standard" value={textValue} onChange={(newValue) => setTextValue(newValue.target.value)} />
            <My2Div><Test2Btn className="msgsend" title="send" onClick={sendServer} size='large'></Test2Btn></My2Div>
        </MyDiv>
    )
}

export default Frame
