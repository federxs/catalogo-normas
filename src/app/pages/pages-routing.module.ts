import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CatalogoNormasComponent} from './catalogo-normas/catalogo-normas.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'inicio',
      component: DashboardComponent,
    },
    {
      path: 'catalogo-normas',
      component: CatalogoNormasComponent,
    },
    {
      path: '',
      redirectTo: 'inicio',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
