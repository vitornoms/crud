const express = require('express')
const cors = require('cors')
require('dotenv').config()
const swaggerUi = require("swagger-ui-express")
const swaggerJsDoc = require("swagger-jsdoc")

const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "API de Tarefas",
            version: "1.0.0",
            description: "API CRUD para gerenciar tarefas",
        },
        servers: [{ url: "http://localhost:3003"}],
    },
    apis: [`${__dirname}/routes/*.js`], // caminho para as rotas
};

const app = express()
const port = process.env.PORT || 1903
const taskRouter = require('./routes/tasksRouter');
const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use(express.json())
app.use(cors())
app.use('/api', taskRouter)

app.listen(port, () => console.log(`Run on port ${port}!`))