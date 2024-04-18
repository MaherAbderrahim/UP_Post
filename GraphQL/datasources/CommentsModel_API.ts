import { PrismaClient } from '@prisma/client';
import { Comment,CreateCommentInput,UpdateCommentInput } from '../generated/types';
const prisma = new PrismaClient();

export class CommentsService {
  async getAllCommentss(): Promise<Comment[]> {
    return prisma.comments.findMany();
  }

  async getCommentsById(id: number): Promise<Comment | null> {
    return prisma.comments.findUnique({
      where: { id },
    });
  }

  async createComments(data: CreateCommentInput): Promise<Comment> {
    return prisma.comments.create({ data });
  }

  async updateComments(id: number, data: UpdateCommentInput): Promise<Comment | null> {
    return prisma.comments.update({
      where: { id },
      data,
    });
  }

  async deleteComments(id: number): Promise<Comment | null> {
    return prisma.comments.delete({
      where: { id },
    });
  }
}
