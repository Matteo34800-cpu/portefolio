import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-slider',
  templateUrl: './category-slider.component.html',
  styleUrls: ['./category-slider.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CategorySliderComponent {
  @Input() selectedCategory: 'info' | 'escalade' = 'info';
  @Output() categoryChange = new EventEmitter<'info' | 'escalade'>();

  sliderValue = 0;

  ngOnInit() {
    this.sliderValue = this.selectedCategory === 'info' ? 0 : 100;
  }

  ngOnChanges() {
    this.sliderValue = this.selectedCategory === 'info' ? 0 : 100;
  }

  onSliderInput(event: Event) {
    this.sliderValue = +(event.target as HTMLInputElement).value;
  }

  onSliderChange(event: Event) {
    const value = +(event.target as HTMLInputElement).value;
    const snapTo = value < 50 ? 0 : 100;
    this.sliderValue = snapTo;
    const category = snapTo === 0 ? 'info' : 'escalade';
    this.categoryChange.emit(category);
  }
}