import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Category } from '../model/category';
import { Content } from '../model/content';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) {}

  public getCategories(){
    return this.httpClient.get<Category[]>(`${this.apiURL}/categories`);
  }

  public getCategoryById(cat_id){
    console.log(cat_id);
    
    return this.httpClient.get<Category>(`${this.apiURL}/categories/`+cat_id);
  }

  public getContents(){
    return this.httpClient.get<Content[]>(`${this.apiURL}/Content`);
  }

  public getContentsByCategoryId(cat_id){
    return this.httpClient.get<Content[]>(`${this.apiURL}/Content/?categories_id=`+cat_id);
  }

  public postContent(data){
    return this.httpClient.post<Content[]>(`${this.apiURL}/Content/`, data);
  }
}
