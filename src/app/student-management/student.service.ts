import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Student } from '../sharedFolder/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentSelected = new Subject<Student>();
  studentChanged = new Subject<Student[]>();

  private students: Student[] = [
    {
      id: 1,
      name: 'Praveen',
      fatherName: 'pampaiyan',
      yearOfPassedout: 2024,
      email: 'praveen@gmail.com',
      address: 'sivaganga',
      age: 18,
      firstGraduate: false, 
      college: 'UCET',
      year: 1, 
      department: 'CSE',
      semester:2,
      mobile:'0000000000'
    },
      {
      id: 2,
      name: 'DineshKumar',
      fatherName: 'pampaiyan',
      yearOfPassedout: 2020,
      email: 'dinesh@gmail.com',
      address: 'sivaganga',
      age: 22,
      firstGraduate: false,  
      college: 'UCET',
      year: 4, 
      department: 'IT',
      semester: 8,
      mobile:'0000000000'
      },
      {
      id: 3,
      name: 'Ajith', 
      fatherName: 'Kuna',
      yearOfPassedout: 2022,
      email: 'ajith@gmail.com',
      address: 'sivaganga',
      age: 21,
      firstGraduate: false, 
      college: 'UCEV',
      year: 3, 
      department: 'ECE',
      semester:5,
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
