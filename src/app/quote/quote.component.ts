import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { ApiService } from '../api/api.service';
import { Category } from '../model/category';
import { Content } from '../model/content';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  // cat_id = params['startdate'];
  contents: Content[] = [];
  category: Category;
  category_name : String;
  cat_id : number;
  arr = []; 
  mySubscription;

constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute){
  // this.route.params.subscribe( params => this.cat_id );
  this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.mySubscription = this.router.events.subscribe((event) => {
      this.router.navigated = false;
    }); 
}

    ngOnInit(){
        this.activatedRoute.params.subscribe( (params) => {
          this.cat_id = params.cat_id;
        });
        // console.log(this.cat_id);
        
        this.apiService.getContentsByCategoryId(this.cat_id).subscribe((res)=>{
          this.apiService.getContentsByCategoryId(this.cat_id).subscribe((res)=>{
            console.log(res);
            this.contents = res; 
            for(let key in this.contents){
              this.category_name = (this.contents[key].category.title);
            }
          });      
        });
        this.apiService.getCategoryById(this.cat_id).subscribe((res)=>{
          this.apiService.getCategoryById(this.cat_id).subscribe((res)=>{
            console.log(res);
            this.category = res; 
            
          });      
        });
      }

}
