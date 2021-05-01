import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputVisitorDetailsComponent } from './components/input-visitor-details/input-visitor-details.component';
import { VisitorListComponent } from './components/visitor-list/visitor-list.component';
import { RequestQueueNumberComponent } from './components/request-queue-number/request-queue-number.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'input-visitor', component: InputVisitorDetailsComponent },
  { path: 'request-number/:id', component: RequestQueueNumberComponent },
  { path: 'list-visitor', component: VisitorListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
