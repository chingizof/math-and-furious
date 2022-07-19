import express from 'express'
import cors from 'cors'
import User from './config.js'

const app = express()
app.use(express.json())
app.use(cors())

app.post('/create', async (req, res) => {
    const data = req.body
    await User.add(data)
    res.send({msg: "User Added"})
})

app.get('/', async (req, res) => {
    const snapshot = await User.get()
    const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    res.send(list)
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