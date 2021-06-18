import { Component, OnInit } from '@angular/core';
import { DialogService } from '../sharedFolder/dialog.service';
import { Student } from '../sharedFolder/student.model';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.css']
})
export class StudentManagementComponent implements OnInit {
  students: Student[] = [];
  title: string ='';
  headElements = ['ID', 'Name', 'College', 'Year', 'Department', 'email', 'Mobile', 'Action'];
  constructor(private studentService: StudentService, private dialogService: DialogService) { }

  ngOnInit(): void {
    this.studentService.studentChanged
      .subscribe((students: Student[]) => {
        this.students = students;
      })
    this.students = this.studentService.getStudents();
  }

  onCreate(){
    this.title = 'Create';
    this.dialogService.dialog.next(this.title);
  }

  onEdit(index: number) {
    this.title = 'Edit';
    this.dialogService.dialog.next(this.title);  
  }

  onView(index: number) {
    this.title = 'View';
    this.dialogService.dialog.next(this.title);
  }

  onDelete(index: number) {
    this.studentService.deleteStudent(index)
  }

}
