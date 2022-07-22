import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {StudentList} from "./StudentList";

@Injectable({
  providedIn: 'root'
})
export class NgserviceService {


  constructor(private _http: HttpClient) {
  }

  fetchStudentlistFromRemote(): Observable<any> {
    return this._http.get<any>("http://localhost:8085/getstudentlist");
  }

  deleteStudent(id: number) {
    return this._http.delete<any>('http://localhost:8085/deletestudentbyid/' + id);
  }

  public doCreateStudent(students: StudentList[] | any):Observable<any> {
    return this._http.post("http://localhost:8085/addstudent",students);
  }
  public doUpdateStudent(students: StudentList[] | any,id: number):Observable<any>{
    return this._http.put("http://localhost:8085/edit/" + id,students);
  }
}
