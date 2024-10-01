const router = require('express').Router();

const {
  listTasks,
  storeTask,
  updateTask,
  deleteTask
} = require('../controllers/tasksController')

router.get('/tasks/list', listTasks);
router.post('/task/register', storeTask);
router.put('/task/:id', updateTask);
router.delete('/task/:id', deleteTask);

module.exports = router;