import { Injectable } from '@nestjs/common';
import { TaskModel } from './task.model';

@Injectable()
export class TaskService {
	_tasks: TaskModel[] = [
		{
			id: 0, name: 'Feed the cat', isCompleted: false
		},
		{
			id: 1, name: 'Feed the dog', isCompleted: false
		},
		{
			id: 2, name: 'Feed the chicken', isCompleted: false
		},
	]

	_fetchAllTasks(): TaskModel[] {
		return this._tasks;
	}

	_createNewTask(newTask: TaskModel): boolean {
		this._tasks.push(newTask);
		return true;
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
