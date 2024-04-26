import type { PrismaClient } from "@prisma/client";
import type { CommentsFBModel } from "../model";

export class CommentsFBService {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async getAllCommentsFB(): Promise<CommentsFBModel[]> {
    return await this.prisma.comments_FB.findMany();
  }

  async getCommentFBById(id: number): Promise<CommentsFBModel | null> {
    return await this.prisma.comments_FB.findUnique({
      where: {
        id: id,
      },
    });
  }
  
  async createCommentFB(username: string, message: string, nb_likes: number, postFB_id: number) : Promise<CommentsFBModel>  {
    return await this.prisma.comments_FB.create({
      data: {
        username: username,
        message: message,
        nb_likes: nb_likes,
        Posts_FB: {
          connect: {
            id: postFB_id,
          },
        },
      },
    });
  }



  async updateCommentFB(id: number, username: string, message: string, nb_likes: number): Promise<CommentsFBModel> {
    return await this.prisma.comments_FB.update({
      where: {
        id: id,
      },
      data: {
        username: username,
        message: message,
        nb_likes: nb_likes,
      },
    });
  }

  async deleteCommentFB(id: number): Promise<CommentsFBModel> {
    return await this.prisma.comments_FB.delete({
      where: {
        id: id,
      },
    });
  }
}