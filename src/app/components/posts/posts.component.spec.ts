import { of } from 'rxjs';
import { PostI } from 'src/app/interfaces/post.interface';
import { PostsComponent } from './posts.component';

describe('Post Component', () => {
  let postList: PostI[];
  let component: PostsComponent;
  let mockPostSvc: any;

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

    mockPostSvc = jasmine.createSpyObj(["getPosts", "deletePost"]);
    component = new PostsComponent(mockPostSvc);
  });

  describe("delete method", () => {
    beforeEach(() => {
      mockPostSvc.deletePost.and.returnValue(of(true)); 
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
      component.delete(postList[1]);
      expect(mockPostSvc.deletePost).toHaveBeenCalledTimes(1);
    });
  });
});
