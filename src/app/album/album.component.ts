import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';

import { FileUploader } from 'ng2-file-upload';
import { AlbumService } from '../_services/album.service';
import { Observable } from 'rxjs';

const uploadAPI = 'http://localhost:8080/api/album';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  albums: Observable<any>;
  isLoggedIn = false;
  userIdLogged: number;

  constructor(private tokenStorageService: TokenStorageService, private albumService: AlbumService) { }



  public uploader: FileUploader = new FileUploader({
    url: uploadAPI, itemAlias: 'file',
    method: 'POST',
    authTokenHeader: 'Authorization',
    authToken: 'Bearer ' + this.tokenStorageService.getToken()
  });



  ngOnInit(): void {

    if (this.tokenStorageService.getToken() != null) {
      this.isLoggedIn = !!this.tokenStorageService.getToken();
    }

    this.reloadData();

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };


    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      this.reloadData();
      alert('Uploaded successfully');
    };

  }



  deleteFile(name: string) {
    this.albumService.deleteFile(name)
      .subscribe(
        data => {
          this.reloadData();
        },
        error => console.log(error));
        return false;
  }


  reloadData() {
    if (this.tokenStorageService.getUser() != null) {
      this.userIdLogged = this.tokenStorageService.getUser().id;
    }

    this.albumService.getAllFiles().subscribe(
      data => {
        this.albums = data;
      }, error => {
        console.log(error)
      });
  }


}




