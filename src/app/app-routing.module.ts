import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DefaultComponent} from './layouts/default/default.component';
import {DashboardComponent} from './modules/dashboard/dashboard.component';
import {ApiComponent} from './modules/api/api.component';
import {ApiDetailsComponent} from './modules/api-details/api-details.component';
import {SectorComponent} from './modules/sector/sector.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [{
      path: '',
      component: DashboardComponent
    },
      {
        path: 'sector',
        component: SectorComponent
      },
      {
        path: 'api',
        component: ApiComponent
      },
      {
        path: 'api/details/:id/:sector',
        component: ApiDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
