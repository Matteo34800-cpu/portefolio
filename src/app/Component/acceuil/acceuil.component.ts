import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-accueil',
  templateUrl: './acceuil.component.html',
  imports: [CommonModule],
  styleUrls: ['./acceuil.component.css'],
  standalone: true
})
export class AccueilComponent {
  selectedCategory: 'info' | 'escalade' = 'info';
  sliderValue = 0;

  toggleCategory(category: 'info' | 'escalade') {
    this.selectedCategory = category;
  }
  onSliderInput(event: Event) {
  this.sliderValue = +(event.target as HTMLInputElement).value
  this.selectedCategory = this.sliderValue < 50 ? 'info' : 'escalade';
  }
  onSliderChange(event: Event) {
  const value = +(event.target as HTMLInputElement).value;
  const snapTo = value < 50 ? 0 : 100;

  this.sliderValue = snapTo;
  this.selectedCategory = snapTo === 0 ? 'info' : 'escalade';
  }


bioInfo = 'Je m\' appelle Matteo, j\'ai 18 ans et je suis étudiant en informatique. J\'aime la programmation, les jeux vidéo et l\'escalade. Je suis passionné par la technologie et j\'aspire à devenir développeur ,j\'aprecie particulièrement le développement le java. Mais ce que je prefere c\'est decouvrir de nouvelles technologies et apprendre de nouvelles compétences.';

bioEscalade = 'Je pratique l\'escalade depuis 8 ans. J\'aime la sensation de liberté que cela procure et le défi que cela représente. Je suis proffeseur d\'escalade benevole dans une association. J\'aime partager ma passion avec les autres et les aider à progresser. L\'escalade est pour moi un moyen de me dépasser et de me sentir vivant. Mais surtout partager mes connaissance avec le groupe d\'ado que j\'encadre c\'est indescriptible.';}
