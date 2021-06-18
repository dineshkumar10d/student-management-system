import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalManager } from 'ngb-modal';
import { DialogService } from 'src/app/sharedFolder/dialog.service';
import { NgForm } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  valid = false;
  @ViewChild('myModal', { static: true }) myModal: any;
  @ViewChild('f', { static: true }) form: any;
  private modalRef: any;
  constructor(private modalService: ModalManager, private dialogService: DialogService,private studentService: StudentService) { }

  ngOnInit(): void {
    this.dialogService.dialog.subscribe((title) => {
      this.modalRef = this.modalService.open(this.myModal, {
        title: title,
        size: "lg",
        modalClass: 'mymodal',
        hideCloseButton: false,
        centered: true,
        backdrop: true,
        animation: true,
        keyboard: false,
        closeOnOutsideClick: false,
        backdropClass: "modal-backdrop"
      })
    })
  }

  closeModal() {
    //this.modalService.close(this.modalRef);
    this.form.reset();
    this.modalRef.close();
  }

  onSave(form: NgForm) {
    this.studentService.addStudent(form.value);
    this.closeModal()
  }

}
