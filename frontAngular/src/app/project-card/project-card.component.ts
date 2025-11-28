import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
  standalone: true,
  imports: [CommonModule] 
})
export class ProjectCardComponent {
  @Input() type!: 'info' | 'escalade';
  @Input() titre!: string;
  @Input() description!: string;
}
