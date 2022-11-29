//Extension VSC node-snippets v1.3.3


//IMPORT EXPRESS
const { render } = require('ejs')
const express = require('express')
const { Profiler } = require('react')
const router = express.Router()
/* const productsRouter = require('./routes/api') */
// const productsRouterDos = require('./routes/productos') 

const app = express()

//PUERTO
const port  = 3000
//app set
app.set('port', process.env.PORT || port)
app.set('views', './views')
app.set('view engine', 'ejs' )
// app use
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//SERVER
const server = app.listen(port, ()=>{
    console.log("server online http://localhost:" + app.get("port"))
})

// data
let data = [
    {
        tittle: "Nike air max",
        price: 200,
        thumbnail: "https://essential.vtexassets.com/arquivos/ids/467758/316-0124_1.jpg?v=637672177702770000",
        id: 1
    },{
        tittle: "Nike air jordan",
        price: 330,
        thumbnail: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/953f8c77-48ab-4583-b040-c04a3a93ab32/fecha-de-lanzamiento-de-las-ajko-1-chicago.jpg",
        id: 2
    } 
]
let nuevaData =[]

app.get('/', (req, res)=>{
    res.render('home',{
        productos: data
    })
})
app.get('/productos', (req, res)=>{
    res.render('products',{
        nuevaData
    })
})
 app.post('/products', (req,res)=>{

   nuevaData.push(req.body) 
    res.redirect('/productos')
}) 




