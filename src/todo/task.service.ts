import { Injectable } from '@nestjs/common';
import { TaskModel } from './task.model';

@Injectable()
export class TaskService {
	_tasks: TaskModel[] = [
		{
			id: 0, description: 'Feed the cat'
		},
		{
			id: 1, description: 'Feed the dog'
		},
		{
			id: 2, description: 'Feed the chicken'
		},
	]

	findAllTasks(): TaskModel[] {
		return this._tasks;
	}

	findTaskByID(id: number): TaskModel {
		return this._tasks.find(task => task.id == id);
	}

	deleteTaskByID(id: number): string {
		const index = this._tasks.findIndex((task) => task.id == id);
		if (index !== -1) {
			this._tasks.splice(index, 1)
		}
		return 'Task successfully deleted.';
	}
}
