import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HandsTableComponent } from './hands-table/hands-table.component';

const routes: Routes = [
  { path: 'products', component: HandsTableComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
