import { Component, OnInit } from '@angular/core';
import {StudentlistComponent} from "../studentlist/studentlist.component";
import {StudentList} from "../StudentList";
import {NgserviceService} from "../ngservice.service";
@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  students: StudentList = new StudentList(0, "", "", "");

  constructor(private _service: NgserviceService) {
  }

  ngOnInit(): void {
    console.log()
  }

  public createStudent() {
    this._service.doCreateStudent(this.students).subscribe(res=>{console.log(res);});
  }
}
