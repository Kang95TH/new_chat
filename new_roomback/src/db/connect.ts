import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'demo_user',
    password: 'asdf',
    database: 'demo_chat'
});
connection.connect();

export default connection;