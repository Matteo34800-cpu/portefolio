import { Routes } from '@angular/router';
import { AccueilComponent } from './Component/acceuil/acceuil.component';
import { AppComponent } from './app.component';
import { IntroComponent } from './Component/intro/intro.component';
import { animation } from '@angular/animations';
import { ProjetsComponent } from './Component/projets/projets.component';
import { ContactComponent } from './Component/contact/contact.component';
export const routes: Routes = [
    {path: '', component: IntroComponent, title: 'Main', data:{animation: 'introPage'}},
    {path: 'intro', component: IntroComponent, title: 'Intro', data:{animation: 'introPage'}},
    {path: 'accueil', component: AccueilComponent, title: 'Accueil', data:{animation: 'accueilPage'}},
    {path: 'projets', component: ProjetsComponent, title: 'Projets', data:{animation: 'projetsPage'}},
    {path: 'contact', component: ContactComponent, title: 'Contact', data:{animation: 'contactPage'}},
];
