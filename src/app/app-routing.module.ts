import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SendRequestComponent } from './components/send-request/send-request.component';

const routes: Routes = [
  {path: '', component: SendRequestComponent, title: 'Request'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
