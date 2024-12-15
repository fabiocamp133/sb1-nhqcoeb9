import { Observable } from '@nativescript/core';

export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export class TasksViewModel extends Observable {
  private _tasks: Task[] = [];

  constructor() {
    super();
    this.initializeTasks();
  }

  private initializeTasks() {
    this._tasks = [
      {
        id: '1',
        title: 'Momento de Gratidão',
        description: 'Compartilhe três coisas que você aprecia em seu parceiro(a)',
        completed: false
      },
      {
        id: '2',
        title: 'Tempo de Qualidade',
        description: 'Planeje uma atividade especial juntos',
        completed: false
      }
    ];
  }

  get tasks(): Task[] {
    return this._tasks;
  }
}