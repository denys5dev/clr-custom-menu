import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: '/dashboard' },
  {
    path: 'dashboard',
    children: [
      { path: "", pathMatch: 'full', redirectTo: '/dashboard/requests-dashboard' },
      {
        path: 'requests-dashboard',
        component: HomeComponent
      },
      {
        path: 'woe-dashboard',
        component: HomeComponent
      }
    ]
  },
  {
    path: 'master-data',
    children: [
      { path: "", pathMatch: 'full', redirectTo: '/master-data/item-master' },
      {
        path: 'item-master',
        component: HomeComponent
      }
    ]
  },
  {
    path: 'admin',
    children: [
      {
        path: 'admin-master',
        component: HomeComponent
      }
    ]
  },
  {
    path: 'equipment-management',
    children: [
      {
        path: 'equipment-master',
        component: HomeComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
