import { useState } from 'react'
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import axios from 'axios'

const MyDiv = styled('div')({
    position: 'inherit',
    width: '100%',
    height: '100%',
});

function ActionButton(props: any) {

    const [error, setError] = useState(null);

    const sendActionLog = async (className: any) => {
        console.log("test test: ", className)
        try {
            setError(null);

            const send_data = {
                actionMsg: className,
            }
            const post_log = await axios.post('http://localhost:5174/sendMsg', send_data)
            console.log(post_log.data);

        } catch (e: any) {
            setError(e);
            console.log(e);
        }
    };

    return (
        <MyDiv>
            <Button className={props.className} onClick={() => { sendActionLog(props.className), props.onClick() }}>{props.title}</Button>
        </MyDiv>
    )
}

export default ActionButton
