import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentlistComponent} from "./studentlist/studentlist.component";
import {AddstudentComponent} from "./addstudent/addstudent.component";
import {EditstudentComponent} from "./editstudent/editstudent.component";
import {ViewstudentComponent} from "./viewstudent/viewstudent.component";

const routes: Routes = [
  {path:'',component:StudentlistComponent},
  {path:'add',component:AddstudentComponent},
  {path:'edit',component:EditstudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
