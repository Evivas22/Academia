import {connect, connection} from 'mongoose'


const conn = {
    isConnected: false
}

 export async function connectDB(){
    if (conn.isConnected)return;

    const db = await connect('mongodb://127.0.0.1/db_academia')
    console.log(db.connection.db.databaseName)
    conn.isConnected = db.connections[0].readyState
    console.log('Mongose is connected')
 }

 connection.on('connected', ()=>{
    console.log('Mongose is connected')
 })

 connection.on('error', (err)=>{
    console.log('Mongoose coneccted error', err)
 })






