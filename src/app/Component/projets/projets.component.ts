import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from '../../category.service';
import { CommonModule } from '@angular/common';
import { Output, EventEmitter } from '@angular/core';
import { ProjectCardComponent } from '../../project-card/project-card.component';
@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css'],
  standalone: true,
  imports: [CommonModule, ProjectCardComponent]
})
export class ProjetsComponent implements OnInit {
  projets: any[] = [];
  selectedCategory: 'info' | 'escalade' = 'info';
  @Output() CategoryChange = new EventEmitter<String>();
  sliderValue = 0;
  selectedProjet: any = null;


  constructor(private http: HttpClient, private categoryService: CategoryService) {}

  ngOnInit() {
    this.http.get<any[]>('assets/jsons/projets.json').subscribe(data => {
      this.projets = data;
    });
    this.categoryService.category$.subscribe(cat => this.selectedCategory = cat);
  }

  onSliderInput(event: Event) {
    this.sliderValue = +(event.target as HTMLInputElement).value;
    this.selectedCategory = +(event.target as HTMLInputElement).value < 50 ? 'info' : 'escalade';
    this.categoryService.setCategory(this.selectedCategory);
  }

  onSliderChange(event: Event) {
    const value = +(event.target as HTMLInputElement).value;
    const snapTo = value < 50 ? 0 : 100;
    this.sliderValue = snapTo;
    this.selectedCategory = snapTo === 0 ? 'info' : 'escalade';
    this.categoryService.setCategory(this.selectedCategory);
    this.CategoryChange.emit(snapTo === 0 ? 'info' : 'escalade');
  }
  get projetsFiltres() {
    return this.projets.filter(p => p.type === this.selectedCategory);
  }

  openProjet(projet: any) {
    this.selectedProjet = projet;
  }

  closeProjet() {
    this.selectedProjet = null;
  }
}
