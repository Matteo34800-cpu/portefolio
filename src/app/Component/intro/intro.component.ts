import { Component, EventEmitter, Host, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-intro',
  imports: [],
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
})
export class IntroComponent {
  @Output() introEnd = new EventEmitter<void>();

  finishIntro() {
    this.introEnd.emit();
  }
  
  @HostListener('window:scroll', [])
  onScroll() {
    this.finishIntro();
  }

}
