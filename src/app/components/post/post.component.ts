import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PostI } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() post: PostI | null = null;
  @Output() delete = new EventEmitter<void>();

  onDelete(event: Event) {
    event.stopPropagation();
    this.delete.emit();
  }

}
