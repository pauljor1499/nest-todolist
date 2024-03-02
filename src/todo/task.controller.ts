import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskModel } from './task.model';

@Controller('tasks')
export class TaskController {

	constructor(private readonly taskService: TaskService) { }

	@Get()
	getTasks() {
		return this.taskService._fetchAllTasks();
	}

	@Get(':taskID')
	getTaskByID(@Param('taskID') id: number) {
		const task = this.taskService._searchTaskByID(id);
		if (!task) {
			throw new NotFoundException(`Task with ID ${id} not found.`);
		}
		return task;
	}

	@Delete(':taskID')
	deleteTaskByID(@Param('taskID') id: number) {
		const response = this.taskService._deleteTaskByID(id);
		if (!response) {
			throw new NotFoundException(`Task with ID ${id} not found.`);
		}
		return 'Task successfully deleted.';
	}

	@Patch(':taskID')
	updateTaskDescriptionByID(@Param('taskID') id: number, @Body() updatedTask: TaskModel) {
		const response = this.taskService._updateTaskByID(id, updatedTask);
		if (!response) {
			throw new NotFoundException(`Task with ID ${id} not found.`);
		}
		return response;
	}
}

