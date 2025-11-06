import { Routes } from '@angular/router'; 
import { Content } from './content/content';
import { Sobre } from './sobre/sobre';
import { Localizacao } from './localizacao/localizacao';
import { Reservas } from './reservas/reservas';
import { Faleconosco } from './faleconosco/faleconosco';
import { Galeria } from './galeria/galeria';
export const routes: Routes = [
    { path: '', component: Content},
    { path: 'sobre', component: Sobre},
    { path: 'localizacao', component: Localizacao},
    { path: 'reservas', component: Reservas},
    { path: 'faleconosco', component: Faleconosco},
    { path: 'galeria', component: Galeria}
];
