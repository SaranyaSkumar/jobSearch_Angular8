import { Component, OnInit } from '@angular/core';
import {SearchService} from "../services/search.service";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private jobs: any;
  loading: boolean= true;
  subLoader: boolean= true;
  title: string;
  location: string;
  skills: string;
  experience: string;
  count: string;
  payload: object;


  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.loadJobs();
  }

  getAllJobs(){
    this.title= localStorage.getItem('title');
    this.location= localStorage.getItem('location');
    this.skills= localStorage.getItem('skills');
    this.experience= localStorage.getItem('exp');
    this.count= localStorage.getItem('count');
    this.payload={
      title: this.title,
      location: this.location,
      skills: this.skills,
      experience: this.experience,
      count: this.count
    };
    this.searchService.getAllJobs(this.payload)
      .subscribe(data => {
        this.loading=false;
        this.subLoader=false;
        console.log('jobs', data);
        this.jobs= data;
      }, err => {
        console.log('err', err)
      })
  };

  loadJobs(){
    localStorage.setItem('title', '');
    localStorage.setItem('location', '');
    localStorage.setItem('skills', '');
    localStorage.setItem('exp', '');
    localStorage.setItem('count', '20');
    this.getAllJobs();
  }

  redirect(job: any) {
    window.location.href = job.applylink;
  }

  searchJobs(title: string, skills: string, location: string, experience: string) {
    this.subLoader=true;
    console.log("title, ", title, skills, location, experience)
    localStorage.setItem('title', title);
    localStorage.setItem('location', location);
    localStorage.setItem('skills', skills);
    localStorage.setItem('exp', experience);
    this.getAllJobs();
  }
}
