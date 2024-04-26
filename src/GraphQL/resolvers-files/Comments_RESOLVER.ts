import { CreateCommentInput, UpdateCommentInput } from '../generated/types';


export const commentsResolver = {
  Query: {
    getAllComments: async (_,_, { dataSources }),
    getCommentById: (_: any, { id }: { id: number }) => commentsService.getCommentsById(id),
  },
  Mutation: {
    createComment: (_: any, { data }: { data: CreateCommentInput }) => commentsService.createComments(data),
    updateComment: (_: any, { id, data }: { id: number, data: UpdateCommentInput }) => commentsService.updateComments(id, data),
    deleteComment: (_: any, { id }: { id: number }) => commentsService.deleteComments(id),
  },
};
