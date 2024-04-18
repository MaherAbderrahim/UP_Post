import 'graphql-import-node';
import { CommentsService } from '@/GraphQL/datasources';
import { CreateCommentInput, UpdateCommentInput } from '@/GraphQL/generated/types';


const commentsService = new CommentsService();

export const commentsResolver = {
  Query: {
    getAllComments: () => commentsService.getAllCommentss(),
    getCommentById: (_: any, { id }: { id: number }) => commentsService.getCommentsById(id),
  },
  Mutation: {
    createComment: (_: any, { data }: { data: CreateCommentInput }) => commentsService.createComments(data),
    updateComment: (_: any, { id, data }: { id: number, data: UpdateCommentInput }) => commentsService.updateComments(id, data),
    deleteComment: (_: any, { id }: { id: number }) => commentsService.deleteComments(id),
  },
};
