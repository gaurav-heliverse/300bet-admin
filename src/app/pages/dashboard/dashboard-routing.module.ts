import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';


const routes: Routes = [
  { path: '', 
    component : DashboardComponent,
     children : [
      { path: 'games', loadChildren: () => import('./games/games.module').then(m => m.GamesModule) },
      { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)},
      { path: 'category', loadChildren: () => import('./category/category.module').then(m => m.CategoryModule) },
      { path: 'content', loadChildren: () => import('./content/content.module').then(m => m.ContentModule) },
      { path: 'dash_board', loadChildren: () => import('./dash-board/dash-board.module').then(m => m.DashBoardModule) },
      { path: 'judges', loadChildren: () => import('./judges/judges.module').then(m => m.JudgesModule) },
      { path: 'emailmarketing', loadChildren: () => import('./emailmarketing/emailmarketing.module').then(m => m.EmailmarketingModule) },
    ]
},

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
