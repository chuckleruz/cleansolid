import { JsonDataBaseService, LocalDataBaseService, PostProvider } from "./05-dependency-c";
import { Post } from './05-dependency-d'

export class PostService {

    private posts: Post[] = [];

    constructor( private postProvider: PostProvider ) {}

    async getPosts() {
        //const jsonDB = new JsonDataBaseService();
        this.posts = await this.postProvider.getPosts();

        return this.posts;
    }
}