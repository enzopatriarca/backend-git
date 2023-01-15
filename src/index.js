const express = require('express')
const axios = require('axios');
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())
app.get('/',(req,res) =>{
    'Enzo Patriarca apirest(nodejs)'
})
app.get('/api/list_users/:number?',(req,res)=>{
    const parametro = req.params['number'];
    var aux = ''
    
    if ( req.params['number'] == undefined) {
        const url = `https://api.github.com/users`
    }else{
        aux = parametro.replace(':','')
    }
    const number = aux
    const url = `https://api.github.com/users?since=${number}`
    // console.log(number)
    axios.get(url)
        .then(response => {
            return res.status(201).json(response.data)
        })
        .catch(error => {
            console.log(error);
    })
})



app.get('/api/user_info/:username',(req,res) =>{
    const parametro = req.params['username'];
    const username = parametro.replace(':','')
    var url = `https://api.github.com/users/${username}`
    axios.get(url)
            .then(response => {
                // console.log(response.data.url);
                return res.status(201).json(response.data)
                // console.log(response.data);
            })
            .catch(error => {
                console.log(error);
        
    })
    
})


app.get('/api/user_repos/:username',(req,res)=>{
    const parametro = req.params['username'];
    const username = parametro.replace(':','')
    var url = `https://api.github.com/users/${username}/repos`
    axios.get(url)
        .then(response => {
            return res.status(201).json(response.data)
        })
        .catch(error => {
        console.log(error);
    })
})

const port = process.env.PORT || 3333

app.listen(port,()=> console.log(`Server running on port: ${port}!`))