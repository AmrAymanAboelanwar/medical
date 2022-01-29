import { SearchModel } from './../../models/seachModel';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchObj:SearchModel=new SearchModel();
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  search():void{
   // this.router.navigateByUrl('/search/'+);
  }

}
