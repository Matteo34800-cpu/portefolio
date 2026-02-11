import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ProjectModalComponent {
  @Input() selectedProjet: any = null;
  @Output() closeModal = new EventEmitter<void>();

  get selectedProjetLangage(): any[] {
    return this.selectedProjet ? this.selectedProjet.langages : [];
  }

  onClose() {
    this.closeModal.emit();
  }
}