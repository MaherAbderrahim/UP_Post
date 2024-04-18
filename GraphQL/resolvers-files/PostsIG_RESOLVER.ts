import { PostIGService } from '@/GraphQL/datasources';
import { CreatePostIgInput, UpdatePostIgInput } from '@/GraphQL/generated/types';

const postIGService = new PostIGService();

export const postsIGResolver = {
  Query: {
    getAllPostsIG: () => postIGService.getAllPostsIG(),
    getPostsIGById: (_: any, { id }: { id: number }) => postIGService.getPostIGById(id),
  },
  Mutation: {
    createPostIG: (_: any, { data }: { data: CreatePostIgInput }) => postIGService.createPostIG(data),
    updatePostIG: (_: any, { id, data }: { id: number, data: UpdatePostIgInput }) => postIGService.updatePostIG(id, data),
    deletePostIG: (_: any, { id }: { id: number }) => postIGService.deletePostIG(id),
  },
};
