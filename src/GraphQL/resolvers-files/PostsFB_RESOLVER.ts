import { PostFBService } from '../datasources';
import { CreatePostFbInput, UpdatePostFbInput } from '../generated/types';

const postsFBService = new PostFBService();

export const postsFBResolver = {
  Query: {
    getAllPostsFB: () => postsFBService.getAllPostsFB(),
    getPostsFBById: (_: any, { id }: { id: number }) => postsFBService.getPostFBById(id),
  },
  Mutation: {
    createPostsFB: (_: any, { data }: { data: CreatePostFbInput }) => postsFBService.createPostFB(data),
    updatePostsFB: (_: any, { id, data }: { id: number, data: UpdatePostFbInput }) => postsFBService.updatePostFB(id, data),
    deletePostsFB: (_: any, { id }: { id: number }) => postsFBService.deletePostFB(id),
  },
};
