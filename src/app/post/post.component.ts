import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CommentService } from '../_services/comment.service';
import { PostService } from '../_services/post.service';

import { Subject } from 'rxjs';
import { TokenStorageService } from '../_services/token-storage.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})


export class PostComponent implements OnInit {
  params: Params;
  post: any = {};
  description: string;
  comment: any = {};
  isSucessCommentCreated = false;
  isLoggedIn = false;
  postId: number;
  reloadCommentsSubject: Subject<boolean> = new Subject<boolean>();


  constructor(private tokenStorageService: TokenStorageService, private commentService: CommentService, private postService: PostService, private route: ActivatedRoute) { }

  reloadComments() {
    this.reloadCommentsSubject.next(true);
  }
  ngOnInit(): void {

    if (this.tokenStorageService.getToken() != null) {
      this.isLoggedIn = !!this.tokenStorageService.getToken();
    }

    this.route.queryParams.subscribe((params: Params) => {
      this.params = params;
      const id = params['id'];
      this.postId = id;
      this.reloadData(id);
    });
  }

  reloadData(id: number) {
    this.postService.getPostById(id).subscribe(data => {
      this.post = data;
    });
  }

  createComment() {
    this.comment.idPost = this.post.id;
    this.comment.description = this.description;

    this.commentService.createComment(this.comment)
      .subscribe(
        () => {
          this.reloadData(this.post.id);
          this.reloadComments();
          this.isSucessCommentCreated = true;
        },
        error => {
          console.log(error)
          this.isSucessCommentCreated = false;
        }
      );
  }


}


