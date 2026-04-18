import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { List } from './pages/list/list';
import { Form } from './pages/form/form';
import { Detail } from './pages/detail/detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'centers', component: List },
  { path: 'centers/new', component: Form },
  { path: 'centers/:id', component: Detail },
  { path: 'centers/:id/edit', component: Form }
];