import { Component, OnInit } from '@angular/core';
import {SearchService} from "../services/search.service";
import {FormService} from "../services/form.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  name: string;
  email: string;
  mobile: string;
  postData: object;

  constructor(private formService: FormService) { }

  ngOnInit() {
  }

  storeData(cname: string, cemail: string, cmobile: string) {
    console.log( 'title' , cname, cemail, cmobile);
    this.postData = {
      name : cname,
      email : cemail,
      mobile : cmobile
    };
    this.formService.register(this.postData)
        .subscribe(data => {
          console.log('dataa', data);
        }, err => {
          console.log('err', err);
        });
  }



}
