import {PostsIGModel} from "."

export type CommentsIGModel = {
    id: number;
    username: string;
    message: string;
    nb_likes: number;
    created_at : Date;
    updated_at : Date;
    // Foreign keys
    
    postIG_id: number;
    Posts_IG?: PostsIGModel;
  };