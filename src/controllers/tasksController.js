const connection = require('../config/db');

async function listTasks(request, response) {
  let query = "SELECT * FROM tasks"

  connection.query(query, (err, results) => {
    try {
      if (results) {
        response.status(200).json({
          success: true,
          message: 'Sucesso!',
          data: results
        });
      } else {
        response
          .status(400)
          .json({
            success: false,
            message: `Sem sucesso!`,
            query: err.sql,
            sqlMessage: err.sqlMessage
          });
      }
    } catch (e) {
      response.status(400).json({
        succes: false,
        message: "Ocorreu um erro. Não foi possível realizar sua requisição!",
        query: err.sql,
        sqlMessage: err.sqlMessage
      })
    }
  });
}

async function storeTask(request, response) {
  const params = Array(
    request.body.description
  )

  const query = 'INSERT INTO tasks(description) VALUES(?)'

  connection.query(query, params, (err, results) => {
    try {
      if (results) {
        response
          .status(201)
          .json({
            success: true,
            message: `Sucesso!`,
            data: results
          });
      } else {
        response
          .status(400)
          .json({
            success: false,
            message: `Sem sucesso!`,
            query: err.sql,
            sqlMessage: err.sqlMessage
          });
      }
    } catch (e) {
      response.status(400).json({
        succes: false,
        message: "Ocorreu um erro!",
        query: err.sql,
        sqlMessage: err.sqlMessage
      });
    }
  });
}

async function updateTask(request, response) {
  const params = Array(
    request.body.description,    
    request.params.id 
  )

  const query = "UPDATE tasks SET description = ? WHERE id = ?"  

  connection.query(query, params, (err, results) => {
    try {
      if (results) {
        response
          .status(200)
          .json({
            success: true,
            message: `Sucesso!`,
            data: results
          });
      } else {
        response
          .status(400)
          .json({
            success: false,
            message: `Sem sucesso!`,
            query: err.sql,
            sqlMessage: err.sqlMessage
          });
      }
    } catch (e) {       
      response.status(400).json({
        succes: false,
        message: "Ocorreu um erro!",
        query: err.sql,
        sqlMessage: err.sqlMessage
      });
    }
  });
}

async function deleteTask(request, response) {  
  const params = Array(
    request.params.id
  )

  const query = "DELETE FROM tasks WHERE id = ?"

  connection.query(query, params, (err, results) => {
    try {
      if (results) {
        response
          .status(200)
          .json({
            success: true,
            message: `Sucesso!`,
            data: results
          });
      } else {
        response
          .status(400)
          .json({
            success: false,
            message: `Sem sucesso!`,
            query: err.sql,
            sqlMessage: err.sqlMessage
          });
      }
    } catch (e) { 
      response.status(400).json({
        succes: false,
        message: "Ocorreu um erro!",
        query: err.sql,
        sqlMessage: err.sqlMessage
      });
    }
  });
}

module.exports = {
  listTasks,
  storeTask,
  updateTask,
  deleteTask
}