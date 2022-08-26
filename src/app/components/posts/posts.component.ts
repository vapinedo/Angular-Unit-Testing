import { Component, OnInit } from '@angular/core';
import { PostI } from 'src/app/interfaces/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: PostI[] = [];

  constructor(private postSvc: PostService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postSvc.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  delete(post: PostI) {
    this.posts = this.posts.filter((x) => x.id !== post.id);
    this.postSvc.deletePost(post).subscribe();
  }
}
