import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Student } from '../sharedFolder/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentSelected = new Subject<Student>();
  studentEdited = new Subject<Student>();
  studentChanged = new Subject<Student[]>();

  private students: Student[] = [
    {
      id: 1,
      name: 'Praveen',
      fatherName: 'pampaiyan',
      yearOfJoin: 2024,
      email: 'praveen@gmail.com',
      address: 'sivaganga',
      age: 18,
      firstGraduate: false, 
      collegeName: 'UCET',
      year: 1, 
      department: 'CSE',
      mobile:'0000000000'
    },
      {
      id: 2,
      name: 'DineshKumar',
      fatherName: 'pampaiyan',
      yearOfJoin: 2020,
      email: 'dinesh@gmail.com',
      address: 'sivaganga',
      age: 22,
      firstGraduate: false,  
      collegeName: 'UCET',
      year: 4, 
      department: 'IT',
      mobile:'0000000000'
      },
      {
      id: 3,
      name: 'Ajith', 
      fatherName: 'Kuna',
      yearOfJoin: 2022,
      email: 'ajith@gmail.com',
      address: 'sivaganga',
      age: 21,
      firstGraduate: false, 
      collegeName: 'UCEV',
      year: 3, 
      department: 'ECE',
      mobile:'0000000000'
      }
  ];

  constructor() { }

  getStudents(){
    return this.students;
  }
  addStudent(student: Student) {
    this.students.push(student);
    this.studentChanged.next(this.students.slice());
  }

  getStudent(index: number) {
    return this.students[index];
  }

  updateStudent(index: number, newStudent: Student) {
    this.students[index] = newStudent;
    this.studentChanged.next(this.students.slice());
  }

  deleteStudent(index: number) {
    this.students.splice(index, 1);
    this.studentChanged.next(this.students.slice());
  }
}
