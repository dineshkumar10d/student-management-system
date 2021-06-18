import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalManager } from 'ngb-modal';
import { NgForm } from '@angular/forms';
import { StudentService } from '../student.service';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/sharedFolder/student.model';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  editMode: boolean = false;
  viewMode: boolean = false;
  createMode: boolean = false;
  editedStudentIndex: number;
  student: Student;
  private subscription: Subscription

  @ViewChild('myModal', { static: true }) myModal;
  @ViewChild('f', { static: true }) form: NgForm;
  private modalRef: any;
  constructor(private modalService: ModalManager, private studentService: StudentService) { }

  ngOnInit(): void {

    this.subscription = this.studentService.createStudent
      .subscribe((title: string) => {
        this.viewMode = false;
        this.editMode = false;
        this.openDialog(title);
      })

    this.subscription = this.studentService.EditStudent
      .subscribe((index: number) => {
        this.viewMode = false;
        this.editMode = true;
        this.editedStudentIndex = index;
        this.student = this.studentService.getStudent(index);
        this.form.setValue(this.student);
        this.openDialog("Edit");
      })

    this.subscription = this.studentService.studentSelected
      .subscribe((index: number) => {
        this.editMode = false;
        this.viewMode = true;
        this.student = this.studentService.getStudent(index);
        this.form.setValue(this.student);
        this.openDialog('View');
      })
  }

  openDialog(title: string) {
    this.modalRef = this.modalService.open(this.myModal, {
      title: title,
      size: "lg",
      modalClass: 'modal-dialog modal-dialog-scrollable',
      hideCloseButton: true,
      centered: true,
      backdrop: true,
      animation: true,
      keyboard: false,
      closeOnOutsideClick: false,
      backdropClass: "modal-backdrop"
    })
  }
  closeDialog() {
    //this.modalService.close(this.modalRef);
    this.form.reset();
    this.modalRef.close();
    this.editMode = false;
    this.viewMode = false;
  }

  onSave(form: NgForm) {
    if (this.editMode) {
      this.studentService.updateStudent(this.editedStudentIndex, form.value)
    }
    else {
      this.studentService.addStudent(form.value);
    }
    this.closeDialog()
  }

}
