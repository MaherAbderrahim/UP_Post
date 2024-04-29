import type { PrismaClient } from "@prisma/client";
import type { CommentsIGModel } from "../model";

export class CommentsIGService {
  prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async get_All_Comments_IG(): Promise<CommentsIGModel[]> {
    return await this.prisma.comments_IG.findMany();
  }

  async get_Comments_By_Post_Id(id:number): Promise<CommentsIGModel[]> {
    return await this.prisma.comments_IG.findMany({
      where: {
        postIG_id: id,
      },
    });
  } 

  async get_All_User_Comments_On_Page(user_name:string,pageid:number):Promise<CommentsIGModel[]> {
    return await this.prisma.comments_IG.findMany({
      where: {
        Posts_IG: {
          page_id: pageid,
        },
        username: user_name,
      },
    });
  }

  async get_All_User_Comments_On_Post(user_name:string,postid:number):Promise<CommentsIGModel[]> {
    return this.prisma.comments_IG.findMany({
      where: {
        postIG_id: postid,
        username: user_name,
      },
    });
  }

  async get_Comment_IG_By_Id(id: number): Promise<CommentsIGModel | null> {
    return await this.prisma.comments_IG.findUnique({
      where: {
        id: id,
      },
    });
  }
  
  async create_Comment_IG(username: string, message: string, nb_likes: number, postIG_id: number) : Promise<CommentsIGModel>  {
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



  async update_Comment_IG(id: number, username: string, message: string, nb_likes: number): Promise<CommentsIGModel> {
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

  async delete_Comment_IG(id: number): Promise<CommentsIGModel> {
    return await this.prisma.comments_IG.delete({
      where: {
        id: id,
      },
    });
  }
}