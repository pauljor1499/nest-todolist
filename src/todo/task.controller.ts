import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskModel } from './task.model';

@Controller('tasks')
export class TaskController {

	constructor(private readonly taskService: TaskService) { }

	@Get()
	getTasks() {
		return this.taskService._fetchAllTasks();
	}

	@Post()
	create(@Body() newTask: TaskModel) {
		const response = this.taskService._createNewTask(newTask);
		if (response) {
			return 'Task successfully created.';
		}
		throw new NotFoundException(`Task with body ${newTask} not found.`);
	}

	@Get(':taskID')
	getTaskByID(@Param('taskID') id: number) {
		const response = this.taskService._searchTaskByID(id);
		if (response) {
			return response;
		}
		throw new NotFoundException(`Task with ID ${id} not found.`);
	}

	@Delete(':taskID')
	deleteTaskByID(@Param('taskID') id: number) {
		const response = this.taskService._deleteTaskByID(id);
		if (response) {
			return 'Task successfully deleted.';
		}
		throw new NotFoundException(`Task with ID ${id} not found.`);

	}

	@Patch(':taskID')
	updateTaskByID(@Param('taskID') id: number, @Body() updatedTask: TaskModel) {
		const response = this.taskService._updateTaskByID(id, updatedTask);
		if (response) {
			return 'Task successfully updated.';
		}
		throw new NotFoundException(`Task with ID ${id} not found.`);

	}
}

