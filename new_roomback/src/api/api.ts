import { Request, Response, Router } from 'express';
import connection from '../db/connect';
import { room_default } from '../data/data';

const router = Router();

router.post('/sendMsg', function (req, res) {
    console.log('post send_log - req.body: ', req.body)

    if (req.body.httpMsg != undefined && req.body.httpMsg == 'getRoomList') {
        // console.log('post send_log - req.body.httpMsg: ', req.body.httpMsg)

        let tmpList = new Array();
        connection.query('SELECT * FROM demo_chat.demo_list;', (error, rows, fields) => {
            if (error) {
                console.error('Error executing query: ', error);
                rows = room_default
            }

            for (var key in rows) {
                tmpList.push(rows[key].roomlist);
            }

            res.send(tmpList)
        });
    }

    if (req.body.actionMsg != undefined) {
        console.log('post send_log - req.body.actionMsg: ', req.body.actionMsg)
        res.send("result node express success")
    }
})

export default router;