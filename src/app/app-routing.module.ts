import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DefaultComponent} from './layouts/default/default.component';
import {DashboardComponent} from './modules/dashboard/dashboard.component';
import {PostsComponent} from './modules/posts/posts.component';
import {ApiComponent} from './modules/api/api.component';
import {ApiDetailsComponent} from './modules/api-details/api-details.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [{
      path: '',
      component: DashboardComponent
    },
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: 'api',
        component: ApiComponent
      },
      {
        path: 'api/details/:id',
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
