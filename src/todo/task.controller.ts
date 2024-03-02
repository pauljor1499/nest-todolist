/* eslint-disable prefer-const */
import { Controller, Delete, Get, NotFoundException, Param, } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {

	constructor(private readonly taskService: TaskService) { }

	@Get()
	getTasks() {
		return this.taskService.findAllTasks();
	}

	@Get(':taskID')
	getTaskByID(@Param('taskID') id: number) {
		let task = this.taskService.findTaskByID(id);
		if (!task) {
			throw new NotFoundException(`Task with ID ${id} not found.`)
		}
		return task;
	}

	@Delete(':taskID')
	deleteTaskByID(@Param('taskID') id: number) {
		return this.taskService.deleteTaskByID(id);
	}
}
