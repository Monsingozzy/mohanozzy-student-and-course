import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {


  constructor() { }
  
  mycdata: any
  S_data: any
  mymap = new Map<String, any>();
  title = 'cource and student';
  visible: boolean = false;
  visible1: boolean = false;

  onclick() {
    this.visible = !this.visible
  }

  on_click() {
    this.visible1 = !this.visible1
  }

  coursedata(frm: any) {
    console.log(frm)
    this.mymap.set(frm.value, undefined);
  }
  ret: any = []
  studentdata(mycdata: any, S_data: any) {
    let student_list = null;

    if( this.mymap.get(mycdata) === undefined)
      student_list=  Array()
    else
      student_list = this.mymap.get(mycdata);

    student_list.push(S_data);
    this.mymap.set(mycdata, student_list);  
  }
}



