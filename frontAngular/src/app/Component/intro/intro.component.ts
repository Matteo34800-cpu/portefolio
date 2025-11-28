import { Component, EventEmitter, Host, HostListener, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-intro',
  imports: [],
  standalone: true,
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
})
export class IntroComponent {
  constructor(private router: Router) { }

  finishIntro() {
    this.router.navigate(['/accueil']);
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.finishIntro();
  }

}
