import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { TriangleTaskComponent } from './triangle-task/triangle-task.component';
import { ClassAComponent } from './class-a/class-a.component';
import { ClassBComponent } from './class-b/class-b.component';
import { ClassCComponent } from './class-c/class-c.component';
import { FormsComponent } from './forms/forms.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/forms/register', pathMatch: 'full' },
  // { path: 'departments', component: DepartmentListComponent },
  // { path: 'departments/:id', component: DepartmentDetailComponent },
  // { path: 'employees', component: EmployeeListComponent },
  // { path: "**", component: PageNotFoundComponent }
  // { path: 'a', component: ClassAComponent },
  // { path: 'b', component: ClassBComponent },
  // { path: 'c', component: ClassCComponent },
  {path: 'forms/register', component: FormsComponent},
  {path: 'forms/login', component: LoginComponent}

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
