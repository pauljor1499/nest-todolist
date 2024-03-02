import { Injectable } from '@nestjs/common';
import { TaskModel } from './task.model';

@Injectable()
export class TaskService {
	_tasks: TaskModel[] = [
		{
			id: 0, description: 'Feed the cat', isComplete: false
		},
		{
			id: 1, description: 'Feed the dog', isComplete: false
		},
		{
			id: 2, description: 'Feed the chicken', isComplete: false
		},
	]

	_fetchAllTasks(): TaskModel[] {
		return this._tasks;
	}

	_searchTaskByID(id: number): TaskModel {
		return this._tasks.find(task => task.id == id);
	}

	_deleteTaskByID(id: number): boolean {
		const index = this._tasks.findIndex((task) => task.id == id);
		if (index !== -1) {
			this._tasks.splice(index, 1)
			return true;
		}
	}

	_updateTaskByID(id: number, updatedTask: TaskModel): TaskModel {
		const index = this._tasks.findIndex((task) => task.id == id);
		if (index !== -1) {
			this._tasks.splice(index, 1, updatedTask)
			return this._tasks[index];
		}
	}
}
