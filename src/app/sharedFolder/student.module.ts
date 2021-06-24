import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngb-modal';
import { StudentManagementComponent } from '../student-management/student-management.component';
import { StudentDetailComponent } from '../student-management/student-detail/student-detail.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    StudentManagementComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ModalModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    HttpClientModule
  ],
  exports: [
    StudentManagementComponent,
    StudentDetailComponent,
    FormsModule,
    ModalModule
  ]
})
export class StudentModule { }