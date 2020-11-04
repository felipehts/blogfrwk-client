import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Post } from '../_models/post';
import { PostService } from '../_services/post.service';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
  params: Params;
  post: Post = new Post();
 constructor(private postService: PostService,private route: ActivatedRoute){}

  ngOnInit(): void {
      this.route.queryParams.subscribe((params: Params) => {
        this.params = params;
        const id = params['id'];



 this.postService.getPostById(id).subscribe(data => {
      this.post = data;
      console.log(' post', this.post);
    });
        
      });
  }

}


