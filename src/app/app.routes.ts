import { Routes } from '@angular/router';
import { AccueilComponent } from './Component/acceuil/acceuil.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: '', component: AccueilComponent, title: 'Main'},
    {path: 'accueil', component: AccueilComponent, title: 'Accueil'}
];
