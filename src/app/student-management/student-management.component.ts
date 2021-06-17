import { Component, OnInit } from '@angular/core';
import { Student } from '../sharedFolder/student.model';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.css']
})
export class StudentManagementComponent implements OnInit {

  students: Student[] = [

  ];

  headElements = ['ID', 'Name', 'College', 'Year', 'Department', 'Semester', 'Mobile', 'Action'];
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.studentChanged
      .subscribe((students: Student[]) => {
        this.students = students;
      })
    this.students = this.studentService.getStudents();
  }

  onEdit(index: number) {
    console.log('this is button to Edit index:' + index);
  }

  onView(index: number) {
    console.log('this is button to View:' + index);
  }

  onDelete(index: number) {
    this.studentService.deleteStudent(index)
    console.log('this is button to Delete:' + index);
    //this.elements.splice(index,1);
  }

}
