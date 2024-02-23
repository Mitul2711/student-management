import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-edit-students',
  templateUrl: './edit-students.component.html',
  styleUrls: ['./edit-students.component.css']
})
export class EditStudentsComponent implements OnInit {

  studentForm: FormGroup;
  editData: any;
  dataId: any;

  constructor(private fb: FormBuilder,
    private studentService: StudentsService,
    private toast: NgToastService,
    private router: ActivatedRoute,
    private route: Router
  ) {
    this.dataId = this.router.snapshot.params['id'];
    this.studentForm = this.fb.group({
      name: [''],
      email: ['']
    })
  }

  ngOnInit(): void {
    this.studentService.getStudentById(this.dataId).subscribe(val => {
      // console.log(val);
      this.editData = val;
      this.studentForm = this.fb.group({
        name: [this.editData.name],
        email: [this.editData.email]
      })
    })
  }

  updateData() {
    this.studentService.updateStudentData(this.dataId, this.studentForm.value).subscribe(result => {
      this.toast.success({detail:"SUCCESS", summary: "Data Upadated..", duration: 3000});
      this.route.navigate(['/list']);
    })
  }
}
