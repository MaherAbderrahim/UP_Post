import {PostsIGModel,PostsFBModel} from "."

export type CommentsModel = {
    id: number;
    FBId: number | null;
    IGId: number | null;
    username: string;
    message: string;
    nb_likes: number;
    postsFB?: PostsFBModel;
    postsIG?: PostsIGModel;
  };