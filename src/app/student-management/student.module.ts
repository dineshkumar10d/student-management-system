import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentManagementComponent } from './student-management.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngb-modal';



@NgModule({
  declarations: [
    StudentManagementComponent,
    StudentDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ModalModule
  ],
  exports: [
    StudentManagementComponent,
    StudentDetailComponent,
    FormsModule,
    ModalModule
  ]
})
export class StudentModule { }