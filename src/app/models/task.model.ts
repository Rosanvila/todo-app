export interface Task {
  _id?: string;
  title: string;
  description?: string;
  completed: boolean;
  difficulty: 'facile' | 'moyen' | 'difficile';
  experiencePoints: number;
  dueDate?: Date;
  createdAt?: Date;
} 