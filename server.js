const express =require('express')
const cors = require('cors')
const port = 5000

const app = express()
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.status(400).send('hello vsljv')
    
})

app.listen(port,()=>{
    console.log(`server connected successfully at ${port}`)
})


