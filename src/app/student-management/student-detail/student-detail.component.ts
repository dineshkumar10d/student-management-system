import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ModalManager } from 'ngb-modal';
import { NgForm } from '@angular/forms';
import { StudentService } from '../../sharedFolder/student.service';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/sharedFolder/student.model';
import { StorageService } from 'src/app/sharedFolder/storage.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit, OnDestroy {
  editMode: boolean = false;
  viewMode: boolean = false;
  createMode: boolean = false;
  editedStudentId: number;
  student: Student;
  rawStudentData: Student[];
  private subscription: Subscription

  @ViewChild('myModal', { static: true }) myModal;
  @ViewChild('f', { static: true }) form: NgForm;
  private modalRef: any;
  constructor(private modalService: ModalManager, private studentService: StudentService, private storageService: StorageService) { }

  ngOnInit(): void {
    this.subscription = this.studentService.studentChanged
      .subscribe((students: Student[]) => {
        this.rawStudentData = students;
      })

    this.subscription = this.studentService.createStudent
      .subscribe((title: string) => {
        this.viewMode = false;
        this.editMode = false;
        this.openDialog(title);
      })

    this.subscription = this.studentService.editStudent
      .subscribe((formValue: Student) => {
        this.viewMode = false;
        this.editMode = true;
        this.editedStudentId = formValue.id;
        this.form.control.patchValue(formValue);
        this.openDialog('Edit');
      })

    this.subscription = this.studentService.studentSelected
      .subscribe((formValue: Student) => {
        this.editMode = false;
        this.viewMode = true;
        this.form.control.patchValue(formValue);
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
      Object.keys(this.rawStudentData).forEach(index => {
        if (this.rawStudentData[(index)].id === this.editedStudentId) {
          this.storageService.studentPut(index,form.value);
        }
      });
    }
    else {
      this.storageService.studentPost(form.value);
    }
    this.closeDialog()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
