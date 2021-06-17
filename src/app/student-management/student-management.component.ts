import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.css']
})
export class StudentManagementComponent implements OnInit {

  elements: any = [
    {
    id: 1, 
    name: 'Praveen', 
    college: 'UCET',
    year: 1, 
    department: 'CSE',
    semester:2,
    mobileNumber:'0000000000'
  },
    {
    id: 2, 
    name: 'DineshKumar', 
    college: 'UCET',
    year: 4, 
    department: 'IT',
    semester: 8,
    mobileNumber:'0000000000'
    },
    {
    id: 3, 
    name: 'Ajith', 
    college: 'UCEV',
    year: 3, 
    department: 'ECE',
    semester:5,
    mobileNumber:'0000000000'
    },
  ];

  headElements = ['ID', 'Name', 'College', 'Year','Department','Semester','Mobile','Action'];
  constructor() { }

  ngOnInit(): void {
  }

  onEdit(index: number){
    console.log('this is button to Edit index:' + index);
  }
  onView(index: number){
    console.log('this is button to View:' + index);
  }
  onDelete(index: number){
    console.log('this is button to Delete:' + index);
    this.elements.splice(index,1);
  }

}
