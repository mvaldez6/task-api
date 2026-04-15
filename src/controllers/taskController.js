import * as taskService from '../services/taskService.js';

export async function getTasks(req, res, next) {
  const { completed } = req.query;
  let completedBool;
  if (completed === 'true') completedBool = true;
  if (completed === 'false') completedBool = false;

  const tasks = await taskService.getAllTasks(completedBool);
  res.json(tasks);
}
export async function createTask(req, res, next) {
  const { title, completed } = req.body;
  const task = await taskService.createTask({ title, completed });
  res.status(201).json(task);
}
