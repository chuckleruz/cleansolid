import { PhotosService, PostService, TodoService } from './02-open-close-b';
import { HttClient } from './02-open-close-c';

(async () => {


    const httClient = new HttClient()

    const todoService = new TodoService(httClient);
    const postService = new PostService(httClient);
    const photosService = new PhotosService(httClient);

    const todos = await todoService.getTodoItems();
    const posts = await postService.getPosts();
    const photos = await photosService.getPhotos();
    
    
    console.log({ todos, posts, photos });
    

})();