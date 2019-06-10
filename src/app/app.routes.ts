import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ChicasComponent } from './components/chicas/chicas.component';
import { UChicaComponent } from './components/uchica/uchica.component';


const APP_ROUTES: Routes = [
    { path: 'inicio', component: HomeComponent },
    { path: 'chicas', component: ChicasComponent },
    { path: 'chica/:id', component:  UChicaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
