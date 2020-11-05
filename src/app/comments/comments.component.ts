import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../_services/comment.service';
import { Observable, Subject } from 'rxjs';
import { TokenStorageService } from '../_services/token-storage.service';



@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() public idPost: number;
  @Input() reloadCommentsSubject: Subject<boolean> = new Subject<boolean>();
  comments: Observable<any[]>;
  userIdLogged: number;

  constructor(private token: TokenStorageService, private commentService: CommentService) { }

  ngOnInit(): void {
    this.reloadData();

    this.reloadCommentsSubject.subscribe(response => {
      this.reloadData();
    });


  }

  deleteComment(id: number) {
    this.commentService.deleteComment(id)
      .subscribe(
        data => {
          this.reloadData();
        },
        error => console.log(error));
    return false;
  }



  reloadData() {
    if (this.token.getUser() != null) {
      this.userIdLogged = this.token.getUser().id;
    }

    this.commentService.getAllByIdPost(this.idPost).subscribe(
      data => {
        this.comments = data;
      }, error => {
        console.log(error)
      });
  }


}
