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
  itemsPerPage: number = 7;
  searchString: string;
  studentsTable: Student[] = [];
  rawStudentData: Student[] = [];
  title: string = '';
  headElements = ['S.No', 'Name', 'College', 'Year', 'Department', 'email', 'Mobile', 'Action'];
  constructor(private studentService: StudentService, private storageService: StorageService) { }

  ngOnInit(): void {
    this.storageService.studentGet();
    this.studentService.studentChanged
      .subscribe((students: Student[]) => {
        if (students) {
          let convertedData = Object.keys(students).map(key => students[key]); //converting object of object to  arrayu of object
          this.rawStudentData = students;
          this.studentsTable = convertedData;
        }
        else {
          this.rawStudentData = [];
          this.studentsTable = [];
        }
      })
    this.studentsTable = this.studentService.getStudents();
  }

  onCreate() {
    this.title = 'Create';
    this.studentService.createStudent.next(this.title);
  }

  onEdit(student: Student) {
    this.studentService.editStudent.next(student);
  }

  onView(student: Student) {
    this.studentService.studentSelected.next(student);
  }

  onDelete(id: number) {
    if (confirm("Are you sure to delete?")) {
      Object.keys(this.rawStudentData).forEach(index => {
        if (this.rawStudentData[(index)].id === id) {
          this.storageService.studentDelete(index);
        }
      });
    }
  }
}