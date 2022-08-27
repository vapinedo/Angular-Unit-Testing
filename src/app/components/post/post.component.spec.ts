import { first } from "rxjs";
import { PostI } from "src/app/interfaces/post.interface";
import { PostComponent } from "./post.component";

describe("Post Componnent", () => {
    it("shoudl raise an event when the delete post is clicked",  () => {
        const component = new PostComponent();
        const post: PostI = { id: 1, body: "body 1", title: "title 1" };
        component.post = post;
        component.delete.pipe(first()).subscribe(selectedPost => {
            expect(selectedPost).toEqual(post);
        });
        component.onDelete(new MouseEvent("click"));
    });
});