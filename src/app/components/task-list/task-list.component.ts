import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { TaskComponent } from '../task/task.component';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskComponent, CommonModule, NgIf],
  templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit {
    tasks: Task[] = [];
    loading = false;
    error: string | null = null;

    constructor(private taskService: TaskService) {}
    
    ngOnInit() {
      this.loadTasks();
    }

    loadTasks() {
      this.loading = true;
      this.taskService.getTasks().subscribe({
        next: (tasks) => {
          this.tasks = tasks;
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Erreur lors du chargement';
          this.loading = false;
        }
      });
    }

    onTaskUpdate(task: Task) {
      this.taskService.updateTask(task).subscribe({
        next: (updatedTask) => {
          this.tasks = this.tasks.map(t => 
            t._id === updatedTask._id ? updatedTask : t
          );
        },
        error: (err) => {
          this.error = 'Erreur lors de la mise à jour';
        }
      });
    }
}
