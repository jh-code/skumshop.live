import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: './routes/home/home.module#HomeModule',
    pathMatch: 'full'
  },
  {
    path: 'forum',
    loadChildren: './routes/forum/forum.module#ForumModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
