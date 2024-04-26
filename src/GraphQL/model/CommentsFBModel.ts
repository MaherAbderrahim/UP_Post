import {PostsFBModel} from "."

export type CommentsFBModel = {
    id: number;
    username: string;
    message: string;
    nb_likes: number;
    created_at : Date;
    updated_at : Date;
    // Foreign keys
    
    postFB_id: number;
    Posts_FB?: PostsFBModel;
  };