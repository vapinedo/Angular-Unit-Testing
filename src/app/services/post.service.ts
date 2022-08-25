import { Injectable } from "@angular/core";
import { PostI } from "../interfaces/post.interface";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class PostService {

    constructor(private http: HttpClient) {}
 
    getPosts() {
        return this.http.get<PostI[]>("https://jsonplaceholder.typicode/posts");
    }
    
    deletePost(post: PostI) { 
        return this.http.delete(`https://jsonplaceholder.typicode/posts/${post.id}`);        
    }
}