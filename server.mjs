import express from 'express';

const app = express()
const port = 3000

app.get('/hello', (req, res) => {
    console.log(`${req.ip} is saying hello`)
    res.send('Hello User')
})
app.get('/bye', (req, res) => {
    console.log(`${req.ip} is saying bye`)
    res.send('bye bye user')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})