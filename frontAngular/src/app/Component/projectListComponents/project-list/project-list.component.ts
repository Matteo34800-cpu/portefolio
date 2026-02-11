import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../../../project-card/project-card.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  standalone: true,
  imports: [CommonModule, ProjectCardComponent]
})
export class ProjectListComponent {
  @Input() projets: any[] = [];
  @Output() projetClick = new EventEmitter<any>();

  onProjetClick(projet: any) {
    this.projetClick.emit(projet);
  }
}