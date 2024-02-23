import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentsComponent } from './components/add-students/add-students.component';
import { EditStudentsComponent } from './components/edit-students/edit-students.component';
import { LoginStudentsComponent } from './components/login-students/login-students.component';
import { ListStudentsComponent } from './components/list-students/list-students.component';
import { RegistrationStudentsComponent } from './components/registration-students/registration-students.component';

const routes: Routes = [
  {path: 'add', component: AddStudentsComponent},
  {path: 'edit/:id', component: EditStudentsComponent},
  {path: 'login', component: LoginStudentsComponent},
  {path: 'list', component: ListStudentsComponent},
  {path: 'registration', component: RegistrationStudentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
