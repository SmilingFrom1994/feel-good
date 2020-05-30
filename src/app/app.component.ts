import { Component } from '@angular/core';
import { ApiService } from './api/api.service';
import { Category } from './model/category';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  categories: Category[] = [];
  constructor(private apiService: ApiService){}

  ngOnInit(){
    this.apiService.getCategories().subscribe((res)=>{
      this.apiService.getCategories().subscribe((res)=>{
        console.log(res);
        this.categories = res; 
      });      
    });
  }
}
