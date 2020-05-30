import { Component } from "@angular/core";
import { AppComponent } from "../app.component"
import { ApiService } from '../api/api.service';
import { Category } from '../model/category';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
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