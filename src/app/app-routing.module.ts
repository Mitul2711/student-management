import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentsComponent } from './components/add-students/add-students.component';
import { EditStudentsComponent } from './components/edit-students/edit-students.component';
import { ListStudentsComponent } from './components/list-students/list-students.component';

const routes: Routes = [
  {path: 'add', component: AddStudentsComponent},
  {path: 'edit/:id', component: EditStudentsComponent},
  {path: 'list', component: ListStudentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
