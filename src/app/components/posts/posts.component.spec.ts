import { PostI } from 'src/app/interfaces/post.interface';
import { PostsComponent } from './posts.component';

describe('Post Component', () => {
  let posts: PostI[];
  let component: PostsComponent;
  let mockPostSvc: any;

  beforeEach(() => {
    posts = [
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
    it("should delete the selected post from de post list", () => {
      
    });
  });
});
