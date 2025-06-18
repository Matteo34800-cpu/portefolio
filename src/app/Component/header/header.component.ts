import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'app-header',
  standalone: true, 
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] 
})
export class HeaderComponent {
  selectedCategory: 'info' | 'escalade' = 'info';
  menuOpen = false;

  constructor(private categoryService: CategoryService) {
    this.categoryService.category$.subscribe(category => {
      this.selectedCategory = category;
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
