import type { PrismaClient } from "@prisma/client";
import type { CommentsIGModel } from "../model";

export class CommentsIGService {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async getAllCommentsIG(): Promise<CommentsIGModel[]> {
    return await this.prisma.comments_IG.findMany();
  }

  async getCommentIGById(id: number): Promise<CommentsIGModel | null> {
    return await this.prisma.comments_IG.findUnique({
      where: {
        id: id,
      },
    });
  }
  
  async createCommentIG(username: string, message: string, nb_likes: number, postIG_id: number) : Promise<CommentsIGModel>  {
    return await this.prisma.comments_IG.create({
      data: {
        username: username,
        message: message,
        nb_likes: nb_likes,
        Posts_IG: {
          connect: {
            id: postIG_id,
          },
        },
      },
    });
  }



  async updateCommentIG(id: number, username: string, message: string, nb_likes: number): Promise<CommentsIGModel> {
    return await this.prisma.comments_IG.update({
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

  async deleteCommentIG(id: number): Promise<CommentsIGModel> {
    return await this.prisma.comments_IG.delete({
      where: {
        id: id,
      },
    });
  }
}