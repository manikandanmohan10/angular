import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { TemplateRefVarComponent } from './template-ref-var/template-ref-var.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { PipesComponent } from './pipes/pipes.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { TriangleTaskComponent } from './triangle-task/triangle-task.component';
import { ClassAComponent } from './class-a/class-a.component';
import { ClassBComponent } from './class-b/class-b.component';
import { ClassCComponent } from './class-c/class-c.component';
import { TriangleService } from './triangle.service';
import { MainComponent } from './main/main.component';
import { ChildComponent } from './main/child/child.component';
import { SubjectComponent } from './subject/subject.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { ObservableComponent } from './observable/observable.component';
import { ServiceComponent } from './service/service.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { FormsComponent } from './forms/forms.component';
import { LoginComponent } from './login/login.component';
import { ClockComponent } from './clock/clock.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EventBindingComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    TemplateRefVarComponent,
    TwoWayBindingComponent,
    StructuralDirectivesComponent,
    ComponentInteractionComponent,
    PipesComponent,
    DepartmentListComponent,
    EmployeeListComponent,
    PageNotFoundComponent,
    DepartmentDetailComponent,
    TriangleTaskComponent,
    ClassAComponent,
    ClassBComponent,
    ClassCComponent,
    MainComponent,
    ChildComponent,
    SubjectComponent,
    ComponentAComponent,
    ComponentBComponent,
    ObservableComponent,
    ServiceComponent,
    LifecycleHooksComponent,
    FormsComponent,
    LoginComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService, TriangleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
