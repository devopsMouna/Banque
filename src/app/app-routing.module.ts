import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { NewClientComponent } from './new-client/new-client.component';

const routes: Routes = [
  {path:"client",component:ClientComponent},
  {path:"newclient", component:NewClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
