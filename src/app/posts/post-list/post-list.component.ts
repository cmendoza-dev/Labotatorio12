import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{
  posts = [
    { id: 1, title: 'Post 1', content: 'Hola amigitos' },
    { id: 2, title: 'Post 2', content: 'Ammazig' },
    { id: 3, title: 'Post 3', content: 'Aprendien angular' },
  ];

  selectedPost: { id: number, title: string, content: string } | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  showDetails(post: { id: number, title: string, content: string }): void {
    this.selectedPost = post;
  }
}
