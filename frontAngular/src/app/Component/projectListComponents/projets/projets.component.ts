import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from '../../../category.service';
import { CommonModule } from '@angular/common';
import { Output, EventEmitter } from '@angular/core';
import { CategorySliderComponent } from '../category-slider/category-slider.component';
import { ProjectListComponent } from '../project-list/project-list.component';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css'],
  standalone: true,
  imports: [CommonModule, CategorySliderComponent, ProjectListComponent, ProjectModalComponent]
})
export class ProjetsComponent implements OnInit {
  projets: any[] = [];
  selectedCategory: 'info' | 'escalade' = 'info';
  @Output() CategoryChange = new EventEmitter<String>();
  selectedProjet: any = null;

  constructor(private http: HttpClient, private categoryService: CategoryService) { }

  ngOnInit() {
    this.http.get<any[]>('assets/jsons/projets.json').subscribe(data => {
      this.projets = data;
    });
    this.categoryService.category$.subscribe(cat => {
      this.selectedCategory = cat;
    });
  }

  onCategoryChange(category: 'info' | 'escalade') {
    this.categoryService.setCategory(category);
    this.CategoryChange.emit(category);
  }

  get projetsFiltres() {
    return this.projets.filter(p => p.type === this.selectedCategory);
  }

  onProjetClick(projet: any) {
    this.selectedProjet = projet;
  }

  onCloseModal() {
    this.selectedProjet = null;
  }
}
