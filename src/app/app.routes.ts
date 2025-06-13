import { Routes } from '@angular/router';
import { AccueilComponent } from './acceuil/acceuil.component';

export const routes: Routes = [
    {path: '', component: AccueilComponent, title: 'Accueil'},
    {path: 'accueil', component: AccueilComponent, title: 'Accueil'}
];
