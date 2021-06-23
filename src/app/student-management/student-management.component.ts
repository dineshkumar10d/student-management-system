import { Component, OnInit } from '@angular/core';
import { StorageService } from '../sharedFolder/storage.service';
import { Student } from '../sharedFolder/student.model';
import { StudentService } from '../sharedFolder/student.service';

@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.css']
})
export class StudentManagementComponent implements OnInit {
  currentPage: number = 1;
  searchString: string;
  students: Student[] = [];
  title: string = '';
  headElements = ['S.No', 'Name', 'College', 'Year', 'Department', 'email', 'Mobile', 'Action'];
  constructor(private studentService: StudentService, private storageService: StorageService) { }

  ngOnInit(): void {
    this.storageService.fetchStudents();
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

  onEdit(id: number) {
    this.studentService.editStudent.next(id);
  }

  onView(id: number) {
    this.studentService.studentSelected.next(id);
  }

  onDelete(id: number) {
    if (confirm("Are you sure to delete?"))
      this.studentService.deleteStudent(id);
      this.storageService.storeStudents();
  }
}