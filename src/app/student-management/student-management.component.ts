import { Component, OnInit } from '@angular/core';
import { Student } from '../sharedFolder/student.model';
import { StudentService } from '../sharedFolder/student.service';

@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.css']
})
export class StudentManagementComponent implements OnInit {
  searchString: string;
  students: Student[] = [];
  title: string = '';
  headElements = ['S.No', 'Name', 'College', 'Year', 'Department', 'email', 'Mobile', 'Action'];
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.studentChanged
      .subscribe((students: Student[]) => {
        this.students = students;
      })
    this.students = this.studentService.getStudents();
  }

  onCreate() {
    this.title = 'Create';
    this.studentService.createStudent.next(this.title);
  }

  onEdit(index: number) {
    this.studentService.editStudent.next(index);
  }

  onView(index: number) {
    this.studentService.studentSelected.next(index);
  }

  onDelete(index: number) {
    if (confirm("Are you sure to delete?"))
      this.studentService.deleteStudent(index);
  }

  onSearch(table: any) {
    console.log(table);
  }
}