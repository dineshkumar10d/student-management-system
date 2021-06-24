import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Student } from './student.model';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  createStudent = new Subject<any>();
  studentSelected = new Subject<Student>();
  editStudent = new Subject<Student>();
  studentChanged = new Subject<Student[]>();
  index: number;

  private students: Student[] = [];

  constructor() { }

  setStudents(student: Student[]) {
      this.students = student;
      this.studentChanged.next(this.students);
  }

  getStudents() {
    return this.students;
  }
}
