import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './components/task-list/task-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TaskListComponent],
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'todo-app';
}
