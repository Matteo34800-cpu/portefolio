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


bioInfo = 'Depuis petit, j’ai toujours voulu comprendre comment fonctionnent les choses, démonter, explorer, coder. Aujourd’hui étudiant en BUT Informatique à l’IUT de Montpellier-Sète, je donne vie à cette passion à travers des projets concrets : j’ai développé un simulateur du jeu 421 sans programmation orientée objet, puis un projet Pokémon structuré avec JavaFX et de la POO. J’aime créer des applications utiles, comme ce portfolio en Angular, ou encore déployer des serveurs pour les faire fonctionner (Apache, MySQL, serveur mail). Ce que je préfère ? Travailler en équipe, chercher des solutions, comprendre les systèmes dans leur ensemble, et faire que tout fonctionne, proprement.';

bioEscalade = 'Je pratique l’escalade depuis 8 ans. Ce sport est pour moi une véritable source de liberté et de dépassement de soi. Je suis professeur d’escalade bénévole dans une association, où j’encadre un groupe d’adolescents chaque mardi. Ce que j’aime par-dessus tout, c’est transmettre ma passion, aider les jeunes à progresser et à prendre confiance en eux. L’escalade me permet de me sentir vivant, pleinement engagé. Mais ce que je ressens en partageant ces moments avec le groupe que j’encadre est tout simplement indescriptible.';}
