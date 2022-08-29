import { first } from "rxjs";
import { PostComponent } from "./post.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { PostI } from "src/app/interfaces/post.interface";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("Post Componnent", () => {
    let fixture: ComponentFixture<PostComponent>;
    let component: PostComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [PostComponent],
            schemas: [NO_ERRORS_SCHEMA],
        });
        fixture = TestBed.createComponent(PostComponent);
        component = fixture.componentInstance;
    });

    it("should create post component using TestBed", () => {
        expect(component).toBeDefined();
    });

    it("should render the post title in the anchor tag", () => {
        const post: PostI = { id: 1, body: "body 1", title: "title 1" };
        component.post = post;
        fixture.detectChanges();
        const postElement: HTMLElement = fixture.nativeElement;
        const a = postElement.querySelector("a");
        expect(a?.textContent).toContain(post.title);
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