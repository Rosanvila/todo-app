import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from '../task/task.component';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskComponent],
  templateUrl: './task-list.component.html'
})
export class TaskListComponent {
  tasks: Task[] = [
    {
      title: 'Test 1',
      description: 'test test test',
      completed: false,
      difficulty: 'moyen',
      experiencePoints: 20,
      dueDate: new Date('2024-04-30')
    },
    {
      title: 'Test 2',
      description: 'test test test',
      completed: true,
      difficulty: 'facile',
      experiencePoints: 10,
      dueDate: new Date("2024-04-25"),
    },
  ];
}
