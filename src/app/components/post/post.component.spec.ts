import { first } from "rxjs";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { PostComponent } from "./post.component";
import { PostI } from "src/app/interfaces/post.interface";

describe("Post Componnent", () => {
    let fixture: ComponentFixture<PostComponent>;
    let component: PostComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [PostComponent],
        });
        fixture = TestBed.createComponent(PostComponent);
        component = fixture.componentInstance;
    });

    it("should create post component using TestBed", () => {
        expect(component).toBeDefined();
    });

    it("should raise an event when the delete post is clicked",  () => {
        const post: PostI = { id: 1, body: "body 1", title: "title 1" };
        component.post = post;
        component.delete.pipe(first()).subscribe(selectedPost => {
            expect(selectedPost).toEqual(post);
        });
        component.onDelete(new MouseEvent("click"));
    });
});