import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccueilComponent } from "./Component/acceuil/acceuil.component";
import { IntroComponent } from "./Component/intro/intro.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IntroComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showIntro = true
  title = 'portfolioMatteo';
  hideIntro() {
    this.showIntro = false;
  }
}
