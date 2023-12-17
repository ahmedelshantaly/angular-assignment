import { Component, Input } from '@angular/core';
import { PostInterface } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent {
  @Input()
  post!: PostInterface;
  postFields: string[] = ['title', 'id', 'userId'];
  currentIndex: number = 0;
  activeField: string = '';
  postCardContent: string = '';

  ngOnInit(): void {
    this.activeField = this.postFields[this.currentIndex];
    this.postCardContent = String(this.post[this.activeField]);
  }

  onCardClick() {
    // Increment the index and reset the index exceeds the postFields  array length
    this.currentIndex = (this.currentIndex + 1) % this.postFields.length;

    this.activeField = this.postFields[this.currentIndex];
    this.postCardContent = String(this.post[this.activeField]);
  }
}
