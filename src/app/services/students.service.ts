import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  url = 'http://localhost:3000/students'

  constructor(private http: HttpClient, private toast: NgToastService) { }

  getAllStudent() {
    return this.http.get(this.url);
  }

  saveStudentData(data: any) {
    console.log(data);
    return this.http.post(this.url, data);
  }

  deleteStudent(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  } 

  getStudentById(id: any) {
    return this.http.get(`${this.url}/${id}`)
  }

  updateStudentData(id: any, data: any) {
    return this.http.put(`${this.url}/${id}`, data);
  }

}
