import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PostI } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() post!: PostI;
  @Output() delete = new EventEmitter<PostI>();

  onDelete(event: Event) {
    event.stopPropagation();
    this.delete.emit(this.post);
  }

}
