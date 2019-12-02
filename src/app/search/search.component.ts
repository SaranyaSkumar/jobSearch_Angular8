import { Component, OnInit } from '@angular/core';
import {SearchService} from '../services/search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  jobs: any;
  loading = true;
  subLoader = true;
  title: string;
  location: string;
  skills: string;
  company: string;
  count: string;
  payload: object;
  offset = 0;
  jobCount: any;


  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.loadJobs();
  }

  getAllJobs() {
    this.title = localStorage.getItem('title');
    this.location = localStorage.getItem('location');
    this.skills = localStorage.getItem('skills');
    this.company = localStorage.getItem('company');
    this.count = localStorage.getItem('count');
    this.offset = Number(localStorage.getItem('offset'));
    this.payload = {
      title: this.title,
      location: this.location,
      skills: this.skills,
      company: this.company,
      count: this.count,
      offset: this.offset
    };
    this.searchService.getAllJobs(this.payload)
      .subscribe(data => {
        this.loading = false;
        this.subLoader = false;
        console.log('jobs', data);
        this.jobs = data;
        this.jobCount = this.jobs.length;
        this.jobs = this.jobs.data;
      }, err => {
        console.log('err', err);
      });
  }

  loadJobs() {
    localStorage.setItem('title', '');
    localStorage.setItem('location', '');
    localStorage.setItem('skills', '');
    localStorage.setItem('company', '');
    localStorage.setItem('count', '10');
    localStorage.setItem('offset', '0');
    this.getAllJobs();
  }

  redirect(job: any) {
    window.location.href = job.applylink;
  }

  searchJobs(title: string, skills: string, location: string, company: string) {
    this.subLoader = true;
    console.log( 'title' , title, skills, location, company);
    localStorage.setItem('title', title);
    localStorage.setItem('location', location);
    localStorage.setItem('skills', skills);
    localStorage.setItem('company', company);
    localStorage.setItem('offset', '0');
    this.getAllJobs();
  }

  back() {
    this.offset = (this.offset) - 10;
    localStorage.setItem('offset', String(this.offset));
    this.getAllJobs();
  }

  next() {
    this.offset = (this.offset) + 10;
    localStorage.setItem('offset', String(this.offset));
    this.getAllJobs();
  }
}
