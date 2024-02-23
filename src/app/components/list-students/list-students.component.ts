import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { reduce } from 'rxjs';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  studentList: any;

  constructor(private studentService: StudentsService, private toast: NgToastService) {}

  ngOnInit(): void {
    this.studentService.getAllStudent().subscribe((allData) => {
      console.log(allData);
      this.studentList = allData;
    })
  }

  deleteStudent(id: any) {
    this.studentService.deleteStudent(id).subscribe((result) => {
      // console.log(result);
      this.ngOnInit();
      this.toast.success({detail:"SUCCESS", summary: "Student Data Deleted..", duration: 3000})
    })
  }
 
}
