import { Component, OnInit } from '@angular/core';

import { TokenStorageService } from '../_services/token-storage.service';
import { AlbumService } from '../_services/album.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
   albums: Observable<any>;

  constructor(private token: TokenStorageService, private albumService: AlbumService) { }

  ngOnInit() {
    this.reloadData();
    this.currentUser = this.token.getUser();
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
    this.albumService.getAllFilesByUser().subscribe(
      data => {
        this.albums = data;
      }, error => {
        console.log(error)
      });
  }
}