import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: '/dashboard/requests-dashboard' },
  {
    path: 'dashboard',
    component: AppComponent,
    children: [
      { path: "", pathMatch: 'full', redirectTo: '/dashboard/requests-dashboard' },
      {
        path: 'requests-dashboard',
        component: AppComponent
      },
      {
        path: 'woe-dashboard',
        component: AppComponent
      }
    ]
  },
  {
    path: 'master-data',
    component: AppComponent,
    children: [
      {
        path: 'item-master',
        component: AppComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AppComponent,
  },
  {
    path: 'equipment-management',
    component: AppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
