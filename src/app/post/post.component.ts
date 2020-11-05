import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CommentService } from '../_services/comment.service';
import { PostService } from '../_services/post.service';
import { Post } from '../_models/post';
import { Subject } from 'rxjs';
import { TokenStorageService } from '../_services/token-storage.service';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})


export class PostComponent implements OnInit {
  params: Params;
  postUpdate: Post;
  post: any = {};
  descriptionComment: string;
  comment: any = {};
  isSucessCommentCreated = false;
  isLoggedIn = false;
  postId: number;
  reloadCommentsSubject: Subject<boolean> = new Subject<boolean>();
  userIdLogged: number;

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


      if (id != 0) {
        this.reloadData(id);
      } else {
        this.post.id = id;
        this.post.title = "";
        this.post.description = "";
        console.log(this.post);
      }
    });
  }

  reloadData(id: number) {
    if (this.tokenStorageService.getUser() != null) {
      this.userIdLogged = this.tokenStorageService.getUser().id;
    }

    this.postService.getPostById(id).subscribe(data => {
      this.post = data;
    });

  }

  createComment() {
    this.comment.idPost = this.post.id;
    this.comment.description = this.descriptionComment;

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

  updatePost() {
    this.postUpdate = new Post();

    this.postUpdate.id = this.post.id;
    this.postUpdate.title = this.post.title;
    this.postUpdate.description = this.post.description;

    this.postService.updatePost(this.postUpdate)
      .subscribe(
        data => {
          this.reloadData(this.post.id);
        },
        error => console.log(error));
    return false;
  }

  deletePost(id: number) {
    this.postService.deletePost(id)
      .subscribe(
        data => {
         window.location.href ="/home";
        },
        error => console.log(error));
    return false;
  }


  createPost() {
    this.postUpdate = new Post();

    this.postUpdate.id = this.post.id;
    this.postUpdate.title = this.post.title;
    this.postUpdate.description = this.post.description;

    this.postService.createPost(this.postUpdate)
      .subscribe(
        data => {
          this.post = data;
          window.location.href = "post?id=" + this.post.id;
        },
        error => console.log(error));
    return false;
  }


}


