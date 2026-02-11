import { Component, Output, EventEmitter } from '@angular/core';

import { RouterModule } from '@angular/router';
import { CategoryService } from '../../category.service'; // Adjust the path as necessary


@Component({
  selector: 'app-accueil',
  templateUrl: './acceuil.component.html',
  imports: [RouterModule],
  styleUrls: ['./acceuil.component.css'],
  standalone: true
})
export class AccueilComponent {
@Output() CategoryChange = new EventEmitter<String>();


  selectedCategory: 'info' | 'escalade' = 'info';
  sliderValue = 0;

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categoryService.category$.subscribe(cat =>{
       this.selectedCategory = cat;
      this.sliderValue = cat === 'info' ? 0 : 100;
    }
      );
    
  }

  toggleCategory(category: 'info' | 'escalade') {
    this.selectedCategory = category;
    this.categoryService.setCategory(category);
  }

  onSliderInput(event: Event) {
    this.sliderValue = +(event.target as HTMLInputElement).value;
    this.selectedCategory = this.sliderValue < 50 ? 'info' : 'escalade';
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

}