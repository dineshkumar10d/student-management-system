import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { StudentService } from './student.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  url: string = 'https://student-management-syste-5e87d-default-rtdb.firebaseio.com/students/';
  urlDev: string = 'https://development-student-default-rtdb.firebaseio.com/students/';
  constructor(private http: HttpClient, private studentService: StudentService) { }

  studentPost(student: Student) {
    student.id = Math.floor(1000 + Math.random() * 9000);
    const url = this.urlDev + '.json';
    this.http.post(url, student)
      .subscribe((response) => {
        if (response) {
          this.studentGet();
        }
      });
  }

  studentGet() {
    const url = this.urlDev + '.json';
    return this.http.get<Student[]>(url)
      .subscribe((students) => {
        this.studentService.setStudents(students);
      })
  }

  studentPut(id: string, student: Student) {
    const url = this.urlDev + id + '.json';
    this.http.put(url, student, {
    }).subscribe((response) => {
      if (response) {
        this.studentGet();
      }
    });
  }

  studentDelete(id: string) {
    const url = this.urlDev + id + '.json';
    this.http.delete(url)
      .subscribe(() => {
        this.studentGet();
      });
  }
}
