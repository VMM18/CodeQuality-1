import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from 'src/navbar/navbar.component';
import { AddUserComponent } from 'src/registerUser/add-user.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: NavbarComponent },
  { path: 'addUser', component:AddUserComponent },
  { path: 'user', component:UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
