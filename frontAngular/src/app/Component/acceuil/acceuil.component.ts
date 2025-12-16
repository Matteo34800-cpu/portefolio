import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../category.service'; // Adjust the path as necessary


@Component({
  selector: 'app-accueil',
  templateUrl: './acceuil.component.html',
  imports: [CommonModule],
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


bioInfo = "Bonjour, je m'appelle Matteo Melandri, j’ai 19 ans et je suis actuellement en BUT 2 Informatique. Durant mon alternance, j’ai eu l’occasion de travailler sur divers outils et technologies tels que Angular et Git, et de développer mes compétences en gestion de projets en tant que SCRUM Master d’une équipe de développement web. \n Passionné par le développement et les nouvelles technologies, je m’investis pleinement dans chaque projet et aime relever de nouveaux défis. Mon objectif est de continuer à apprendre et à acquérir de l’expérience, tout en contribuant à des projets innovants et structurants."

bioEscalade = 'Je pratique l’escalade depuis 8 ans. Ce sport est pour moi une véritable source de liberté et de dépassement de soi. Je suis professeur d’escalade bénévole dans une association, où j’encadre un groupe d’adolescents chaque mardi. Ce que j’aime par-dessus tout, c’est transmettre ma passion, aider les jeunes à progresser et à prendre confiance en eux. L’escalade me permet de me sentir vivant, pleinement engagé. Mais ce que je ressens en partageant ces moments avec le groupe que j’encadre est tout simplement indescriptible.';}
