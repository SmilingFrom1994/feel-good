import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

// import { Category } from '../model/category';
import { FileModel } from '../model/fileModel';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  apiURL: string = 'http://localhost:8080/api/files/upload_photos';
  fileReturn: String[];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/xml',
      'Authorization': 'jwt-token'
    })
  };
  constructor(private httpClient: HttpClient) { }


  postFile(data): Observable<FileModel> {
    
    // console.log(fileToUpload);
    return this.httpClient.post<any>(this.apiURL, data);
  }

  handleError(error) {

    let errorMessage = '';
 
    if (error.error instanceof ErrorEvent) {
 
      // client-side error
 
      errorMessage = `Error: ${error.error.message}`;
 
    } else {
 
      // server-side error
 
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
 
    }
 
    window.alert(errorMessage);
 
    return throwError(errorMessage);
 
  }


}
