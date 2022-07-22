import { Component, OnInit } from '@angular/core';
import {StudentList} from "../StudentList";
import {NgserviceService} from "../ngservice.service";

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {
  students: StudentList = new StudentList(0,"","","")
  constructor(private _service: NgserviceService) { }
  ngOnInit(): void {
    console.log()
  }
  public UpdateStudent(){
    this._service.doUpdateStudent(this.students,this.students.id).subscribe(res=>{console.log(res);});
  }
}
