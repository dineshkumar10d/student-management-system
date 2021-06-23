import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { StudentService } from './student.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private http: HttpClient, private studentService: StudentService) { }

  storeStudents(){
    const students = this.studentService.getStudents();
    this.http.put('https://student-management-syste-5e87d-default-rtdb.firebaseio.com/students.json',students).subscribe();
  }

  fetchStudents(){ 
    return this.http.get<Student[]>('https://student-management-syste-5e87d-default-rtdb.firebaseio.com/students.json')
    .subscribe((students)=>{
      this.studentService.setStudents(students);
    })
  }
}
