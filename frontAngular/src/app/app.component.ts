import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate, query, group } from '@angular/animations';
import { HeaderComponent } from './Component/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimation', [
      transition('IntroPage => AccueilPage', [
        // Animation spécifique pour intro -> accueil
        query(':enter, :leave', [
          style({ position: 'fixed', width: '100%' })
        ], { optional: true }),
        group([
          query(':leave', [
            animate('400ms cubic-bezier(.77,0,.18,1)', style({ transform: 'translateY(-100%)', opacity: 0 }))
          ], { optional: true }),
          query(':enter', [
            style({ transform: 'translateY(100%)', opacity: 0 }),
            animate('400ms cubic-bezier(.77,0,.18,1)', style({ transform: 'translateY(0)', opacity: 1 }))
          ], { optional: true })
        ])
      ]),
      transition('AccueilPage => IntroPage', [
        // Animation inverse si tu veux
      ]),
      // Animation générique pour toutes les autres transitions
      transition('* <=> *', [
        query(':enter, :leave', [
          style({ position: 'fixed', width: '100%' })
        ], { optional: true }),
        group([
          query(':leave', [
            animate('400ms cubic-bezier(.77,0,.18,1)', style({ transform: 'translateY(-100%)', opacity: 0 }))
          ], { optional: true }),
          query(':enter', [
            style({ transform: 'translateY(100%)', opacity: 0 }),
            animate('400ms cubic-bezier(.77,0,.18,1)', style({ transform: 'translateY(0)', opacity: 1 }))
          ], { optional: true })
        ])
      ])
    ])
  ]
})
export class AppComponent {
  selectedCategory: 'info' | 'escalade' = 'info'; // Typage strict

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }

  onCategoryChange(newCategory: 'info' | 'escalade') {
    this.selectedCategory = newCategory;
  }
}
