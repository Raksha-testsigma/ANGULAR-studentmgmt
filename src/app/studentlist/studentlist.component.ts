import { Component, OnInit } from '@angular/core';
import {NgserviceService} from "../ngservice.service";
import {StudentList} from "../StudentList";

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  studentlist: StudentList[] | any;

  constructor(private _service: NgserviceService) {
  }

  ngOnInit(): void {
    this._service.fetchStudentlistFromRemote().subscribe(
      (data)=> this.studentlist=data, error => console.log("exception occured"))
  }
  deletestudentbyid(id:number)
   {
     this._service.deleteStudent(id).subscribe(
       (data)=>this.studentlist=data,error=>console.log("exception"))
   }
  public createStudent()
  {
    this._service.doCreateStudent(this.studentlist).subscribe(res=>{console.log(res);});
  }
  public UpdateStudent(){
    this._service.doUpdateStudent(this.studentlist,this.studentlist.id).subscribe(res=>{console.log(res);});
  }

}
