import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngb-modal';
import { StudentManagementComponent } from '../student-management/student-management.component';
import { StudentDetailComponent } from '../student-management/student-detail/student-detail.component';


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