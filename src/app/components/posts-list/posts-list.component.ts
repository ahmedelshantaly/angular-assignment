import { PostInterface } from 'src/app/interfaces/post.interface';
import { PostsService } from './../../services/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit {
  constructor(private postsService: PostsService) {}

  posts: PostInterface[] = [];

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((res) => (this.posts = res));
  }
}
