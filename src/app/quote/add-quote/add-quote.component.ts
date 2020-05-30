import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { FileUploadService } from '../../api/file-upload.service';
import { Category } from '../../model/category';
import { FileModel } from '../../model/FileModel';
// import { FormBuilder, FormGroup } from  '@angular/forms';


@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {
  public contentForm = {
    catId: null,
    quoteImage: null,
    content: null,
    sourceUrl: null
  };
  categories: Category[] = [];
  fileValue: FileModel;

  fileToUpload: File = null;
  // form: FormGroup;
  // formValue = {'image': null};
  imageData;

  constructor(private apiService: ApiService, private fileApi : FileUploadService){}

  postContent(form){
    var formData = new FormData();
    var content = form.value.content;
    var picture_location: any = this.fileValue.name;
    console.log(picture_location);
    var categories_id = form.value.category;
    formData.append('content', content);
    formData.append('picture_location', picture_location);
    formData.append('categories_id', categories_id);

    console.log(formData);

    this.apiService.postContent(formData).subscribe(data => {
      console.log(data);
    })
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('file', file);
      console.log(formData);
      this.fileApi.postFile(formData).subscribe(data => {
        console.log(data);
        this.fileValue = data;
      })
    }
  }

  ngOnInit(){
    this.apiService.getCategories().subscribe((res)=>{
      this.apiService.getCategories().subscribe((res)=>{
        console.log(res);
        this.categories = res; 
      });      
    });
  }

}
