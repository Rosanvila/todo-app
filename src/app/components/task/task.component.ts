import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html'
})
export class TaskComponent {
  @Input() task!: Task;
  @Output() taskUpdated = new EventEmitter<Task>();

  toggleComplete() {
    this.task.completed = !this.task.completed;
    this.taskUpdated.emit(this.task);
  }
} 