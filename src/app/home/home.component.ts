/*import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}
*/

import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { PostService } from '../_services/post.service';
import { UserService } from '../_services/user.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { Post } from '../_models/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    content: string;



// posts: Array<any>;
   posts: Observable<Post[]>;

  constructor(private postService: PostService, private userService: UserService,
    private router: Router, private token: TokenStorageService) {}

  ngOnInit() {
      this.reloadData();
    /*
         this.userService.getPublicContent().subscribe(
      data => {
        this.reloadData();
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );*/
  }

    reloadData() {
        this.postService.getAllPosts().subscribe(data => {
      this.posts = data;
    });
  }

}


