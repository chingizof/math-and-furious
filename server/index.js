import express from 'express'
import cors from 'cors'
import {addUser, getAllUsers, registerWithEmailAndPassword, logInWithEmailAndPassword, createNewGame }  from './config.js'
import { addDoc } from 'firebase/firestore'

const User = {} 

const app = express()
app.use(express.json())
app.use(cors())

app.post('/create', async (req, res) => {
    const data = req.body
    await addUser(data)
    res.status(200).send({msg: "User Added"})
})

app.post('/register', async (req,res) => {
    const email = req.body.email
    const login = req.body.name
    const password = req.body.password
    await registerWithEmailAndPassword(login, email, password)
    res.status(200).send({msg:"Success"})
})


app.post('/login', async (req, res) => {
    const email = req.body.email
    const pass = req.body.password
    await logInWithEmailAndPassword(email, pass)
    res.status(200).send({msg:"Success"})
})

app.get('/', async (req, res) => {
    const snapshot = await getAllUsers()
    const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    res.send(list)
})

app.post('/new-game', async (req, res) => {
    createNewGame(req)
    res.send("success")//
})

app.post('/update', async (req,res) => {
    const id = req.body.id
    delete req.body.id
    const data = req.body
    await User.doc(id).update(data)
    res.send("accepted change")
})

app.post('/delete', async (req,res) => {
    const id = req.body.id
    await User.doc(id).delete()
    res.send("Deleted succsfully")
})

app.listen(4000, () => {
    console.log("Up and running")
})