import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StudentManagementComponent } from './student-management/student-management.component';
import { StudentDetailComponent } from './student-management/student-detail/student-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentManagementComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
