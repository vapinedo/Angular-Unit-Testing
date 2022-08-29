import { of } from 'rxjs';
import { TestBed } from "@angular/core/testing";
import { PostsComponent } from './posts.component';
import { PostI } from 'src/app/interfaces/post.interface';
import { PostService } from 'src/app/services/post.service';

class mockPostSvc {
  getPosts() {}

  deletePost(post: PostI ) {
    return of(true);
  }
}

describe('Posts Component', () => {
  let postList: PostI[];
  let component: PostsComponent;
  let postService: any;

  beforeEach(() => {
    postList = [
      {
        id: 1,
        body: 'Body 1',
        title: 'Title 1',
      },
      {
        id: 2,
        body: 'Body 2',
        title: 'Title 2',
      },
      {
        id: 3,
        body: 'Body 3',
        title: 'Title 3',
      },
    ];
    
    // mockPostSvc = jasmine.createSpyObj(["getPosts", "deletePost"]);
    TestBed.configureTestingModule({
      providers: [PostsComponent, {
        provide: PostService, 
        useClass: mockPostSvc
      }]
    });
    component = TestBed.inject(PostsComponent);
    postService = TestBed.inject(PostService);
  });

  describe("delete method", () => {
    beforeEach(() => {
      // postService.deletePost.and.returnValue(of(true)); 
      component.posts = postList;
    });

    it("should delete the selected post from de post list", () => {
      component.delete(postList[1]);
      expect(component.posts.length).toBe(2);
    });

    it("should delete the actual selected post in post property", () => {
      component.delete(postList[1]);
      for(let post of component.posts) {
        expect(post).not.toEqual(postList[1]);
      }
    });

    it("should call the delete method on PostService, only once", () => {
      spyOn(postService, "deletePost").and.callThrough();
      component.delete(postList[1]);
      expect(postService.deletePost).toHaveBeenCalledTimes(1);
    });
  });
});
