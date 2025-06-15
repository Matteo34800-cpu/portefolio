import { Routes } from '@angular/router';
import { AccueilComponent } from './Component/acceuil/acceuil.component';
import { AppComponent } from './app.component';
import { IntroComponent } from './Component/intro/intro.component';
import { animation } from '@angular/animations';

export const routes: Routes = [
    {path: '', component: IntroComponent, title: 'Main', data:{animation: 'introPage'}},
    {path: 'intro', component: IntroComponent, title: 'Intro', data:{animation: 'introPage'}},
    {path: 'accueil', component: AccueilComponent, title: 'Accueil', data:{animation: 'accueilPage'}},
];
