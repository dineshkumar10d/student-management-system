import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Student } from './student.model';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  createStudent = new Subject<any>();
  studentSelected = new Subject<number>();
  editStudent = new Subject<number>();
  studentChanged = new Subject<Student[]>();

  private students: Student[] = [];

  constructor() { }

  getStudents() {
    const student = JSON.parse((localStorage.getItem('studentData')));
    if (student) {
      this.students = student;
    }
    return this.students;
  }

  addStudent(student: Student) {
    this.students.push(student);
    this.studentChanged.next(this.students.slice());
    localStorage.setItem('studentData', JSON.stringify(this.students));
  }

  getStudent(index: number) {
    return this.students[index];
  }

  updateStudent(index: number, newStudent: Student) {
    this.students[index] = newStudent;
    this.studentChanged.next(this.students.slice());
    localStorage.setItem('studentData', JSON.stringify(this.students));
  }

  deleteStudent(index: number) {
    this.students.splice(index, 1);
    this.studentChanged.next(this.students.slice());
    localStorage.setItem('studentData', JSON.stringify(this.students));
  }
}
