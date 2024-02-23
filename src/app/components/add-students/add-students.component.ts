import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent implements OnInit {

  studentForm: FormGroup;

  constructor(private fb: FormBuilder, private studentService: StudentsService,private toast: NgToastService) {
    this.studentForm = fb.group({
      name: [''],
      email: ['']
    })
  }

  ngOnInit(): void {

  }

  saveData() {
    this.studentService.saveStudentData(this.studentForm.value).subscribe((result) => {
      console.log(result);
      this.toast.success({detail:"SUCCESS", summary: "Data Added..", duration: 3000});
    })
    this.studentForm.reset();
  }

}
