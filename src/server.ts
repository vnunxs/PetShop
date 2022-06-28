import express from 'express'
import dotenv from 'dotenv'
import mustache from 'mustache-express'
import path from 'path'
import mainRoutes from './routes/index'

//dotenv para a nossa porta 
dotenv.config()

//configuração do servidor
const server = express()

//configuração do mustache
server.set('view engine','mustache')
//diretório em que colocarmos nossos arquivos do mustache
server.set('views',path.join(__dirname,'views'))
server.engine('mustache',mustache())
//definir o diretorio da public
server.use(express.static(path.join(__dirname,'../public')))

//usando a rota
server.use(mainRoutes)

//criando a pagina nao encontrada
server.use((req,res)=>{
    res.render('pages/404')
})


//habilitando o servidor
server.listen(process.env.PORT)




