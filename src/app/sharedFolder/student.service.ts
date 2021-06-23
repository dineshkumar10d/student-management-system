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
  index: number;

  private students: Student[] = [];

  constructor() { }

  setStudents(student: Student[]) {
    if (student) {
      this.students = student;
      this.studentChanged.next(this.students.slice());
    }
  }

  getStudents() {
    return this.students;
  }

  addStudent(student: Student) {
    student.id = Math.floor(1000 + Math.random() * 9000);
    this.students.push(student);
    this.studentChanged.next(this.students.slice());
  }

  getStudent(id: number) {
    this.index = this.students.findIndex(student => student.id === id);
    return this.students[this.index];
  }

  updateStudent(id: number, newStudent: Student) {
    this.index = this.students.findIndex(student => student.id === id);
    this.students[this.index] = newStudent;
    this.studentChanged.next(this.students.slice());
  }

  deleteStudent(id: number) {
    this.index = this.students.findIndex(student => student.id === id);
    this.students.splice(this.index, 1);
    this.studentChanged.next(this.students.slice());
  }
}
